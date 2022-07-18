let checkbox = document.querySelector('.navigation__checkbox');
let menu = document.querySelector('.menu');
checkbox.addEventListener("click", function () {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});

function closeNav(){
    document.getElementById("navi-toggle").checked = false;
    let navOpen = document.querySelector('.menu');
    if (navOpen.style.display === 'block') {
        navOpen.style.display = 'none';
    } else {
        navOpen.style.display = 'block';
    }
}