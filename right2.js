document.write('<style type="text/css">.bt1{font-size: 22px;color: #07631d;font-family:Roboto,arial,sans-serif;}.nr1{color:#000;font-size: 15px;font-family: Roboto,arial,sans-serif;}.modal2{position: absolute;width: 400px;height: 300px;margin-top: 10%;left: 50%;margin-left: -200px;background: #fff;border:1px solid #ddd;border-radius:5px;}.moda2-cover,.modal2-cover2{z-index:9999;display: none;width: 100%;height: 100%;position: fixed;top: 0;left: 0;background: rgba(34, 34, 34, 0.77);opacity: 1;}.moda2{position: absolute;width: 400px;margin-left: -200px;height: 150px;text-align: center;border-radius: 5px;top: 40%;left: 50%;-left: -200px;background: #fff;border:1px solid #ddd;}</style><div  id="cover2" class="modal2-cover2" style="text-align: center;"><div class="modal2"><div><img src="https://res.cloudinary.com/bizez/image/upload/v1560160642/success.png" style="width: 100px;margin-top: 5%"></div><div><h3 id="bt1" class="bt1"></h3></div><div><div id="nr1" class="nr1"></div></div><div><button onclick="coser1()" style="margin-top:10% ; background: #31cae2;padding: 5px 15px;border: medium;line-height: 1.5;color: #fff;border-radius:5px;font-size:16px;font-family:Roboto,arial,sans-serif;">OK</button></div></div></div><div id="moda2cover" class="moda2-cover"><div class="moda2"><div id="msg1" style="margin-top: 10%;color: red;font-size: 15px;font-family:Roboto,arial,sans-serif;"></div><div><button onclick="coser()" style="margin-top: 8%; background: #31cae2;border-radius: 5px;border: medium;color: #fff;line-height: 1.5;padding: 5px 15px; font-family:Roboto,arial,sans-serif;">OK</button></div></div></div><div style="display: inline;"><p id="px" onclick="dk()" style="cursor:pointer;display: inline;border: 1px solid #ccc;background-color: #c00;border-radius: 6px;line-height: 20px;padding: 5px 10px;color: #FFF !important;margin-right: 10px;">Get Best Quote</p></div>');
document.write('<div id="iform" style="display:none;border: 1px solid #ff6800;width: 800px;margin: 0 auto;background-color: #ebebeb;box-sizing: content-box;position: fixed;bottom: 28%;left: 50%;margin:-200px 0px 0px -400px;z-index: 1000;color: #6e6e6e;line-height: 15px;"><div style="padding: 2%;"><div onclick="allclosr()" style="position: absolute;right: 15px;top: 15px;z-index: 101;cursor:pointer;"><img src="https://res.cloudinary.com/bizez/image/upload/v1559526786/chat-close2.png"></div><div><div style="float: left;font-size: 20px;margin-bottom: 20px;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;color: #414141;">Get Best Quote</div></div><div style="clear: both;"></div><form method="post"><div id="inpt2" style="float: left;width: 50%;margin-top: 10px;"><label style="display:inline-block;width: 20%;margin-right: 2%;font-size: 12px;text-align: right;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;color: #414141;"><span style="color: #c00;margin-right: 3px;" class="required">*</span>Name </label><input style="width:62%;font-size:12px;border: 1px solid #6faefc;;border-radius: 3px;padding:0 0 0 6px;height: 30px;background: #e0edfc;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;"  errortext="Please write your name" placeholder="Please enter your name" id="name" onclick="namebsss()" onBlur="namebsss2()" name="name" type="text" valid="required" value=""></div><div id="inpt3" style="float: left;width: 50%;margin-top: 10px;"><label style="display:inline-block;width: 20%;margin-right: 2%;font-size: 12px;text-align: right;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;color: #414141;"><span class="required" style="color: #c00;margin-right: 3px;">*</span>Email </label><input style="width:62%;font-size:12px;border: 1px solid #6faefc;;border-radius: 3px;padding:0 0 0 6px;height: 30px;background: #e0edfc;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;"  errortext="Please write your the e-mail" placeholder="Please enter your email" id="email" onclick="emailbsss()" onBlur="emailbsss2()" name="email" type="text" valid="required|email" value=""></div><div id="inpt4" style="float: left;width: 50%;margin-top: 10px;"><label style="display:inline-block;width: 20%;margin-right: 2%;font-size: 12px;text-align: right;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;color: #414141;"><span class="required" style="color: #c00;margin-right: 3px;">*</span>Phone</label><input style="width:62%;font-size:12px;border: 1px solid #6faefc;;border-radius: 3px;padding:0 0 0 6px;height: 30px;background: #e0edfc;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;"  id="phone" onclick="phonebsss()" onBlur="phonebsss2()" name="phone" placeholder="Please enter your phone" type="number" value=""></div><div id="inpt1" style="float: left;width: 50%;margin-bottom: 10px;height: 36px;margin-top: 10px;"><label id="Attachment" style="display:inline-block;width: 20%;margin-right: 2%;height:30px;font-size: 12px;text-align: right;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;color: #414141;">Attachment</label><input style="width:62%;font-size: 12px;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;" class="form-control" id="img" accept="" name="img[]" placeholder="Select file to upload" accept="image/*" multiple onchange="previewe(this);" type="file" value=""></div><div class="form-group" style="clear:both"><label class="control-label" for="content"><span id="Content" class="required" style="vertical-align:top;width: 10%;margin-right: 1%;margin-left: 0;font-size: 12px;display: inline-block;text-align: right;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;color: #414141;"><span class="required" style="color: #c00;margin-right: 3px;">*</span>Content</span></label><textarea id="masg" style="width: 82%;height: 85px;line-height: 1.4;background: #e0edfc;border: 1px solid #6faefc;;border-radius: 3px;padding-left: 6px;padding-top: 6px;font-size: 12px;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;" errortext="Please tell us your detailed request" placeholder="To get best quotes, we recommend including the following details:&#13;&#10;-Self introduction&#13;&#10;-What are you looking for&#13;&#10;-Required specifications&#13;&#10;-Inquire about price/MOQ" id="masg" onclick="masgbsss()" onBlur="masgbsss2()" name="masg" rows="5" type="" valid="required"></textarea></div><div class="form-group" style="text-align: center;margin-top: 10px;margin-bottom: 10px;"><button style="background: #ff6800;border-color: #ff6800;border-radius: 12px;color: #fff;width: 200px;height: 30px;border: none;cursor:pointer;font-family: pontano sans,sans-serif,Arial,Helvetica,microsoft yahei,SimSun;padding: 0;" type="button" onclick="send()"><img src="https://res.cloudinary.com/bizez/image/upload/v1559287925/email.png" style="height: 24px;vertical-align: middle;margin-right: 5px;">Send Inquiry</button></div></form></div></div>');
setTimeout(function(){
    var wh = window.screen.availWidth;
    if(wh<800){
        var objs = document.getElementById("iform");
        objs.style.width= "99.5%";
        objs.style.bottom= "100px";
        objs.style.left= "0px";
        objs.style.margin= "0";
        var inpt1 = document.getElementById("inpt1");
        inpt1.style.width= "100%";
        var inpt1 = document.getElementById("inpt2");
        inpt2.style.width= "100%";
        var inpt1 = document.getElementById("inpt3");
        inpt3.style.width= "100%";
        var inpt1 = document.getElementById("inpt4");
        inpt4.style.width= "100%";
        var Attachment = document.getElementById("Attachment");
        Attachment.style.width= "20%";
        var Content = document.getElementById("Content");
        Content.style.width= "20%";
        var masg = document.getElementById("masg");
        masg.style.width= "58%";
    }
},2000);
function allclosr(){
    var objs = document.getElementById("iform");
    objs.style.display= "none";
}
function coser(){
       document.getElementById("msg1").innerHTML=' ';
       var moda2cover = document.getElementById("moda2cover");
          moda2cover.style.display= "none";
}
function coser1(){
     document.getElementById("bt1").innerHTML=' ';
     document.getElementById("nr1").innerHTML=' ';
     var cover2 = document.getElementById("cover2");
     cover2.style.display= "none";
    /*  window.location.reload();
    $(".bt1").html(" ");
    $(".nr1").html(" ");
    $(".modal2-cover2").css('display','none'); */
     window.location.reload();
}
function dk(){
    var objs = document.getElementById("iform");
    objs.style.display= "block";
}
var imgs=[];
function previewe(obj){
    var file =  document.getElementById('img').value;//获取文件
    var index = file.lastIndexOf('.'); //获取最后一位小数点
    var extension =  file.substr(index +  1);
    var arr = ['jpeg','png','JPG','jpg','gif','pdf'];
    var iLen = obj.files.length;
    if (isInArray(arr,extension)) {
        for(var i=0;i<iLen;i++){
            imgs[i] = obj.files[i];
        }
    } else {
        //alert('only supports:jpeg jpg JPG png gif pdf files');
        document.getElementById("msg1").innerHTML='only supports:jpeg jpg JPG png gif pdf files';
       var moda2cover = document.getElementById("moda2cover");
          moda2cover.style.display= "block";
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
var pan2 = "";
function goPAGE() {
                if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
                    /*window.location.href="你的手机版地址";*/
                    pan2 ="mobile";
                }
                else {
                    /*window.location.href="你的电脑版地址";    */
                    pan2 = "pc";
                }
            }
            goPAGE();
function send(){
    console.log(imgs);
    var form = new FormData(); // FormData 对象
    var host = window.location.host;
    var hostname=window.location.href;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var masg = document.getElementById("masg").value;
    var phone = document.getElementById("phone").value;
    if(name==""){
        document.getElementById("msg1").innerHTML='Please enter your name';
       var moda2cover = document.getElementById("moda2cover");
          moda2cover.style.display= "block";
        //alert("Please enter your name");
        return false;
    }
    if(email==""){
       document.getElementById("msg1").innerHTML='Please enter your email address';
       var moda2cover = document.getElementById("moda2cover");
          moda2cover.style.display= "block";
        //alert("Please enter your email address");
        return false;
    }
	if(phone==""){
         document.getElementById("msg1").innerHTML='Please enter your phone';
       var moda2cover = document.getElementById("moda2cover");
          moda2cover.style.display= "block";
        //alert("Please enter your phone");
        return false;
    }
    if(masg==""){
           document.getElementById("msg1").innerHTML='Please enter your message';
       var moda2cover = document.getElementById("moda2cover");
          moda2cover.style.display= "block";
        //alert("Please enter your message");
        return false;
    }
    if(!check_emails(email)){
        return;
    }
	if(masg.length>3000 || masg.length<20){
           document.getElementById("msg1").innerHTML='Your message must be between 20-3000 characters!';
       var moda2cover = document.getElementById("moda2cover");
          moda2cover.style.display= "block";
		//alert("Your message must be between 20-3000 characters!");
        return false;
	}
    for(i=0;i<imgs.length;i++){
        form.append("file"+i, imgs[i]); // 文件对象
        /*console.log(imgs[i]);
         console.log("file"+i);
         */    }
    form.append("length",imgs.length);
    form.append("pan",pan2);
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
            // console.log(xhr.responseText);
            var arr = xhr.responseText.split('{"error"');
           
            var list='{"error"'+arr[1];
            if( list != '' ){
                var  pos = eval("("+list+")");
                if(pos.error==0){
                  /*  alert(pos.message);
                    window.location.reload();*/

                }else{
                    //alert(pos.message);
                   document.getElementById("msg1").innerHTML=pos.message;
       var moda2cover = document.getElementById("moda2cover");
          moda2cover.style.display= "block";
                }
            }
        }
    }
    xhr.open("post", "https://www.hangheng.top/api/Upload/upload", true); //post方式，url为服务器请求地址，true 该参数规定请求是否异步处理。
    xhr.send(form); //开始上传，发送form数据
     document.getElementById("bt1").innerHTML='Mail sent successfully';
     document.getElementById("nr1").innerHTML='We will contact you by email or phone later, thank you!';
     var cover2 = document.getElementById("cover2");
     cover2.style.display= "block";
    //alert('Mail sent successfully, We will contact you by email or phone later, thank you!');
  var url = window.location.host;
  window.location.href="https://www.fdwallcovering.com/thank-you-message.html";
}
function namebsss(){
	document.getElementById("name").placeholder = '';
	document.getElementById("email").placeholder = 'Please enter your email';
	document.getElementById("phone").placeholder = 'Please enter your phone';
	document.getElementById("masg").placeholder = 'To get best quotes, we recommend including the following details:\n' +
				'-Self introduction\n' +
				'-What are you looking for\n' +
				'-Required specifications\n' +
				'-Inquire about price/MOQ';
		}
		function namebsss2(){
			document.getElementById("name").placeholder = 'Please enter your name';
		}
		function emailbsss(){
			document.getElementById("name").placeholder = 'Please enter your name';
			document.getElementById("email").placeholder = '';
			document.getElementById("phone").placeholder = 'Please enter your phone';
			document.getElementById("masg").placeholder = 'To get best quotes, we recommend including the following details:\n' +
						'-Self introduction\n' +
						'-What are you looking for\n' +
						'-Required specifications\n' +
						'-Inquire about price/MOQ';
		}
		function emailbsss2(){
			document.getElementById("email").placeholder = 'Please enter your email';
		}
		function phonebsss(){
			document.getElementById("name").placeholder = 'Please enter your name';
			document.getElementById("email").placeholder = 'Please enter your email';
			document.getElementById("phone").placeholder = '';
			document.getElementById("masg").placeholder = 'To get best quotes, we recommend including the following details:\n' +
						'-Self introduction\n' +
						'-What are you looking for\n' +
						'-Required specifications\n' +
						'-Inquire about price/MOQ';
		}
		function phonebsss2(){
			document.getElementById("phone").placeholder = 'Please enter your phone';
		}
		function masgbsss(){
			document.getElementById("name").placeholder = 'Please enter your name';
			document.getElementById("email").placeholder = 'Please enter your email';
			document.getElementById("phone").placeholder = 'Please enter your phone';
			document.getElementById("masg").placeholder = '';
		}
		function masgbsss2(){
			document.getElementById("masg").placeholder = 'To get best quotes, we recommend including the following details:\n' +
            '-Self introduction\n' +
            '-What are you looking for\n' +
            '-Required specifications\n' +
            '-Inquire about price/MOQ';
		}
//验证邮箱
function check_emails(val){
    var myreg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
    if(!myreg.test(val)){
        //alert('Please enter a valid Email!');
           document.getElementById("msg1").innerHTML="Please enter a valid Email!";
       var moda2cover = document.getElementById("moda2cover");
          moda2cover.style.display= "block";
        return false;
    }
    return true;
}
