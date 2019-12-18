function checkEmail() {
    var user_email=document.getElementById('user_email');
    var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); //正则表达式
    var tip = document.getElementById("user_email_tip");
    if(user_email.value === ""){ //输入不能为空
        tip.innerHTML = "邮箱不能为空";
        return false;
    }else if(!reg.test(user_email.value)){ //正则验证不通过，格式不对
        tip.innerHTML = "邮箱格式不正确";
        return false;
    }else{
        tip.innerHTML = "√";
        return true;
    }
}

function checkUsername() {
    var user_email=document.getElementById('user_name');
    var reg = new RegExp("^[a-zA-Z0-9_-]{4,16}$"); //正则表达式
    var tip = document.getElementById("user_username_tip");
    if(user_email.value === ""){ //输入不能为空
        tip.innerHTML = "用户名不能为空";
        return false;
    }else if(!reg.test(user_email.value)){ //正则验证不通过，格式不对
        tip.innerHTML = "用户名格式不正确";
        return false;
    }else{
        tip.innerHTML = "√";
        return true;
    }
}

function checkPassword() {
    var user_email=document.getElementById('user_password');
    var reg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[^]{8,16}$"); //正则表达式
    var tip = document.getElementById("user_password_tip");
    if(user_email.value === ""){ //输入不能为空
        tip.innerHTML = "密码不能为空";
        return false;
    }else if(!reg.test(user_email.value)){ //正则验证不通过，格式不对
        tip.innerHTML = "密码长度应为6-20位，且包含数字，字母。";
        return false;
    }else{
        tip.innerHTML = "√";
        return true;
    }
}

