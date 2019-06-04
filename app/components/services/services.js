
$('.services__item').on({
    mouseenter: function () {
        $(this).find('.services__item_hover').fadeIn();
    },
    mouseleave: function () {
        $(this).find('.services__item_hover').fadeOut();
    }
});

