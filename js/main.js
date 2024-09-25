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
    // slider
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
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            speed: 1000,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
              },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                dynamicBullets: true,
            },
            breakpoints: {
                640: {
                  slidesPerView: 2,
                },
                991: {
                  slidesPerView: 1,
                },
                1200: {
                  slidesPerView: 2,
                },
              },
        });
    }
    // readmore
    $('.prreadmore.rm1').click(function(){
        $(this).toggleClass('active');
        $(this).find('span').toggle();
        $(this).prev('.productinfo__boxdescr').toggleClass('show');
    });
    $('.prreadmore.rm2').click(function(){
        $(this).toggleClass('active');
        $(this).find('span').toggle();
        $(this).prev('.row').toggleClass('show');
    });
});


