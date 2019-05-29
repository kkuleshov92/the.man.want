// // header slider left

let leftPagin = $(".header__pagination-left");
let rightPagin = $(".header__pagination-right");
let line = $('.line-inner');
var tablet = ($(window).width()) < 1280;

$(".header__right-slider").on("init", function(event, slick){
    $(leftPagin).text(String('0' + parseInt(slick.currentSlide + 1) + ''));
    $(rightPagin).text(String('/0' + parseInt(slick.slideCount)));
});

$(".header__right-slider").on("afterChange", function(event, slick, currentSlide){
    $(leftPagin).text(String('0' + parseInt(slick.currentSlide + 1)) + '');
    $(rightPagin).text(String('/0' + slick.slideCount));
    let count = slick.currentSlide + 1;
    count == 1 ? line.css('max-width', '2%') :
        count == 2 ? line.css('max-width', '50%') : line.css('max-width', '100%');
    //изменения позиции цифр пагинации слайдера при переключении
    if(!tablet) {
        pag.style.top = getCoords(topArrow).top - 170 + 'px';
    } else {
        pag.style.top = getCoords(topArrow).top - 130 + 'px';
    }
});



$('.header__left-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.header__right-slider',
    arrows: false,
    fade: true,
    adaptiveHeight: true
});


$('.header__right-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.header__left-slider',
    arrows: true,
    prevArrow: '<div class="header__prev"></div>',
    nextArrow: '<div class="header__next"></div>'
});

let audioBtn = document.querySelector('.play-audio'),
    equalizer = document.querySelector('.audio-equalizer');

audioBtn.addEventListener('click', function () {
    if(equalizer.classList.contains('onplay')){
        audioBtn.innerHTML = 'ВКЛ.';
        equalizer.classList.remove('onplay');
    } else {
        audioBtn.innerHTML = 'ВЫКЛ.';
        equalizer.classList.add('onplay');
    }
});

//изменения позиции цифр пагинации слайдера при перезаргузке в зависимости от ширины экрана
let pag = document.querySelector('.header__pagination');
let topArrow = document.querySelector('.header__prev');

function getCoords(elem) { // кроме IE8-
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}

window.onload = function() {
    if(!tablet) {
        pag.style.top = getCoords(topArrow).top - 170 + 'px';
    } else {
        pag.style.top = getCoords(topArrow).top - 130 + 'px';
    }
};