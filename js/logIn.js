//Task 6 -Login Page



let user1 = {
    username: 'Luka',
    password: '11223333333333'
}
let user2 = {
    username: 'Gela',
    password: '123'
}
let user3 = {
    username: 'Saba',
    password: 'smth'
}
let user4 = {
    username: 'Giorgi',
    password: '1122'
}
let user5 = {
    username: 'Nika',
    password: '345678912'
}

let users = [user1, user2, user3, user4, user5];

function logIn(currentUsername, currentPassword){
    let correctUsername= [];
    for (let i = 0; i < users.length; i++) {
        if (currentUsername === users[i].username) {
            correctUsername.push(users[i].username);
            if(currentPassword === users[i].password && currentPassword.length > 8){
                alert('შეხვედით სისტემაში წარმატებით');
                window.location.href = "index.html";
            } else if (currentPassword === users[i].password && currentPassword.length < 8) {
                alert('შეხვედით სისტემაში წარმატეით, თუმცა გთხოვთ შეცვალოთ პაროლი');
                window.location.href = "index.html";
            } else{
                alert('პაროლი არასწორია');
            }
        }
    } 
    if (correctUsername.length === 0) {
        alert('მოცემული სახელით მომხმარებელი არ მოიებნა');
    }
}


function loginSubmit(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    logIn(username, password);
}

function showThePassword(){
    let password = document.getElementById('password');
    let eyeSlash = document.getElementById('eye-slash');
    if(password.type === "password"){
        password.type = "text";
        eyeSlash.src = "images/eye-slash-regular.svg";
    } else{
        password.type = "password";
        eyeSlash.src = "images/eye-regular.svg";
    }
}