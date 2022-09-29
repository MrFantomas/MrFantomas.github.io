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

});




/*$(document).ready(function () {

    let options = {
        threshold: [1]
    };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.element-animation');
    elements.each((i, el) => {
        observer.observe(el);
    });
    
    
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
    
});

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('show-animation');
        }
    });
}
*/


/*alert("Добрый день!");

let name = prompt('Какое у Вас имя?');
alert(`Добро пожаловать, ${name}!`);

let quest1, quest2, quest3;

let calc = {
    price: [
        [1000, 2000, 3000],
        [1000, 2000, 3000],
        [3000, 2000, 2000],
    ],
    days: [
        [2, 4, 6],
        [3, 5, 5],
        [3, 2, 2],
    ],
    run(q1, q2, q3) {
        let result = parseInt(calc.price[0][q1-1]) + parseInt(calc.price[1][q2-1] + parseInt(calc.price[2][q3-1]));
    
        let days = parseInt(calc.days[0][q1-1]) + parseInt(calc.days[1][q2-1]) + parseInt(calc.days[2][q3-1]);
        
        alert(`Срок изготовления сайта: ${days} дней \nКонечная стоимость сайта ${result} рублей`);
    }

}

function getAns() {
quest1 = prompt("Какой тип сайта нужен? \n1 - Визитка: 1000 рублей \n2 - Корпоративный сайт: 2000 рублей \n3 - Интернет-магазин: 3000 рублей");
    if (quest1 != 1 && quest1 != 2 && quest1 != 3) {
        alert("Ошибка.Введите от 1 до 3");
        getAns();
        return;
    }

quest2 = prompt("Какой необходим дизайн? \n1 - Деловой: 1000 рублей \n2 - Ретро: 2000 рублей \n3 - Минимализм: 3000 рублей");
    if (quest2 != 1 && quest2 != 2 && quest2 != 3) {
        alert("Ошибка.Введите от 1 до 3");
        getAns();
        return;
    }
    
let quest3 = prompt("Какая адаптивность нужна? \n1 - Все устройства: 3000 рублей \n2 - Только ПК: 2000 рублей \n3 - Мобильные устройства: 2000 рублей");
    if (quest3 != 1 && quest3 != 2 && quest3 != 3) {
        alert("Ошибка.Введите от 1 до 3");
        getAns();
        return;
    }
    calc.run(quest1,quest2,quest3);
}

getAns();




*/