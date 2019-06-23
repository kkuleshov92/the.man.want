
if (document.querySelector('.categories') != null) {
    let categoriesNum = $('.categories__item').length;
    for (i = 0; i <= categoriesNum; i++) {
        $('.categories__item').eq(i).find('.categories__item-num').html('0'+ (i + 1));
    }
}
