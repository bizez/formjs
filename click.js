document.write('<style type="text/css">.bt3{font-size: 22px;color: #07631d;font-family:Roboto,arial,sans-serif;}.nr3{color:#000;font-size: 15px;font-family: Roboto,arial,sans-serif;}.modal3{position: absolute;width: 400px;height: 300px;margin-top: 10%;left: 50%;margin-left: -200px;background: #fff;border:1px solid #ddd;border-radius:5px;}.moda3-cover,.modal3-cover2{display: none;width: 100%;height: 100%;z-index: 9999;position: fixed;top: 0;left: 0;background: rgba(34, 34, 34, 0.77);opacity: 1;}.moda3{position: absolute;width: 400px;margin-left: -200px;height: 155px;text-align: center;border-radius: 5px;top: 40%;left: 50%;-left: -200px;background: #fff;border:1px solid #ddd;}</style><div id="modal3cover2" class="modal3-cover2" style="text-align: center;"><div class="modal3"><div><img src="https://cdn.jsdelivr.net/gh/bizez/formjs/success.png" style="width: 100px;margin-top: 5%"></div><div><h3 id="bt3" class="bt3"></h3></div><div><div id="nr3" class="nr3"></div></div><div><button onclick="cosec1()" style="margin-top:10% ; background: #31cae2;padding: 5px 15px;border: medium;line-height: 1.5;color: #fff;border-radius:5px;font-size:16px;font-family:Roboto,arial,sans-serif;">OK</button></div></div></div><div id="moda3cover" class="moda3-cover"><div class="moda3"><div id="msg3" style="margin-top: 10%;color: red;font-size: 15px;font-family: Roboto,arial,sans-serif;"></div><div><button onclick="cosec()" style="margin-top: 8%; background: #31cae2;border: medium;border-radius: 5px;padding: 5px 15px;font-size: 15px;line-height: 1.5;color: #fff;font-family: Roboto,arial,sans-serif;">OK</button></div></div></div><div id="moda3cover2" class="moda3-cover"><div class="moda3" style="padding: 0 5px;"><div id="msg32" style="margin-top: 10%;color: red;font-size: 15px;font-family: Roboto,arial,sans-serif;"></div><div><button onclick="cosec9()" style="margin-top: 5%; background: #31cae2;border: medium;border-radius: 5px;padding: 5px 15px;font-size: 15px;line-height: 1.5;color: #fff;font-family: Roboto,arial,sans-serif;">OK</button></div></div></div><div id="iforms" style="background-color: white;height: 360px;display:none;width: 100%;max-width:500px;position: fixed;right: 0px;bottom:0px;z-index:1000;box-shadow: 5px 5px 90px #888888;"><div onclick="clos()" style="position: absolute;right: 12px;top: 12px;z-index: 101;cursor:pointer;"><img src="https://cdn.jsdelivr.net/gh/bizez/formjs/chat-close.png"></div><div style="height:40px;background-color: #4285f4;"><p style="margin:0px;line-height: 40px;margin-left: 10px;color: white;font-size: 13px;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;">Contatc Us</p></div><div style="background-color: #ffffff;text-align: center;"><div style="margin-top:10px"><input style="font-size: 12px;width: 84%;border: 1px solid #fb9999;padding-left: 3%;line-height: 24px;color: #999;border-radius: 3px;margin-top: 10px;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;" id="title" names="title" type="hidden" valid="required" value=""/><input placeholder="Please Enter Your Name*" style="padding: 0;font-size:12px;width: 84%;border: 1px solid #fb9999;padding-left: 3%;line-height: 30px;color: #999;border-radius: 3px;margin-top: 10px;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;" id="names" names="names" onclick="namebss()" onBlur="namebss2()" type="text" valid="required" value=""/><input placeholder="Please Enter Your Email*" style="padding: 0;font-size:12px;width: 84%;border: 1px solid #fb9999;padding-left: 3%;line-height: 30px;color: #999;border-radius: 3px;margin-top: 10px;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;" id="emails" onclick="emailbss()" onBlur="emailbss2()" names="emails" type="text" valid="required" value=""/><input placeholder="Please Enter Your Phone*" type="text" style="padding: 0;font-size:12px;width: 84%;border: 1px solid #fb9999;padding-left: 3%;line-height: 30px;color: #999;border-radius: 3px;margin-top: 10px;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;" id="phones" onclick="phonebss()" onBlur="phonebss2()" names="phones" valid="required" value=""/><input placeholder="To get best quotes, we recommend including the following details:&#13;&#10;-Self introduction&#13;&#10;-What are you looing for&#13;&#10;-Required specifications&#13;&#10;-Inquire about price/MOQ" type="hidden" style="font-size:12px;width: 84%;border: 1px solid #fb9999;padding-left: 3%;line-height: 24px;color: #999;border-radius: 3px;margin-top: 10px;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;" id="imgcs" names="img" valid="required" value=""/><textarea style="font-size:12px;height: 110px;width: 84%;border: 1px solid #fb9999;padding-left: 3%;padding-top: 10px;line-height: 17px;color: #999;border-radius: 3px;margin-top: 10px;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;" id="masgss" errortext="Please tell us your detailed request" placeholder="To get best quotes, we recommend including the following details:&#13;&#10;-Self introduction&#13;&#10;-What are you looing for&#13;&#10;-Required specifications&#13;&#10;-Inquire about price/MOQ" id="masgss" onclick="masgbss()" onBlur="masgbss2()" names="Contents" rows="5" type="" valid="required"></textarea></div><div></div><span style="display: inline-block;background-color: #05b215;border-radius: 3px;line-height: 30px;border: 0;width: 38%;margin: 10px 2%;padding: 0;color: #fff;cursor: pointer;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;" onclick="sende()">Send Inquiry</span><span style="display: inline-block;border-radius: 3px;line-height: 30px;border: 0;width: 38%;margin: 10px 2%;padding: 0;color: #fff;cursor: pointer;background-color: #d0d0d0;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;" onclick="reset()">RESET</span></div></div></div>');
document.write('<div id="kfs1" style="display:none;width: 100%;max-width:500px;height:164px;position: fixed;right: 0px;bottom:0px;z-index:1000;box-shadow: 5px 5px 90px #888888;"><div onclick="allclos(t)" style="position: absolute;right: 12px;top: 12px;z-index: 101;cursor:pointer;"><img src="https://cdn.jsdelivr.net/gh/bizez/formjs/chat-close.png"></div><div style="height:40px;background-color: #4285f4;"><p style="margin:0px;line-height: 40px;margin-left: 10px;color: white;font-size: 13px;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;">ONLINE CHAT</p></div><div style="height:124px;background-color: #ffffff;display: flex;"><div style="width:30%;text-align: center;padding-top: 16px;float: left;"><img src="https://cdn.jsdelivr.net/gh/bizez/formjs/chat-img1.png"/><p style="margin:0px;font-size: 12px;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;color: #656565;">Cilina</p></div><div style="float: left;margin-top: 30px;width: 66%;"><img src="https://cdn.jsdelivr.net/gh/bizez/formjs/chat-right-bg.png"/><span style="width: 80%;display: inline-block;padding: 10px 10px 10px 25px;border: 1px solid #e8e8e8;font-size: 12px;background-color: #fffcf2;border-radius: 3px;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;color: #656565;">Hi,welcome to visit our website.</span></div></div></div>');
document.write('<div id="kfs2" style="display:none;background: white;width: 100%;max-width:500px;height:260px;position: fixed;right: 0px;bottom:0px;z-index:1000;box-shadow: 5px 5px 90px #888888;"><div onclick="allclos(t)" style="position: absolute;right: 12px;top: 12px;z-index: 101;cursor:pointer;"><img src="https://cdn.jsdelivr.net/gh/bizez/formjs/chat-close.png"></div><div style="height:40px;background-color: #4285f4;"><p style="margin:0px;line-height: 40px;margin-left: 10px;color: white;font-size: 13px;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;">ONLINE CHAT</p></div><div style="height:112px;background-color: #ffffff;display: flex;"><div style="width:30%;text-align: center;padding-top: 16px;float: left;"><img src="https://cdn.jsdelivr.net/gh/bizez/formjs/chat-img1.png"/><p style="margin:0px;font-size: 12px;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;color: #656565;">Cilina</p></div><div style="float: left;margin-top: 30px;width: 66%;"><img src="https://cdn.jsdelivr.net/gh/bizez/formjs/chat-right-bg.png"/><span style="width: 80%;display: inline-block;padding: 10px 10px 10px 25px;border: 1px solid #e8e8e8;background-color: #fffcf2;border-radius: 3px;font-size: 12px;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;color: #656565;">Hi,welcome to visit our website.</span></div></div><div style="background-color: #ffffff;display: flex;"><div style="width: 30%;text-align: center;padding-top: 4px;float: left;"><img src="https://cdn.jsdelivr.net/gh/bizez/formjs/chat-img1.png"/><p style="margin:0px;font-size: 12px;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;color: #656565;">Cilina</p></div><div style="float: left;margin-top: 0px;width:66%;"><img src="https://cdn.jsdelivr.net/gh/bizez/formjs/chat-right-bg.png"/><span style="display: inline-block;padding: 10px 10px 10px 25px;border: 1px solid #e8e8e8;background-color: #fffcf2;border-radius: 3px;width: 80%;;font-size: 12px;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;color: #656565;">How can I help you today?</span></div></div></div></div>');
document.write('<div id="kfs3" style="display:none;background: white;width: 100%;max-width:500px;height:309px;position: fixed;right: 0px;bottom:0px;z-index:1000;box-shadow: 5px 5px 90px #888888;"><div onclick="allclos(t)" style="position: absolute;right: 12px;top: 12px;z-index: 101;cursor:pointer;"><img src="https://cdn.jsdelivr.net/gh/bizez/formjs/chat-close.png"></div><div style="height:40px;background-color: #4285f4;"><p style="margin:0px;line-height: 40px;margin-left: 10px;color: white;font-size: 13px;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;">ONLINE CHAT</p></div><div style="height:112px;background-color: #ffffff;display: flex;"><div style="width:30%;text-align: center;padding-top: 16px;float: left;"><img src="https://cdn.jsdelivr.net/gh/bizez/formjs/chat-img1.png"/><p style="margin:0px;font-size: 12px;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;color: #656565;">Cilina</p></div><div style="float: left;margin-top: 30px;width:66%;"><img src="https://cdn.jsdelivr.net/gh/bizez/formjs/chat-right-bg.png"/><span style="width: 80%;display: inline-block;padding: 10px 10px 10px 25px;border: 1px solid #e8e8e8;background-color: #fffcf2;border-radius: 3px;font-size: 12px;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;color: #656565;">Hi,welcome to visit our website.</span></div></div><div style="background-color: #ffffff;display: flex;"><div style="width: 30%;text-align: center;padding-top: 4px;float: left;"><img src="https://cdn.jsdelivr.net/gh/bizez/formjs/chat-img1.png"/><p style="margin:0px;font-size: 12px;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;color: #656565;">Cilina</p></div><div style="float: left;margin-top: 0px;width: 66%;"><img src="https://cdn.jsdelivr.net/gh/bizez/formjs/chat-right-bg.png"/><span style="display: inline-block;padding: 10px 10px 10px 25px;border: 1px solid #e8e8e8;background-color: #fffcf2;border-radius: 3px;width: 80%;font-size: 12px;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;color: #656565;">How can I help you today?</span></div></div><div style="clear: both;text-align: center;margin-left: 18%;"><span onclick="form()" style="display: inline-block;margin-right: 8px;font-size: 12px;background-color: #05b215;color: white;padding: 10px 16px;border-radius: 4px;cursor:pointer;position: relative;line-height: 12px;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;">Chat Now<span id="shans" style="display: inline-block;background-color: red;color:#ffffff;border-radius: 50%;width: 15px;height: 15px;font-size: 12px;position: absolute;right: -4px;top: -4px;line-height: 15px;">3</span></span><span onclick="allclos()" style="display: inline-block;font-size: 12px;background-color: #d0d0d0;color: white;padding: 10px 16px;border-radius: 4px;cursor:pointer;margin-left: 2%;line-height: 12px;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;">Chat Later</span></div></div></div>');
function reset(){
    document.getElementById("names").value="";
    document.getElementById("emails").value="";
    document.getElementById("masgss").value="";
    document.getElementById("phones").value="";
}
function xy(kfs1,kfs2,kfs3){
    var obj1 = document.getElementById(kfs1);
    obj1.style.display= "block";
    var obj2 = document.getElementById(kfs2);
    obj2.style.display= "none";
    var obj3 = document.getElementById(kfs3);
    obj3.style.display= "none";
}
var t=setTimeout(function(){
    xy('kfs1','kfs2','kfs3');
    setTimeout(function(){
        xy('kfs2','kfs1','kfs3');
        setTimeout(function(){
            xy('kfs3','kfs1','kfs2');
        },3000);
    },3000);
},3000);
function opens(){
    var obj = document.getElementById("bnts");
    obj.style.display= "none";
    var obj2 = document.getElementById("iforms");
    obj2.style.display= "block";
}
function clos(){
    var obj = document.getElementById("iforms");
    obj.style.display= "none";
    var obj2 = document.getElementById("bnts");
    obj2.style.display= "block";
}
function cosec(){
   
        document.getElementById("msg3").innerHTML=' ';
       var moda3cover = document.getElementById("moda3cover");
          moda3cover.style.display= "none";
}
function cosec9(){
   
        document.getElementById("msg32").innerHTML=' ';
       var moda3cover = document.getElementById("moda3cover2");
          moda3cover.style.display= "none";
}
function cosec1(){
   
       document.getElementById("bt3").innerHTML=' ';
     document.getElementById("nr3").innerHTML=' ';
   var modal3cover2 = document.getElementById("modal3cover2");
          modal3cover2.style.display= "none";
      window.location.reload();
}
function form(){
    var obj = document.getElementById("iforms");
    obj.style.display= "block";
    var obj1 = document.getElementById("kfs1");
    obj1.style.display= "none";
    var obj2 = document.getElementById("kfs2");
    obj2.style.display= "none";
    var obj3 = document.getElementById("kfs3");
    obj3.style.display= "none";
}
var wh = window.screen.availWidth;
if(wh<800){
  function allclos(x){
    clearTimeout(x);
    var obj = document.getElementById("bnts");
    obj.style.display= "block";
    var obj1 = document.getElementById("kfs1");
    obj1.style.display= "none";
    var obj2 = document.getElementById("kfs2");
    obj2.style.display= "none";
    var obj3 = document.getElementById("kfs3");
    obj3.style.display= "none";
   var shansxi = 1;
function shanmi(){
  for(i=0;i<6;i++){
    setTimeout(function(){
      console.log(11);
       if(shansxi == 1){
 var shanmxi = document.getElementById("bnts");
  shanmxi.style.display= "none";
  shansxi = 2;
}else{
 var shanmxi = document.getElementById("bnts");
  shanmxi.style.display= "inline-block";
  shansxi = 1;
  }
    },i*100);
}
}
}
    document.write('<div id="bnts" style="width:100%;display:none;hight:40px;position: fixed;bottom:0px;left: 0px;z-index:1000"><span style="display: inline-block;text-align: center;width: 50%;line-height: 40px;background-color: #f4c811;color:#ffffff;cursor:pointer;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;" onclick="opens()">Contact Us</span><span style="display: inline-block;text-align: center;width: 50%;line-height: 40px;box-shadow: 0 1px 3px #ccc;background-color: #ffffff;cursor:pointer;" onclick="opens()">Get Price</span></div>');
    var objs = document.getElementById("iforms");
    objs.style.width= "100%";
    objs.style.bottom= "0px";
   objs.style.left= "0px";
    var objs1 = document.getElementById("kfs1");
    objs1.style.width= "100%";
    objs1.style.bottom= "0px";
  objs1.style.left= "0px";
    var objs2 = document.getElementById("kfs2");
    objs2.style.width= "100%";
    objs2.style.bottom= "0px";
  objs2.style.left= "0px";
    var objs3 = document.getElementById("kfs3");
    objs3.style.width= "100%";
    objs3.style.bottom= "0px";
  objs3.style.left= "0px";
    var masgss = document.getElementById("masgss");
    masgss.style.width= "84%";
}else{
  function allclos(x){
    clearTimeout(x);
    var obj = document.getElementById("bnts");
    obj.style.display= "block";
    var obj1 = document.getElementById("kfs1");
    obj1.style.display= "none";
    var obj2 = document.getElementById("kfs2");
    obj2.style.display= "none";
    var obj3 = document.getElementById("kfs3");
    obj3.style.display= "none";
   var shansxi = 1;
function shanmi(){
  for(i=0;i<6;i++){
    setTimeout(function(){
      console.log(11);
       if(shansxi == 1){
 var shanmxi = document.getElementById("bnts");
  shanmxi.style.display= "none";
  shansxi = 2;
}else{
 var shanmxi = document.getElementById("bnts");
  shanmxi.style.display= "inline-block";
  shansxi = 1;
  }
    },i*100);
}
}
setTimeout(function(){
  setInterval(function(){
shanmi();
    },5000);
},3000);
}
    document.write('<div id="bnts" class="bntsy" style="display:none;width:116px;text-align: center;position: fixed;right: 0px;bottom: 190px;z-index:90;cursor:pointer;z-index:999;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;" onclick="opens()"><img src="https://cdn.jsdelivr.net/gh/bizez/formjs/chat-img1.png"/><p style="position: relative;color: #e64e5f;font-size: 14px;font-weight: 500;font-family: po;">Online Chat<span id="shanss" style="display: inline-block;background-color: red;color:#ffffff;border-radius: 50%;width: 16px;height: 16px;font-size: 12px;position: absolute;right: 4px;top: -10px;line-height: 16px;">3</span></p></div>');
}
var imgs=[];
function preview(obj){
    var file =  document.getElementById('imgcs').value;//获取文件
    var index = file.lastIndexOf('.'); //获取最后一位小数点
    var extension =  file.substr(index +  1);
    var arr = ['jpeg','png','jpg','JPG','gif'];
    var iLen = obj.files.length;
    if (isInArray(arr,extension)) {
        for(var i=0;i<iLen;i++){
            imgs[i] = obj.files[i];
        }
    } else {
        //alert('only supports:jpeg jpg JPG png gif  files!');
         document.getElementById("msg3").innerHTML='only supports:jpeg jpg JPG png gif  files!';
       var moda3cover = document.getElementById("moda3cover");
          moda3cover.style.display= "block";
        return false;
    }
}
function isInArray(arr,value){
    for(var i = 0; i < arr.length; i++){
        if(value === arr[i]){
            return true;
        }
    }
    return false;
}
var pan = "";
function goPAGE() {
                if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
                    /*window.location.href="你的手机版地址";*/
                    pan ="mobile";
                }
                else {
                    /*window.location.href="你的电脑版地址";    */
                    pan = "pc";
                }
            }
            goPAGE();
