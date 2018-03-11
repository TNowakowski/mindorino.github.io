'use strict'


document.addEventListener("DOMContentLoaded", function(e) {




var btn1 = document.getElementById("btn1"),
    btn2 = document.getElementById("btn2"),
    body = document.body,
    hiddenDiv = document.querySelector(".box"),
    link = document.querySelector("#link"),
    hidden = document.querySelector("#hidden");

function sayHello() {
    alert("Hej!");
};

btn1.onclick = sayHello;
btn2.addEventListener("click", function (e) {

    e.stopPropagation();
    console.log("Kliknąłeś w przycisk");



}, false);

body.addEventListener("click", function () {
    console.log("Kliknąłeś w body!!!");

}, false);


link.onclick = function(e) {
    e.preventDefault();
    var message = hidden;
    message.style.display = "block" ;
    return false;
}


}, false);