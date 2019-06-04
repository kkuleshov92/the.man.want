
$('.favor__item').on({
    mouseenter: function () {
        $(this).find('.favor__item_hover').fadeIn();
    },
    mouseleave: function () {
        $(this).find('.favor__item_hover').fadeOut();
    }
});

