let checkbox = document.querySelector('.navigation__checkbox');
let menu = document.querySelector('.bar');
menu.style.display==="block";
checkbox.addEventListener("click", function() {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});
let closePort = document.querySelector(".closePort");
closePort.addEventListener("click", close);

let closeAbout = document.querySelector(".closeAbout");
closeAbout.addEventListener("click", close);

let closeContact = document.querySelector(".closeContact");
closeContact.addEventListener("click", close);

let closeEmail = document.querySelector(".closeEmail");
closeEmail.addEventListener("click", close);

let navToggle = document.getElementById("navi-toggle");

function close(){
    navToggle.checked = false;
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}
