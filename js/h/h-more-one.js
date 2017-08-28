
var per = 0;
$(window).on('scroll', function () {
    per = $(window).scrollTop() / 500;
    if (per >= 1) {
        per = 1;
        $('.h-border').css('opacity', 0.5)
        return;
    }
    $('.h-border').css('opacity', per)
})