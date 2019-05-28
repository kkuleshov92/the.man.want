let subMenuBtn = document.querySelector('.submenu-btn'),
    submenu = document.querySelector('.menu__services'),
    openMenuBtn = document.querySelector('.header__menu-btn'),
    closeMenuBtn = document.querySelector('.menu__close'),
    menu = document.querySelector('.menu');

subMenuBtn.addEventListener('click', function () {
    submenu.classList.toggle('submenu-active');
    subMenuBtn.classList.toggle('submenu-active-btn');
});

openMenuBtn.addEventListener('click', function(){
    menu.classList.add('menu-active');
});

closeMenuBtn.addEventListener('click', function(){
    menu.classList.remove('menu-active');
});