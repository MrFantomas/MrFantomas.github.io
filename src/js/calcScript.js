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

    let ok = false;
    window.addEventListener('scroll', function () {
        if (ok === false) {
            ok = true;
            setTimeout(() => {
                let script = document.createElement('script');
                script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A2467dfbbd414306f38c00aa9048346ada3bf2ae105b1d1c84eb6a671b54fc5cd&amp;width=100%25&amp;height=300&amp;lang=ru_RU&amp;scroll=false';
                document.getElementById('yamap').replaceWith(script);
            }, 1000)
        }
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


    //spin.js
    ! function (t) {
        t.extend(t.easing, {
            spincrementEasing: function (t, a, e, n, r) {
                return a === r ? e + n : n * (-Math.pow(2, -10 * a / r) + 1) + e
            }
        }), t.fn.spincrement = function (a) {
            function e(t, a) {
                if (t = t.toFixed(a), a > 0 && "." !== r.decimalPoint && (t = t.replace(".", r.decimalPoint)), r.thousandSeparator)
                    for (; o.test(t);) t = t.replace(o, "$1" + r.thousandSeparator + "$2");
                return t
            }
            var n = {
                    from: 0,
                    to: null,
                    decimalPlaces: null,
                    decimalPoint: ".",
                    thousandSeparator: ",",
                    duration: 1e3,
                    leeway: 50,
                    easing: "spincrementEasing",
                    fade: !0,
                    complete: null
                },
                r = t.extend(n, a),
                o = new RegExp(/^(-?[0-9]+)([0-9]{3})/);
            return this.each(function () {
                var a = t(this),
                    n = r.from;
                a.attr("data-from") && (n = parseFloat(a.attr("data-from")));
                var o;
                if (a.attr("data-to")) o = parseFloat(a.attr("data-to"));
                else if (null !== r.to) o = r.to;
                else {
                    var i = t.inArray(r.thousandSeparator, ["\\", "^", "$", "*", "+", "?", "."]) > -1 ? "\\" + r.thousandSeparator : r.thousandSeparator,
                        l = new RegExp(i, "g");
                    o = parseFloat(a.text().replace(l, ""))
                }
                var c = r.duration;
                r.leeway && (c += Math.round(r.duration * (2 * Math.random() - 1) * r.leeway / 100));
                var s;
                if (a.attr("data-dp")) s = parseInt(a.attr("data-dp"), 10);
                else if (null !== r.decimalPlaces) s = r.decimalPlaces;
                else {
                    var d = a.text().indexOf(r.decimalPoint);
                    s = d > -1 ? a.text().length - (d + 1) : 0
                }
                a.css("counter", n), r.fade && a.css("opacity", 0), a.animate({
                    counter: o,
                    opacity: 1
                }, {
                    easing: r.easing,
                    duration: c,
                    step: function (t) {
                        a.html(e(t * o, s))
                    },
                    complete: function () {
                        a.css("counter", null), a.html(e(o, s)), r.complete && r.complete(a)
                    }
                })
            })
        }
    }(jQuery);





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

    /*let ok = false;
    window.addEventListener('scroll', function () {
        if (ok === false) {
            ok = true;
            setTimeout(() => {
                let script = document.createElement('script');
                script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ad3672aa640444d6733d378ee2868f884a9b5dbf7c866c465a95423aad97a2f3f&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=false';
                document.getElementById('yamap').replaceWith(script);
            }, 3000)
        }


    });*/


});