let status = confirm("Ты админ?");
alert(status);
var pass1 = "12345";


if (status === true){
    var pass = prompt("введите пароль: ", " ");
    if(pass != pass1){
        alert("ошибка");
    }
}

if(status === false){
    alert("Ты не админ");
}