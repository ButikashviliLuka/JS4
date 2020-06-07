//Task 6 -Login Page

class User{
    constructor( username, password ) {
        this.username = username;
        this.password = password; 
    }
}
  
  let user1 = new User ( "Luka", "11223333333333");
  let user2 = new User ( "Gela", "123NP!");
  let user3 = new User ( "Saba", "NoMames");
  let user4 = new User ( "Giorgi", "1122Gerogia");
  let user5 = new User ( "Nika", "345678912");
  
  let users = [ user1, user2, user3, user4, user5 ];

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