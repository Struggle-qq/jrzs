const express = require("express");
var app = express();
app.use(express.static("public"));
app.listen(3000);
const pool = require("./pool");
const khRouter=require("./kh.js");

//express mysql 参数 request;response
//跨域访问配置
//1:加载模块cors
 const cors = require("cors");
//2:配置cors
app.use(cors({
  origin:["http://127.0.0.1:5500",
         "http://localhost:5500"],//允许列表
  credentials:true   //是否验证
}))
//3:加载第三方模块: express-session
const session = require("express-session");
//4:对模块配置
app.use(session({
  secret:"128位随机字符串",   //安全令牌
  resave:false,              //请求保存
  saveUninitialized:true,    //初始化
  cookie:{                   //sessionid保存时
    maxAge:1000*60*60*24     //间1天 cookie
  }
})); 



app.get("/getimg",(req,res)=>{
  var nid=req.query.nid;
  var sql=`select count(id) from xz_img where nid=?`
  pool.query(sql,[nid],(err,result)=>{
    if(err) throw err;
    //var obj.data = result;
    //console.log("123");
    res.send({code:1,msg:result});
    console.log(result);
  })
})

app.use("/addkh",khRouter);