function sende()
{
      
    console.log(imgs);
    var form = new FormData(); // FormData 对象
    var host = window.location.host;
  var hostname=window.location.href;
    var name = document.getElementById("names").value;
    var email = document.getElementById("emails").value;
    var masg = document.getElementById("masgss").value;
    var phone = document.getElementById("phones").value;
      if(name==""){
        //alert("Please enter your Name");
         document.getElementById("msg3").innerHTML='Please enter your Name';
       var moda3cover = document.getElementById("moda3cover");
          moda3cover.style.display= "block";
        return false;
    }
    if(email==""){
        //alert("Please enter your Email");
        document.getElementById("msg3").innerHTML='Please enter your Email';
       var moda3cover = document.getElementById("moda3cover");
          moda3cover.style.display= "block";
        return false;
    }
    if(phone==""){
        //alert("Please enter your Phone");
         document.getElementById("msg3").innerHTML='Please enter your Phone';
       var moda3cover = document.getElementById("moda3cover");
          moda3cover.style.display= "block";
        return false;
    }
    if (/^[0-9\s+\-]+$/.test(phone)) {

} else {
   //alert("Please enter your Phone");
         document.getElementById("msg3").innerHTML='Incorrect phone number format';
       var moda3cover = document.getElementById("moda3cover");
          moda3cover.style.display= "block";
        return false;
}
    if(masg==""){
        //alert("Please enter your Message");
        document.getElementById("msg3").innerHTML='Please enter your Message';
       var moda3cover = document.getElementById("moda3cover");
          moda3cover.style.display= "block";
        return false;
    }
    if(!check_email3(email)){
        return;
    }
	if(masg.length>3000 || masg.length<20){
		//alert("Your message must be between 20-3000 characters!");
     document.getElementById("msg3").innerHTML='Your message must be between 20-3000 characters!';
       var moda3cover = document.getElementById("moda3cover");
          moda3cover.style.display= "block";
        return false;
	}
	               document.getElementById("msg32").innerHTML='<span style="font-size:18px">Message Sending....</span><br/><span style="font-size:12px">If The Waiting Time For Sending Is Too Long, Please Refresh And Try Again!</span>';
      var moda3cover = document.getElementById("moda3cover2");
          moda3cover.style.display= "block";
    for(i=0;i<imgs.length;i++){
        form.append("file"+i, imgs[i]); // 文件对象
        /*console.log(imgs[i]);
         console.log("file"+i);
         */    }
    form.append("length",imgs.length);
  form.append("pan",pan);
    form.append("host", host);
   form.append("hostname", hostname);
    form.append("name", name);
    form.append("email", email);
    form.append("masg", masg);
    form.append("phone", phone);
    form.append('_token','{{ csrf_token() }}');
    xhr='';
    xhr = new XMLHttpRequest();  // XMLHttpRequest 对象
    xhr.onreadystatechange=function(pos)
    {
        if (xhr.readyState==4 && xhr.status==200)
        {
            var arr = xhr.responseText.split('{"error"');
           
            var list='{"error"'+arr[1];
            moda3cover.style.display= "none";
           /*console.log(list);*/
            if( list != '' ){
                var  pos = eval("("+list+")");
                if(pos.error==0){
                //    alert(pos.message);
                //    window.location.reload();
                 document.getElementById("bt3").innerHTML=pos.ts;
     document.getElementById("nr3").innerHTML=pos.message;
   var modal3cover2 = document.getElementById("modal3cover2");
          modal3cover2.style.display= "block";
                }else{
                    //alert(pos.message);
    //                  document.getElementById("msg3").innerHTML=pos.message;
    //   var moda3cover = document.getElementById("moda3cover");
          moda3cover.style.display= "none";
    document.getElementById("bt3").innerHTML=pos.ts;
     document.getElementById("nr3").innerHTML=pos.message;
   var modal3cover2 = document.getElementById("modal3cover2");
          modal3cover2.style.display= "block";
                }
            }
        }
    }
    xhr.open("post", "https://www.hangheng.top/api/Upload/upload", true); //post方式，url为服务器请求地址，true 该参数规定请求是否异步处理。
    xhr.send(form); //开始上传，发送form数据
      
//           document.getElementById("bt3").innerHTML='Mail sent successfully';
//      document.getElementById("nr3").innerHTML='We will contact you by email or phone later, thank you!';
//   var modal3cover2 = document.getElementById("modal3cover2");
//           modal3cover2.style.display= "block";
   // alert('Mail sent successfully, We will contact you by email or phone later, thank you!');
}


