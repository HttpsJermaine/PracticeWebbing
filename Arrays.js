var email = []
var username = []
var password = []
var x = 0
function AddElement()
{
    email[x] = document.getElementById("email").value
    username[x] = document.getElementById("user").value
    password[x] = document.getElementById("pass").value

    alert("The entry is submitted to Email: "+"["+ email[x] +"]"+" and Username: " +"[" + username[x] +"]" +
    " and Password: " +"[" + password[x] +"]" +" Current Array Length is: "+"[" + x +"]"+"")
    document.getElementById("email").value = ""
    document.getElementById("user").value = ""
    document.getElementById("pass").value = ""
    x++
}

function DisplayStoredElement()
{
    var i = parseInt(document.getElementById("index").value)
    if(i < 5)
    {
        document.getElementById("displayemail").innerHTML = email[i]
        document.getElementById("displayusername").innerHTML = username[i]
        document.getElementById("displaypassword").innerHTML = password[i]
    }
    else
    {
        alert("Invalid index")
    }

    
}