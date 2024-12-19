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
    $('.prreadmore.rm1').click(function () {
        $(this).toggleClass('active');
        $(this).find('span').toggle();
        $(this).prev('.productinfo__boxdescr').toggleClass('show');
    });
    $('.prreadmore.rm2').click(function () {
        $(this).toggleClass('active');
        $(this).find('span').toggle();
        $(this).prev('.row').toggleClass('show');
    });

    $('.header__inf-log .links span').click(function () {
        $('.header__inf-ddmenu').toggle();
    });





    // new  
    // tooltip

    // let $tooltip = null;
    // const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // const removeAllTooltips = function () {
    //     $('.tooltip').remove();
    //     $tooltip = null;
    // };

    // const showTooltip = function ($el) {
    //     const tooltipText = $el.data('tooltip');
    //     if (!tooltipText) return;

    //     removeAllTooltips();

    //     $tooltip = $('<div class="tooltip"></div>').text(tooltipText).appendTo('body');

    //     const offset = $el.offset();
    //     $tooltip.css({
    //         left: offset.left + $el.outerWidth() / 2 - $tooltip.outerWidth() / 2,
    //         top: offset.top - $tooltip.outerHeight() - 12,
    //     });

    //     setTimeout(() => {
    //         if ($tooltip) $tooltip.addClass('show');
    //     }, 10);
    // };

    // const hideTooltip = function () {
    //     if ($tooltip) {
    //         $tooltip.removeClass('show').on('transitionend', function () {
    //             $(this).remove();
    //         });
    //         $tooltip = null;
    //     }
    // };

    // if (!isTouchDevice) {
    //     $(document).on('mouseenter', '[data-tooltip]', function () {
    //         showTooltip($(this));
    //     });

    //     $(document).on('mouseleave', '[data-tooltip]', function () {
    //         hideTooltip();
    //     });
    // }

    // else {
    //     $(document).on('click', '[data-tooltip]', function (e) {
    //         e.stopPropagation();
    //         if ($tooltip) {
    //             hideTooltip();
    //         } else {
    //             showTooltip($(this));
    //         }
    //     });

    //     $(document).on('click', function () {
    //         removeAllTooltips();
    //     });
    // }


    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


    // if ($('select').length) {
    //     $('.styledselect').select2({
    //         // placeholder: "Project Type*",
    //         minimumResultsForSearch: Infinity,
    //     });
    // }

});

// upload file
document.querySelectorAll('.uploadfile').forEach(function (uploadFileBlock) {
    const inputFile = uploadFileBlock.querySelector('input[type="file"]');
    const fileNameText = uploadFileBlock.querySelector('.filename');

    inputFile.addEventListener('change', function () {
        const file = inputFile.files[0];
        if (file) {
            fileNameText.textContent = file.name;
        } else {
            fileNameText.textContent = 'Upload file';
        }
    });
});

// add more reps
