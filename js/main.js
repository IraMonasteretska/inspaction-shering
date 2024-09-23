$(document).ready(function () {

    $('.searchbtn').click(function () {
        $(this).next('form').toggle();
    });

    // mob menu
    $('.menubtn').click(function () {
        $('.menubg').addClass('show');
        $('.mobmenu').addClass('open');
    });
    $('.closemenu').click(function () {
        $('.menubg').removeClass('show');
        $('.mobmenu').removeClass('open');
    });


    // swiper
    if ($('.swiper').length) {
        var swiper = new Swiper(".mySwiper", {
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                dynamicBullets: true,
            },
        });
    }

    // fancybox
    if ($('[data-fancybox]').length) {
        Fancybox.bind("[data-fancybox]", {

        });
    }

    // product slider
    if ($('.prodslider').length) {
        var swiper = new Swiper(".prodslider", {
            slidesPerView: 2,
            spaceBetween: 24,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                dynamicBullets: true,
            },
        });
    }





    // ------------------------------




});


