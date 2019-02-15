/* 轮播js */
$(document).ready(function(e) {
  var unslider04 = $("#b04").unslider({
      dots: true
    }),
    data04 = unslider04.data("unslider");
  $(".unslider-arrow04").click(function() {
    var fn = this.className.split(" ")[1];
    data04[fn]();
  });
});
/* 鼠标移动li变色 */
$(".case_menu>li").mouseenter(function() {
  //console.log("123");
  $(this)
    .siblings()
    .css("background", "#fff");
  $(this)
    .children()
    .css("color", "#fff");
  $(this).css("background", "red");
  $(this)
    .siblings()
    .children()
    .css("color", "#000");
});

/* 大图显示 --图片流*/
var tabs = document.querySelectorAll("[data-toggle=tab]");
//console.log(tabs)
/* 绑定事件处理函数 */
for (var tab of tabs) {
  tab.onmouseenter = function() {
    var tab = this;
    var id = tab.getAttribute("data-target");
    var currDiv = document.getElementById(id);
    var prevDiv = document.getElementsByClassName("f3_dplay_1");
    // console.log(prevDiv)
    for (var i = 0; i < prevDiv.length; i++) {
      prevDiv[i].style.zIndex = "";
    }
    currDiv.style.zIndex = 10;
  };
}

/* 鼠标进入的时候卡片切换 */
$(".sj_elite_item").mouseenter(function(e) {
  e.stopPropagation();
  //console.log("123")
  $(".f4_front").css("zIndex", 0);
  $(".f4_reverse").css("zIndex", 10);
});
$(".sj_elite_item").mouseleave(function(e) {
  e.stopPropagation();
  //console.log("123")
  $(".f4_front").css("zIndex", 10);
  $(".f4_reverse").css("zIndex", 0);
});
$(".f4_reverse>a:last-child").mouseenter(function(e) {
  $(".f4_reverse>a:last-child").css("background", "red");
});
$(".f4_reverse>a:last-child").mouseleave(function(e) {
  $(".f4_reverse>a:last-child").css("background", "#ccc");
});
/* 鼠标移入变色 */
$(".f5_item>a").hover(
  function() {
    $(this).css("background", "red");
    $(this).css("color", "#fff");
  },
  function() {
    $(this).css("background", "#ccc");
    $(this).css("color", "#333");
  }
);

/* 表单验证 */
/* 1.1点击事件 */
$(".f6_btn3").click(function() {
  var uname = /^\s*$/;
  var myname = $("input[name=uname]")[0].value;
  //console.log(myname)
  if (uname.test(myname)) {
    alert("用户名不能为空");
    return;
  }
  var phonereg = /^[1][3,4,5,7,8][0-9]{9}$/;
  var myphone = $("input[name=phone]")[0].value;
  console.log(myphone);
  if (!phonereg.test(myphone)) {
    alert("请输入有效手机号");
    return;
  }
  console.log("数据");
  /* 1.2后台发送数据 */
  $.ajax({
    url: "http://127.0.0.1:3000/addkh",
    type: "get",
    data: {myname,myphone},
    dataType:"json",
  }).then(success => {
    if (success.code == 1) {
      alert("恭喜你提交成功");
    } else {
      alert("系统错误，提交失败，请稍后再试");
    }
  });
  /* 最后的 */
});
