var user = window.users

function seekUser ()
{
var login = document.getElementById("pole1").value;
var haslo = document.getElementById("pole2").value;

if (login == user.login) document.getElementById("loginResult").innerHTML = "Zalogowano";
else document.getElementById("loginResult").innerHTML = "Brak użytkownika w bazie. Zarejestruj się";
}


