
$('.favor__item').on({
    mouseenter: function () {
        $(this).find('.favor__item_hover').fadeIn('fast');
    },
    mouseleave: function () {
        $(this).find('.favor__item_hover').fadeOut('fast');
    }
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
        $('.footer__btn-top').css('display','block');
    } else {
        $('.footer__btn-top').css('display','none');
    }
});