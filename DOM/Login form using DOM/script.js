let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");

function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Basic validation
    if (!username.value.trim()) {
        alert("Username is required!");
        return;
    }

    
    if (!email.value.trim()) {
        alert("Email is required!");
        return;
    }
    
    
    const emailPattern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value)) {
        alert("Please enter a valid email address!");
        return;
    }
    
    if (!password.value.trim()) {
        alert("Password is required!");
        return;
    }
    
    if (!passPattern.test(password.value)) {
        console.log(password.value);
        alert("Password must in abcD23217&%$ format ");
        return;
    }
    
    let user = {
        username: username.value,
        email: email.value,
        password: password.value
    };

    document.getElementById("showUsername").innerText = user.username;
    document.getElementById("showEmail").innerText = user.email;
    document.getElementById("showPassword").innerText = user.password;
}