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

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))













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
if ($('#addReportBtn').length) {
    document.getElementById('addReportBtn').addEventListener('click', function () {
        const reportCount = document.querySelectorAll('.uploadinsp__repbox').length + 1;
        const newReport = document.querySelector('.uploadinsp__repbox').cloneNode(true);

        const reportTitle = newReport.querySelector('.report-title');
        reportTitle.textContent = `Report ${reportCount}`;

        const inputs = newReport.querySelectorAll('input, select');
        inputs.forEach((input) => {
            if (input.type === 'file') {
                input.value = '';
                newReport.querySelector('.filename').textContent = 'Upload file';
            } else if (input.type === 'date') {
                input.value = '';
            } else if (input.type === 'text') {
                input.value = '';
            } else if (input.tagName === 'SELECT') {
                input.selectedIndex = 0;
            }
        });

        inputs.forEach((input) => {
            if (input.type === 'file') {
                const newFileInputId = `repfile-${reportCount}`;
                input.id = newFileInputId;

                const fileLabel = newReport.querySelector('label[for="repfile"]');
                if (fileLabel) {
                    fileLabel.setAttribute('for', newFileInputId);
                }

                input.addEventListener('change', function () {
                    const fileName = input.files[0] ? input.files[0].name : "Upload file";
                    newReport.querySelector('.filename').textContent = fileName;
                });
            } else if (input.type === 'date') {
                input.id = `date-${reportCount}`;
            } else if (input.type === 'text' && input.placeholder === '0.00') {
                input.id = `price-${reportCount}`;
            } else if (input.type === 'text' && input.placeholder === '') {
                input.id = `companyName-${reportCount}`;
            } else if (input.tagName === 'SELECT') {
                input.id = `reportType-${reportCount}`;
            }
        });

        document.querySelector('.uploadinsp__repboxes').appendChild(newReport);

        const selects = newReport.querySelectorAll('select');
        selects.forEach((select) => {
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const reportOwnerInput = document.getElementById('subjinp'); // Поле для заголовку
    const messCont = document.getElementById('messcont'); // Поле для контексту
    const titleElement = document.querySelector('.emailcontent .title');
    const emailContextElement = document.querySelector('.emailcontent .emailcontex');

    // Оновлення заголовку
    if (reportOwnerInput && titleElement) {
        reportOwnerInput.addEventListener('input', function () {
            titleElement.textContent = reportOwnerInput.value || "Report owner - upload your report";
        });
    }

    // Оновлення контексту, з заміною нових рядків на <br>
    if (messCont && emailContextElement) {
        messCont.addEventListener('input', function () {
            const formattedText = messCont.value.replace(/\n/g, '<br>'); // Замінюємо '\n' на '<br>'
            emailContextElement.innerHTML = formattedText || "This is a template! Publish your report and earn money!";
        });
    }
});
