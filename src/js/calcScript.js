$(document).ready(function () {

    //Добавляем Прелоадер
    $(".loaderArea").css("display", "none");

    //Анимация активных ссылок в меню 
    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();


        $('.section').each((i, el) => {

            if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
                $('nav a').each((i, el) => {
                    if ($(el).hasClass('active')) {
                        $(el).removeClass('active');
                    }
                });

                $('nav li:eq(' + i + ')').find('a').addClass('active');
            }

        });
    });

    //Плавный скроллинг к якорным ссылкам
    $("a[href^='#']").click(function () {
        let _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top + "px"
        });
        return false;
    });

    //Отложенная анимация
    let options = {
        threshold: [0.7]
    };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.element-animationH');
    elements.each((i, el) => {
        observer.observe(el);
    });


    let options2 = {
        threshold: [0.7]
    };

    let observer2 = new IntersectionObserver(onEntry2, options2);
    let elements2 = $('.element-animationImgText');
    elements2.each((i2, el2) => {
        observer2.observe(el2);
    });




    //калькулятор
    function calculate() {
        let sum = parseInt($("selectSite option:selected").val()) + parseInt($("selectDesign option:selected").val()) + parseInt($("selectAdaptive option:selected").val());

        let days = parseInt($("selectSite option:selected").attr("days")) + parseInt($("selectDesign option:selected").attr("days")) + parseInt($("selectAdaptive option:selected").attr("days"));

        $(".price .digit").text(sum);
        $(".days .digit").text(days);
    }


    function calculate() {
        let sum = parseInt($("#selectSite option:selected").val()) + parseInt($("#selectDesign option:selected").val()) + parseInt($("#selectAdaptive option:selected").val());

        let days = parseInt($("#selectSite option:selected").attr("days")) + parseInt($("#selectDesign option:selected").attr("days")) + parseInt($("#selectAdaptive option:selected").attr("days"));

        $(".price .digit").text(sum);
        $(".days .digit").text(days);
    }
    calculate();
    $("select").on("change", function () {
        calculate();
    });


    //Бегающие цифры статистики
    let optionsStat = {
        threshold: [0.5]
    };
    let observerStat = new IntersectionObserver(onEntryStat, optionsStat);
    let elementsStat = $('.statAnimation');

    elementsStat.each((i, el) => {
        observerStat.observe(el);
    });


    function onEntryStat(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                if (!$('.statAnimation').hasClass("done")) {
                    $('.statAnimation').addClass("done");
                    $('.statAnimation').spincrement({
                        thousandSeparator: "",
                        duration: 4500
                    });
                }
            }
        });
    }
    
    //Загрузка картинок при пролистывании
    let optionsImg = {
        threshold: [0.5]
    };
    let observerImg = new IntersectionObserver(onEntryImg, optionsImg);
    let elementsImg = $('.first_image');

    elementsImg.each((i, el) => {
        observerImg.observe(el);
    });


    function onEntryImg(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.src = change.target.dataset.src;
            }
        });
    }
    
    
     //Модальные окна в кейсах
    $('.image-link').magnificPopup({
        type: 'image'
    });

    //Модальное окно акции по таймеру
    setTimeout(function () {
        const myModal = new bootstrap.Modal('#myModal', {
            keyboard: false
        });
        modalToggle = document.getElementById('toggleMyModal');
        myModal.show(modalToggle);

    }, 10000);

    
    //Модальные окна в кейсах
    $('.image-link').magnificPopup({
        type: 'image'
    });

});




//функции для добавления класса, чтобы начаналась анимация
function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('show-animationH');
        }
    });
}

function onEntry2(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('show-animationImgText');
        }
    });
}