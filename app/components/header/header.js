// // header slider left

let leftPagin = $(".header__pagination-left");
let rightPagin = $(".header__pagination-right");
let line = $('.line-inner');

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
    prevArrow: $('.header__prev'),
    nextArrow: $('.header__next')
});


//audio controls
if(document.querySelector('.play-audio') != null) {

    if ((document.cookie.indexOf('playerOn') == -1) && (document.cookie.indexOf('playerOff')) == -1) {
        $('.cookies').fadeIn();
    }

    let audioBtn = document.querySelector('.play-audio'),
        equalizer = document.querySelector('.audio-equalizer'),
        audio = document.querySelector('audio');

    if(document.cookie.indexOf('playerOn') > 0) {
        audioBtn.innerHTML = 'ВЫКЛ.';
        equalizer.classList.add('onplay');
        audio.play();
    } else {
        audioBtn.innerHTML = 'ВКЛ.';
        equalizer.classList.remove('onplay');
        audio.pause();
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