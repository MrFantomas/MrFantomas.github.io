$(document).ready(function () {

    new WOW().init();

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

    //Загрузка картинок при пролистывании
    let optionsImg = {
        threshold: [0.5]
    };
    let observerImg = new IntersectionObserver(onEntryImg, optionsImg);
    let elementsImg = $('.first_image');

    elementsImg.each((i, el) => {
        observerImg.observe(el);
    });

    //калькулятор
    async function calculate() {
        let sum = parseInt($("selectSite option:selected").val()) + parseInt($("selectDesign option:selected").val()) + parseInt($("selectAdaptive option:selected").val());

        let days = parseInt($("selectSite option:selected").attr("days")) + parseInt($("selectDesign option:selected").attr("days")) + parseInt($("selectAdaptive option:selected").attr("days"));

        $(".price .digit").text(sum);
        $(".days .digit").text(days);
    }



    //Бегающие цифры статистики
    let optionsStat = {
        threshold: [0.5]
    };
    let observerStat = new IntersectionObserver(onEntryStat, optionsStat);
    let elementsStat = $('.statAnimation');

    elementsStat.each((i, el) => {
        observerStat.observe(el);
    });

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

    //Маска для телефона в форме
    $("#inputTel").mask("+7(999) 999-9999");

    //Проверка на пустое поле
    $('form').submit(function (event) {
        if ($("#inputTel").val() == "" || $("#formName").val() == "") {
            event.preventDefault();
            alert("Заполните поле");
        }
    })

    //Уведомление, что данные отправлены успешно
    $('form').submit(function (event) {
        event.preventDefault();

        $.ajax({
            type: "POST",
            url: "php/mail.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            alert("Успешно отправлено!");
            $("form").trigger("reset");
        });
        return false;
    });


    //функции для добавления класса, чтобы начаналась анимация
    async function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('show-animationH');
            }
        });
    }

    async function onEntry2(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('show-animationImgText');
            }
        });
    }


    async function onEntryStat(entry) {
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


    async function calculate() {
        let sum = parseInt($("#selectSite option:selected").val()) + parseInt($("#selectDesign option:selected").val()) + parseInt($("#selectAdaptive option:selected").val());

        let days = parseInt($("#selectSite option:selected").attr("days")) + parseInt($("#selectDesign option:selected").attr("days")) + parseInt($("#selectAdaptive option:selected").attr("days"));

        $(".price .digit").text(sum);
        $(".days .digit").text(days);
    }
    calculate();
    $("select").on("change", function () {
        calculate();
    });

    async function onEntryImg(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.src = change.target.dataset.src;
            }
        });
    }




    /*//карта 1 метод
    let ok = false;
    window.addEventListener('scroll', function () {
        if (ok === false) {
            ok = true;
            setTimeout(() => {
                let script = document.createElement('script');
                script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ad3672aa640444d6733d378ee2868f884a9b5dbf7c866c465a95423aad97a2f3f&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=false';
                document.getElementById('yamap').replaceWith(script);                
            }, 3000)
        }
    });
    */

    //карта 2 метод    
    let optionsMap = {
        threshold: [1]
    };

    let observerMap = new IntersectionObserver(onEntryMap, optionsMap);
    let elementsMap = $('#myMap');

    async function onEntryMap(entry) {
        alert("work");
        entry.forEach(entry => {
            $('.mapa').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ad3672aa640444d6733d378ee2868f884a9b5dbf7c866c465a95423aad97a2f3f&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>')                 
        });
    }
                      
                      
                      
     
                      
                      
                      
});
