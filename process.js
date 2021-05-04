function clickButton() {
    input_id = document.login_form.id.value;
    input_pwd = document.login_form.password.value;
    if(input_id == "testuser" && input_pwd == "password"){
        location.href = "success.html";
        return;
    }
    location.href = "failure.html";
}