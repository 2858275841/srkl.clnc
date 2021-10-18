$('#login-button').click(function (event) {
	var userName=document.getElementById("userName").value;
    var pwd=document.getElementById("pwd").value;
		//修改密码请改此处
    if(userName=="360731200210195928" &&  pwd=="1019" || userName=="360731200310085312" &&  pwd=="1008"){
			event.preventDefault();
			$('form').fadeOut(500);
			$('.wrapper').addClass('form-success');
			setTimeout(function(){location.href="./1.html";},2000);
		}
	else{
		alert("身份证号码或密码错误！重新输入");
	}
});
