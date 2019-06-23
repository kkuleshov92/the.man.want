if (document.querySelector('.play-audio') != null) {
    let countSlides = $('.reviews__item').length;
    $('.reviews__total-slide').html('/0' + countSlides);
}


$('.reviews__list').slick({
    slidesToShow: 2,
    variableWidth: true,
    prevArrow: $('.reviews__prev'),
    nextArrow: $('.reviews__next'),
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 1,
                centerMode: true
            }
        }
    ]
});

let leftBtn = $(".reviews__curr-slide");
let rightBtn = $(".reviews__total-slide");

$(".reviews__list").on("init", function(event, slick){
    $(leftBtn).text(String('0' + parseInt(slick.currentSlide + 1) + ''));
    $(rightBtn).text(String('/0' + parseInt(slick.slideCount)));
});

$(".reviews__list").on("afterChange", function(event, slick, currentSlide){
    $(leftBtn).text(String('0' + parseInt(slick.currentSlide + 1)) + '');
    $(rightBtn).text(String('/0' + slick.slideCount));
});

