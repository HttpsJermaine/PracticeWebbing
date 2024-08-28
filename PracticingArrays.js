let userInfoArray = [];

function UserInfo(email, username, password) {
    userInfoArray.push({ email, username, password });
    console.log("User information stored successfully.");
}

function ShowUserInfo() {
    let index = document.getElementById("index").value;
    if (index >= 0 && index < userInfoArray.length) {
        let user = userInfoArray[index];
        alert(`Index ${index}:\nEmail: ${user.email}\nUsername: ${user.username}\nPassword: ${user.password}`);
    } else {
        alert("Invalid index.");
    }
}

function StoringAndDisplaying() {
    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    UserInfo(email, username, password);
}

document.getElementById("StoreInformation").addEventListener("click", StoringAndDisplaying);
document.getElementById("ShowInformation").addEventListener("click", ShowUserInfo);
