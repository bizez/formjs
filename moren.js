document.write('<style type="text/css">.bt{font-size: 22px;color: #07631d;font-family:Roboto,arial,sans-serif;}.nr{color:#000;font-size: 15px;font-family: Roboto,arial,sans-serif;}.modal1{position: absolute;width: 400px;height: 300px;margin-top: 10%;left: 50%;margin-left: -200px;background: #fff;border:1px solid #ddd;border-radius:5px;}.btn{cursor: pointer;padding: 3px 10px;border: 1px solid #aaa; }.close{position: absolute;right: 5px;top: 0px;cursor: pointer;}#check{display: none;}.modal-cover,.modal1-cover1{display: none;width: 100%;height: 100%;z-index: 999999;position: fixed;top: 0;left: 0;background: rgba(34, 34, 34, 0.77);opacity: 1;}.modal{position: absolute;width: 400px;margin-left: -200px;height: 155px;text-align: center;border-radius: 5px;top: 40%;left: 50%;-left: -200px;background: #fff;border:1px solid #ddd;}#check:checked + .modal-cover{display: block;}</style><div id="iformb" style="width: 100%;margin: 0 auto;border: 1px solid #ccc;box-sizing: content-box;clear: both;"> <div id="cover1" class="modal1-cover1" style="text-align: center;"><div class="modal1"><div><img src="https://cdn.jsdelivr.net/gh/bizez/formjs/success.png" style="width: 100px;margin-top: 5%"></div><div><h3 id="bt" class="bt"></h3></div><div><div id="nr" class="nr"></div></div><div><button onclick="cose1()" style="margin-top:10% ; background: #31cae2;padding: 5px 15px;border: medium;line-height: 1.5;color: #fff;border-radius:5px;font-size:16px;font-family:Roboto,arial,sans-serif;">OK</button></div></div></div><div id="tcmt" class="modal-cover"><div class="modal"><div id="msg" style="margin-top: 10%;color: red;font-size: 15px;font-family: Roboto,arial,sans-serif;"></div><div><button id="cose" onclick="cose()" style="margin-top: 8%; background: #31cae2;border: medium;border-radius: 5px;padding: 5px 15px;font-size: 15px;line-height: 1.5;color: #fff;font-family: Roboto,arial,sans-serif;">OK</button></div></div></div><div id="tcmt2" class="modal-cover"><div class="modal" style="padding: 0 5px;"><div id="msg2" style="margin-top: 10%;color: red;font-size: 15px;font-family: Roboto,arial,sans-serif;"></div><div><button onclick="cose9()" style="margin-top: 5%; background: #31cae2;border: medium;border-radius: 5px;padding: 5px 15px;font-size: 15px;line-height: 1.5;color: #fff;font-family: Roboto,arial,sans-serif;">OK</button></div></div></div><div style="padding: 2%;"><div><div style="float: left;font-size: 20px;margin-bottom: 20px;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;color: #414141;">Contact Us Now</div></div><div style="clear: both;"></div><form method="post"><div id="inpt2b" style="float: left;width: 50%;margin-top: 10px;"><label style="display:inline-block;width: 20%;margin-right:2%;font-size: 12px;text-align: right;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;color: #414141;"><span class="required" style="color: #c00;margin-right: 3px;">*</span>Name </label><input style="padding: 0;width:62%;border: 1px solid #6faefc;border-radius: 3px;padding-left: 6px;height: 30px;background: #e0edfc;font-size: 12px;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;"  errortext="Please write your name" placeholder="Please enter your Name" onclick="namebs()" onBlur="namebs2()" id="nameb" name="nameb" type="text" valid="required" value=""></div><div id="inpt3b" style="float: left;width: 50%;margin-top: 10px;"><label style="display:inline-block;width: 20%;margin-right:2%;font-size: 12px;text-align: right;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;color: #414141;"><span class="required" style="color: #c00;margin-right: 3px;">*</span>Email </label><input style="padding: 0;width:62%;border: 1px solid #6faefc;border-radius: 3px;padding-left: 6px;height: 30px;background: #e0edfc;font-size: 12px;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;"  errortext="Please write your the e-mail" placeholder="Please enter your Email" id="emailb" name="emailb" onclick="emailbs()" onBlur="emailbs2()" type="text" valid="required|email" value=""></div><div id="inpt4b" style="float: left;width: 50%;margin-top: 10px;"><label style="display:inline-block;width: 20%;margin-right:2%;font-size: 12px;text-align: right;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;color: #414141;"><span style="color: #c00;margin-right: 3px;">*</span>Phone</label><input style="padding: 0;width:62%;border: 1px solid #6faefc;border-radius: 3px;padding-left: 6px;height: 30px;background: #e0edfc;font-size: 12px;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;"  id="phoneb" name="phoneb" onclick="phonebs()" onBlur="phonebs2()" placeholder="Please enter your Phone" type="text" value=""></div><div id="inpt5b" style="float: left;width: 50%;margin-bottom: 10px;margin-top:10px;height:36px;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;"><label id="Attachmentb" style="display:inline-block;width: 20%;margin-right:2%;height: 30px;font-size: 12px;text-align: right;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;color: #414141;">Attachment</label><input style="width:64%;font-size: 12px;" class="form-control" id="imgb" name="img" placeholder="Select file to upload" type="file" value=""  accept=""  multiple onchange="previewp(this);"></div><div class="form-group" style="clear: both;"><label class="control-label" for="content"><span id="Contentb" class="required" style="vertical-align:top;width: 10%;margin-right:1%;font-size: 12px;display: inline-block;text-align: right;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;color: #414141;"><span style="color: #c00;margin-right: 3px;">*</span>Content</span></label><textarea id="masgb" style="width: 81%;height: 150px;background: #e0edfc;border: 1px solid #6faefc;border-radius: 3px;padding-left: 6px;padding-top: 6px;font-size: 12px;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;" errortext="Please tell us your detailed request" placeholder="To get best quotes, we recommend including the following details:&#13;&#10;&#13;&#10;-Self introduction&#13;&#10;-What are you looking for&#13;&#10;-Required specifications&#13;&#10;-Inquire about price/MOQ" id="masgb" onclick="masgbs()" onBlur="masgbs2()" name="masg" rows="5" type="" valid="required"></textarea></div><div class="form-group" style="text-align: center;margin-top: 10px;margin-bottom: 10px;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;"><button style="background: #e64e5f;border-color: #e64e5f;border-radius: 12px;color: #fff;width: 200px;height: 35px;border: none;cursor:pointer;padding: 0;" type="button" onclick="sendb()"><img src="https://cdn.jsdelivr.net/gh/bizez/formjs/email.png" style="height: 24px;vertical-align: middle;margin-right: 5px;">Send Inquiry</button></div></form></div></div>');
window.onload= function()  {
var wh = window.screen.availWidth;
if(wh<800){
    var objsp = document.getElementById("iformb");
    objsp.style.width= "100%";
    var inptp2 = document.getElementById("inpt2b");
    inptp2.style.width= "100%";
    var inptp3 = document.getElementById("inpt3b");
    inptp3.style.width= "100%";
    var inptp4 = document.getElementById("inpt4b");
    inptp4.style.width= "100%";
   var inptp5 = document.getElementById("inpt5b");
    inptp5.style.width= "100%";
    var Attachmentp = document.getElementById("Attachmentb");
    Attachmentp.style.width= "20%";
    var Contentp = document.getElementById("Contentb");
    Contentp.style.width= "20%";
    var masgp = document.getElementById("masgb");
    masgp.style.width= "55%";
}
}
function cose(){
      document.getElementById("msg").innerHTML=' ';
       var tcmt = document.getElementById("tcmt");
          tcmt.style.display= "none";
}
function cose9(){
      document.getElementById("msg2").innerHTML=' ';
       var tcmt = document.getElementById("tcmt2");
          tcmt.style.display= "none";
}
function cose1(){
   document.getElementById("bt").innerHTML=' ';
     document.getElementById("nr").innerHTML=' ';
   var cover1 = document.getElementById("cover1");
          cover1.style.display= "none";
      window.location.reload();
}
var imgs=[];
function previewp(obj){
    var file =  document.getElementById('imgb').value;//获取文件
    var index = file.lastIndexOf('.'); //获取最后一位小数点
    var extension =  file.substr(index +  1);
    var arr = ['jpeg','png','jpg','JPG','gif','pdf'];
    var iLen = obj.files.length;
    if (isInArray(arr,extension)) {
        for(var i=0;i<iLen;i++){
            imgs[i] = obj.files[i];
        }
    } else {
        var tcmt = document.getElementById("tcmt");
          tcmt.style.display= "block";
          document.getElementById("msg").innerHTML='only supports:jpeg jpg JPG png gif pdf files!';            
       // alert('only supports:jpeg jpg JPG png gif pdf files!');
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
//var lang = (navigator.systemLanguage?navigator.systemLanguage:navigator.language);
　　//获取浏览器配置语言 #括号内是个运算，运算过后赋值给lang，当?前的内容为true时把?后的值赋给lang，为False时把:后的值赋给lang
　　//var lang = lang.substr(0, 2);//获取lang字符串的前两位
//alert(lang);
　　//if(lang == 'zh'){
   // var objpau = document.getElementById("iformb");
   // objpau.remove（）;
　　//}
var pan1 = "";
function goPAGE() {
                if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
                    /*window.location.href="你的手机版地址";*/
                    pan1 ="mobile";
                }
                else {
                    /*window.location.href="你的电脑版地址";    */
                    pan1 = "pc";
                }
            }
            goPAGE();
function sendb()
{
              
    var form = new FormData(); // FormData 对象
    var host = window.location.host;
   var hostname=window.location.href;
    var name = document.getElementById("nameb").value;
    var email = document.getElementById("emailb").value;
    var masg = document.getElementById("masgb").value;
    var phone = document.getElementById("phoneb").value;
      if(name==""){
        
          var tcmt = document.getElementById("tcmt");
          tcmt.style.display= "block";
          document.getElementById("msg").innerHTML='Please enter your Name';
       // alert("Please enter your Name1");
        return false;
    }
    if(email==""){
         var tcmt = document.getElementById("tcmt");
          tcmt.style.display= "block";
          document.getElementById("msg").innerHTML='Please enter your Email';
        //alert("Please enter your Email");
        return false;
    }
    if(phone==""){
        //alert("Please enter your Phone");
      //var str = "123-456 789+0";

        var tcmt = document.getElementById("tcmt");
          tcmt.style.display= "block";
          document.getElementById("msg").innerHTML='Please enter your Phone';
        return false;
    }
  if (/^[0-9\s+\-]+$/.test(phone)) {

} else {
var tcmt = document.getElementById("tcmt");
          tcmt.style.display= "block";
          document.getElementById("msg").innerHTML='Incorrect phone number format';
        return false;
}
    if(masg==""){
        //alert("Please enter your Message");
        var tcmt = document.getElementById("tcmt");
          tcmt.style.display= "block";
          document.getElementById("msg").innerHTML='Please enter your Message';
        return false;
    }
    if(!check_email(email)){
        return;
    }
	if(masg.length>3000 || masg.length<20){
        var tcmt = document.getElementById("tcmt");
          tcmt.style.display= "block";
          document.getElementById("msg").innerHTML='Your message must be between 20-3000 characters!';
		//alert("Your message must be between 20-3000 characters!");
        return false;
	}
	 var tcmt = document.getElementById("tcmt2");
       tcmt.style.display= "block";
       document.getElementById("msg2").innerHTML='<span style="font-size:18px">Message Sending....</span><br/><span style="font-size:12px">If The Waiting Time For Sending Is Too Long, Please Refresh And Try Again!</span>';
    for(i=0;i<imgs.length;i++){
        form.append("file"+i, imgs[i]); // 文件对象
        /*console.log(imgs[i]);
         console.log("file"+i);
         */    }
    form.append("length",imgs.length);
  form.append("pan",pan1);
    form.append("host", host);
  form.append("hostname", hostname);
    form.append("name", name);
    form.append("email", email);
    form.append("masg", masg);
    form.append("phone", phone);
    form.append('_token','{{ csrf_token() }}');
    xhr='';
    xhr = new XMLHttpRequest();  // XMLHttpRequest 对象
    xhr.onreadystatechange=function()
    {
        if (xhr.readyState==4 && xhr.status==200)
        {
           var arr = xhr.responseText.split('{"error"');
            var list='{"error"'+arr[1];
            if( list != '' ){
                var  pos = eval("("+list+")");
                tcmt.style.display= "none";
                if(pos.error==0){
                    //alert(pos.message);
                     var cover1 = document.getElementById("cover1");
          cover1.style.display= "block";
       
        document.getElementById("bt").innerHTML=pos.ts;
     document.getElementById("nr").innerHTML=pos.message;
                }else{
        //           var tcmt = document.getElementById("tcmt");
        //   tcmt.style.display= "block";
        //   document.getElementById("msg").innerHTML=pos.message;
                //alert(pos.message);
                var cover1 = document.getElementById("cover1");
          cover1.style.display= "block";
       
        document.getElementById("bt").innerHTML=pos.ts;
     document.getElementById("nr").innerHTML=pos.message;
                }
            }
        }
    }
    xhr.open("post", "https://www.hangheng.top/api/Upload/upload", true); //post方式，url为服务器请求地址，true 该参数规定请求是否异步处理。
    xhr.send(form); //开始上传，发送form数据
    //  var cover1 = document.getElementById("cover1");
    //       cover1.style.display= "block";
       
    //     document.getElementById("bt").innerHTML='Mail sent successfully';
    //  document.getElementById("nr").innerHTML='We will contact you by email or phone later, thank you!';
 
   // alert('Mail sent successfully, We will contact you by email or phone later, thank you!');
}
function namebs(){
	document.getElementById("nameb").placeholder = '';
	document.getElementById("emailb").placeholder = 'Please enter your Email';
	document.getElementById("phoneb").placeholder = 'Please enter your Phone';
	document.getElementById("masgb").placeholder = 'To get best quotes, we recommend including the following details:\n' +
				'\n' +
				'-Self introduction\n' +
				'-What are you looking for\n' +
				'-Required specifications\n' +
				'-Inquire about price/MOQ';
		}
		function namebs2(){
			document.getElementById("nameb").placeholder = 'Please enter your Name';
		}
		function emailbs(){
			document.getElementById("nameb").placeholder = 'Please enter your Name';
			document.getElementById("emailb").placeholder = '';
			document.getElementById("phoneb").placeholder = 'Please enter your Phone';
			document.getElementById("masgb").placeholder = 'To get best quotes, we recommend including the following details:\n' +
						'\n' +
						'-Self introduction\n' +
						'-What are you looking for\n' +
						'-Required specifications\n' +
						'-Inquire about price/MOQ';
		}
		function emailbs2(){
			document.getElementById("emailb").placeholder = 'Please enter your Email';
		}
		function phonebs(){
			document.getElementById("nameb").placeholder = 'Please enter your Name';
			document.getElementById("emailb").placeholder = 'Please enter your Email';
			document.getElementById("phoneb").placeholder = '';
			document.getElementById("masgb").placeholder = 'To get best quotes, we recommend including the following details:\n' +
						'\n' +
						'-Self introduction\n' +
						'-What are you looking for\n' +
						'-Required specifications\n' +
						'-Inquire about price/MOQ';
		}
		function phonebs2(){
			document.getElementById("phoneb").placeholder = 'Please enter your Phone';
		}
		function masgbs(){
			document.getElementById("nameb").placeholder = 'Please enter your Name';
			document.getElementById("emailb").placeholder = 'Please enter your Email';
			document.getElementById("phoneb").placeholder = 'Please enter your Phone';
			document.getElementById("masgb").placeholder = '';
		}
		function masgbs2(){
			document.getElementById("masgb").placeholder = 'To get best quotes, we recommend including the following details:\n' +
            '\n' +
            '-Self introduction\n' +
            '-What are you looking for\n' +
            '-Required specifications\n' +
            '-Inquire about price/MOQ';
		}
//验证邮箱
function check_email(val){
    var myreg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
    if(!myreg.test(val)){
        //alert('Please enter a valid Email!');
           var tcmt = document.getElementById("tcmt");
          tcmt.style.display= "block";
          document.getElementById("msg").innerHTML='Please enter a valid Email!';
        return false;
    }
    return true;
}
