$(function () {
    let target02 = $('.target02')

    $(window).scroll(function () {
        $('.target02').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if($(this).hasClass('top500') && scroll > position - windowHeight + 500){
                $(this).addClass('show');
                return;
            }

            if (scroll > position - windowHeight + 200) {
                $(this).addClass('show');
            }
        });
    });
});