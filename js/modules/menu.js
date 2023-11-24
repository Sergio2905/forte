const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');


if (menuIcon) {
    menuIcon.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        menuIcon.classList.toggle('active');
        menu.classList.toggle('active');

        e.preventDefault();
    });
}