let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");

function submitForm(event){
    event.preventDefault(); // Prevent the default form submission behavior
    let user = {
        username: username.value,
        email: email.value,
        password: password.value 
    };
    let showUsername = document.getElementById("showUsername").innerText = user.username;
    let showEmail = document.getElementById("showEmail").innerText = user.email;
    let showPassword = document.getElementById("showPassword").innerText = user.password;
    
}