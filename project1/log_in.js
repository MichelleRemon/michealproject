function validateform(){
    var email=document.forms["myform"]["email"].value;
    var password=document.forms["myform"]["password"].value;
    if (email=="" || email!="michelle@gmail.com"){
        alert("the email invalid");
        return false;
    }
    if(password==""||password!="123456"){
        alert("the password invalid");
        return false;
    }
    return true;

}