function namebss(){
	document.getElementById("names").placeholder = '';
	document.getElementById("emails").placeholder = 'Please Enter Your Email*';
	document.getElementById("phones").placeholder = 'Please Enter Your Phone*';
	document.getElementById("masgss").placeholder = 'To get best quotes, we recommend including the following details:\n' +
				'-Self introduction\n' +
				'-What are you looing for\n' +
				'-Required specifications\n' +
				'-Inquire about price/MOQ';
		}
		function namebss2(){
			document.getElementById("names").placeholder = 'Please Enter Your Name*';
		}
		function emailbss(){
			document.getElementById("names").placeholder = 'Please Enter Your Name*';
			document.getElementById("emails").placeholder = '';
			document.getElementById("phones").placeholder = 'Please Enter Your Phone*';
			document.getElementById("masgss").placeholder = 'To get best quotes, we recommend including the following details:\n' +
						'-Self introduction\n' +
						'-What are you looing for\n' +
						'-Required specifications\n' +
						'-Inquire about price/MOQ';
		}
		function emailbss2(){
			document.getElementById("emails").placeholder = 'Please Enter Your Email*';
		}
		function phonebss(){
			document.getElementById("names").placeholder = 'Please Enter Your Name*';
			document.getElementById("emails").placeholder = 'Please Enter Your Email*';
			document.getElementById("phones").placeholder = '';
			document.getElementById("masgss").placeholder = 'To get best quotes, we recommend including the following details:\n' +
						'-Self introduction\n' +
						'-What are you looing for\n' +
						'-Required specifications\n' +
						'-Inquire about price/MOQ';
		}
		function phonebss2(){
			document.getElementById("phones").placeholder = 'Please Enter Your Phone*';
		}
		function masgbss(){
			document.getElementById("names").placeholder = 'Please Enter Your Name*';
			document.getElementById("emails").placeholder = 'Please Enter Your Email*';
			document.getElementById("phones").placeholder = 'Please Enter Your Phone*';
			document.getElementById("masgss").placeholder = '';
		}
		function masgbss2(){
			document.getElementById("masgss").placeholder = 'To get best quotes, we recommend including the following details:\n' +
            '-Self introduction\n' +
            '-What are you looing for\n' +
            '-Required specifications\n' +
            '-Inquire about price/MOQ';
		}
//验证邮箱
function check_email3(val){
    var myreg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
    if(!myreg.test(val)){
       // alert('Please enter a valid Email!');
        document.getElementById("msg3").innerHTML='Please enter a valid Email!';
       var moda3cover = document.getElementById("moda3cover");
          moda3cover.style.display= "block";
        return false;
    }
    return true;
}
var shans = 1;
function shan(){
  if(shans == 1){
 var shan = document.getElementById("shans");
  shan.style.display= "none";
  shans = 2;
}else{
 var shan = document.getElementById("shans");
  shan.style.display= "inline-block";
  shans = 1;
}
}
setTimeout(function(){
setInterval(function(){
shan();
},1000);
},3000);
var shansx = 1;
function shanm(){
  if(shans == 1){
 var shanmx = document.getElementById("shanss");
  shanmx.style.display= "none";
  shansx = 2;
}else{
 var shanmx = document.getElementById("shanss");
  shanmx.style.display= "inline-block";
  shansx = 1;
}
}
setTimeout(function(){
setInterval(function(){
shanm();
},1000);
},3000);
