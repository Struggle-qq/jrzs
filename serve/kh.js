const express = require("express");
var router=express.Router();
const mysql = require("mysql");
const pool=require('./pool');

router.get("/",(req,res)=>{
  var myname=req.query.myname;
  var myphone=req.query.myphone;
  var sql="insert into xz_phone value(null,?,?)";
  pool.query(sql,[myname,myphone],(err,result)=>{
    if(err) throw err;;
    if(result.affectedRows>0){
      res.send({code:1,msg:"提交成功"});
      return;
    }else{
      res.send({code:-1,msg:"提交失败"})
    }
  })
});
module.exports=router;