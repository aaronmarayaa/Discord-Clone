let login_page = document.getElementById('login-page')
let email_ = document.getElementById('email')
let password = document.getElementById('password')
let homeMain = document.getElementById('home-main')
let loginPage = document.getElementById('login')

let correctUsername = "doe@gmail.com";
let correctPassword = "123";

function checkcredentials() {
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    if (correctUsername === email.value.trim() && correctPassword === password.value.trim()) {
        password.value = "";
        return true;
    } else {
        return false;
    }
}

function activeHomeMain(event) {
    event.preventDefault();
    if (checkcredentials()) {
        loginPage.style.display = "none";
        homeMain.style.display = "flex";
    } else {
        alert("Wrong input!");
        return false;
    }
}

function logoutAccount() {
    let logout = confirm("Logout Your Account?")
    if (logout) {
        login.style.display = "flex"
    }
}

let profile1 = document.getElementById('profile1')
let profile2 = document.getElementById('profile2')

function showProfile1() {
    profile1.style.display = "block"
    profile2.style.display = "none"
    document.getElementById('nicko').style.backgroundColor = "#404249";
    document.getElementById('kenneth').style.background = "none";
}
function showProfile2() {
    profile2.style.display = "block"
    profile1.style.display = "none"
    document.getElementById('kenneth').style.backgroundColor = "#404249";
    document.getElementById('nicko').style.background = "none";
}

function addParagraph1() {
    let message = document.getElementById('message-input1')
    document.getElementById("message1").innerHTML += "<p>" + message.value + "</p>";
    message.value = ""
}

function addParagraph2() {
    let message = document.getElementById('message-input2')
    document.getElementById("message2").innerHTML += "<p>" + message.value + "</p>";
    message.value = ""
}