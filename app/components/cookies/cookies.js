function setCookieOn() {
    document.cookie = "status=playerOn";
}

function setCookieOff() {
    document.cookie = "status=playerOff";
}

$('.btn_cookies').click(function () {
   $('.cookies').fadeOut();
});