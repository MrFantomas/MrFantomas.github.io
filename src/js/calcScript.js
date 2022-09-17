"use strict"

alert("Добрый день!");

let name = prompt("Какое у Вас имя?");
alert(`Добро пожаловать, ${name}!`);


let result = 0;
let days = 0;
let proverka = 0;

let quest1 = prompt("Какой тип сайта нужен? \n1 - Визитка: 1000 рублей \n2 - Корпоративный сайт: 2000 рублей \n3 - Интернет-магазин: 3000 рублей");

if (quest1 === "1") {
    result += 1000;
    days += 2;
    proverka = 1;
} else if (quest1 === "2") {
    result += 2000;
    days += 4;
    proverka = 1;
} else if (quest1 === "3") {
    result += 3000;
    days += 6;
    proverka = 1;
} else if (quest1 > "3") {
    alert("Ошибка.Введите от 1 до 3")
    proverka = 0;
};


if (proverka === 1) {
    let quest2 = prompt("Какой необходим дизайн? \n1 - Деловой: 1000 рублей \n2 - Ретро: 2000 рублей \n3 - Минимализм: 3000 рублей");
    if (quest2 === "1" && proverka === 1) {
        result += 1000;
        days += 3;
        proverka = 1;
    } else if (quest2 === "2") {
        result += 2000;
        days += 5;
        proverka = 1;
    } else if (quest2 === "3") {
        result += 3000;
        days += 5;
        proverka = 1;
    } else if (quest2 > "3") {
        alert("Ошибка.Введите от 1 до 3")
        proverka = 0;
    }
}


if (proverka === 1) {
    let quest3 = prompt("Какая адаптивность нужна? \n1 - Все устройства: 3000 рублей \n2 - Только ПК: 2000 рублей \n3 - Мобильные устройства: 2000 рублей");
    if (quest3 === "1") {
        result += 3000;
        days += 3;
        proverka = 1;
    } else if (quest3 === "2") {
        result += 2000;
        days += 2;
        proverka = 1;
    } else if (quest3 === "3") {
        result += 2000;
        days += 2;
        proverka = 1;
    } else if (quest3 > "3") {
        alert("Ошибка.Введите от 1 до 3")
        proverka = 0;
    };

};


if (proverka === 1) {
    alert(`Срок изготовления сайта: ${days} дней \nКонечная стоимость сайта ${result} рублей`);
} else {
    alert("Неверные данные!");
}