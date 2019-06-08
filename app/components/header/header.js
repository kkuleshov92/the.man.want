// // header slider left

let leftPagin = $(".header__pagination-left");
let rightPagin = $(".header__pagination-right");
let line = $('.line-inner');



$(".header__right-slider").on("init", function(event, slick){
    $(leftPagin).text(String('0' + parseInt(slick.currentSlide + 1) + ''));
    $(rightPagin).text(String('/0' + parseInt(slick.slideCount)));
    $(line).addClass('blink');
});
$(document).ready(function () {

    $(".header__right-slider").on("afterChange", function(event, slick, currentSlide){
        $(leftPagin).text(String('0' + parseInt(slick.currentSlide + 1)) + '');
        $(rightPagin).text(String('/0' + slick.slideCount));
    });

    $('.header__left-slider').on('beforeChange', function () {
        $(line).css("animation", 'null');
        setTimeout(function(){
            $(line).css("animation", 'line 7.1s linear infinite');
        }, 500);
    });
});


$('.header__left-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.header__right-slider',
    arrows: false,
    fade: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 7000
});


$('.header__right-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.header__left-slider',
    arrows: true,
    prevArrow: $('.header__prev'),
    nextArrow: $('.header__next')
});

var date = new Date(new Date().getTime() + 31104000 * 1000);

$('.btn_cookies').click(function(){
    $('.cookies').fadeOut();
    document.cookie = "cookie=1;expires=" + date.toUTCString();
});

function setCookieOn() {
    document.cookie = "status=1;expires=" + date.toUTCString();
}

function setCookieOff() {
    document.cookie = "status=0;expires=" + date.toUTCString();
}

function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

//audio controls
if(document.querySelector('.play-audio') != null) {

    var audioBtn = document.querySelector('.play-audio'),
        equalizer = document.querySelector('.audio-equalizer'),
        audio = document.querySelector('audio');

    setTimeout(checkStatus, 3000);


    if ( !getCookie( "cookie" ) ) {
        $('.cookies').fadeIn();
    }

    function checkStatus() {
        if((!getCookie("status")) || (getCookie("status") == 1)) {
            audioBtn.innerHTML = 'ВЫКЛ.';
            equalizer.classList.add('onplay');
            audio.play();
        } else if (getCookie("status") == 0) {
            audioBtn.innerHTML = 'ВКЛ.';
            equalizer.classList.remove('onplay');
            audio.pause();
        }
        console.log('go!');
    }




    audioBtn.addEventListener('click', function () {
        if (equalizer.classList.contains('onplay')) {
            audioBtn.innerHTML = 'ВКЛ.';
            equalizer.classList.remove('onplay');
            audio.pause();
            setCookieOff();
        } else {
            audioBtn.innerHTML = 'ВЫКЛ.';
            equalizer.classList.add('onplay');
            audio.play();
            setCookieOn();
        }
    });
}




//scroll to anchor
let $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
});