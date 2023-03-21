function showToast(message, duration = 3000, position = "top-right", backgroundColor = "#333333") {
    Toastify({
        text: message,
        duration: duration,
        position: position,
        backgroundColor: backgroundColor,
    }).showToast();
}
function success() {
    showToast("Login Successful!", 2000, "center", "linear-gradient(to right, #00b09b, #96c93d)");
}
function fail() {
    showToast("Wrong Email or Password!", 2000, "center", "linear-gradient(to right, #f11523, #7a0b23 )");
}

//---------------------------------------------------------------------- 
function login() {
    var fullName = document.getElementById("Username").value;
    if (fullName.length < 3) {
        showToast("Type your name correctly!", 2000, "center", "linear-gradient(to right, #f11523, #7a0b23 )");
    } else {
        sessionStorage.setItem("fullName", fullName);
    }
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;
    event.preventDefault();
    if (email == "admin@user.com" && password == 123456) {
        window.location.href = "home.html"
        success();
    } else {
        fail();
        return
    }

}


