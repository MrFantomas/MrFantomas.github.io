function showMethod(method) {
    const info = {
        "Эль-Гамаля": "Описание алгоритма Эль-Гамаля...",
        "Диффи-Хеллмана": "Описание алгоритма Диффи-Хеллмана...",
        "RSA": "Описание алгоритма RSA...",
        "Сеть Фейстеля": "Описание сети Фейстеля...",
        "MixColumn": "Описание алгоритма MixColumn...",
        "InvMixColumn": "Описание алгоритма InvMixColumn...",
        "AES 1 раунд": "Описание 1 раунда AES...",
        "DES": "Описание алгоритма DES..."
    };
    document.getElementById('method-info').innerText = info[method];
}




document.addEventListener('DOMContentLoaded', () => {
    function showMethod(method) {
        if (method === 'Эль-Гамаля') {
            document.getElementById('inputFields').style.display = 'flex';
            window.calculateElGamal = calculateElGamal;
        } else {
            document.getElementById('inputFields').style.display = 'none';
        }
        if (method === 'Сеть Фейстеля') {
            document.getElementById('inputFeistel').style.display = 'flex';
            window.calculateFeistel = calculateFeistel;
        } else {
            document.getElementById('inputFeistel').style.display = 'none';
        }
    }

    window.showMethod = showMethod;

    function calculateElGamal() {
        const p = parseInt(document.getElementById('p').value);
        const g = parseInt(document.getElementById('g').value);
        const k = parseInt(document.getElementById('k').value);
        const x = parseInt(document.getElementById('x').value);
        const M = parseInt(document.getElementById('M').value);

        const y = Math.pow(g, x) % p;
        const b = M * (Math.pow(y, k) % p);

        document.getElementById('resultField').value = `Ответ Эль-Гамаля: ${b}`;
    }

    //window.calculateElGamal = calculateElGamal;




    ///////////////////// ФЕЙСТЕЛЬ ДАВАЙ НАХУЙ ///////////////////
    ////////////////////// СЕТЬ ФЕЙСТЕЛЯ ////////////////////
    function Russian_Alphabet(letter) {
        const Russian_Alphabet_dict = {
            '00': 'А', '01': 'Б', '02': 'В', '03': 'Г', '04': 'Д', '05': 'Е', '06': 'Ё', '07': 'Ж',
            '08': 'З', '09': 'И', '10': 'Й', '11': 'К', '12': 'Л', '13': 'М', '14': 'Н', '15': 'О',
            '16': 'П', '17': 'Р', '18': 'С', '19': 'Т', '20': 'У', '21': 'Ф', '22': 'Х', '23': 'Ц',
            '24': 'Ч', '25': 'Ш', '26': 'Щ', '27': 'Ъ', '28': 'Ы', '29': 'Ь', '30': 'Э', '31': 'Ю',
            '32': 'Я'
        };
    
        // Преобразуем десятичное значение в строку из двух символов
        const decimal_str = letter.toString().padStart(2, '0');
    
        // Находим соответствующую букву в словаре
        const russian_letter = Russian_Alphabet_dict[decimal_str] || 'Нет соответствия';
    
        return russian_letter;
    }
    
    
    function calculateFeistel() {
        console.log("Сеть Фейстеля Расшифрование!!!!!");
        // const L0 = parseInt(document.getElementById('L0').value);
        // const R0 = parseInt(document.getElementById('R0').value);
    
        // console.log("Введите перед ключом 00");
        // const K1 = (document.getElementById('k1').value);
        // const K2 = (document.getElementById('k2').value);
        // const K3 = (document.getElementById('k3').value);
        // const K4 = (document.getElementById('k4').value);
    
        // console.log(`\nL0 = ${L0} в двоичном представлении: ${parseInt(L0, 16).toString(2).padStart(16, '0')}`);
        // console.log(`R0 = ${R0} в двоичном представлении: ${parseInt(R0, 16).toString(2).padStart(16, '0')}`);
        // console.log(`Ключ K4 = ${K4} в двоичном представлении: ${parseInt(K4, 16).toString(2).padStart(16, '0')}`);
        // console.log(`Ключ K3 = ${K3} в двоичном представлении: ${parseInt(K3, 16).toString(2).padStart(16, '0')}`);
        // console.log(`Ключ K2 = ${K2} в двоичном представлении: ${parseInt(K2, 16).toString(2).padStart(16, '0')}`);
        // console.log(`Ключ K1 = ${K1} в двоичном представлении: ${parseInt(K1, 16).toString(2).padStart(16, '0')}`);



        const L0 = document.getElementById('L0').value;
        const R0 = document.getElementById('R0').value;
        const K1 = document.getElementById('k1').value;
        const K2 = document.getElementById('k2').value;
        const K3 = document.getElementById('k3').value;
        const K4 = document.getElementById('k4').value;

        console.log(`\nL0 = ${L0} в двоичном представлении: ${parseInt(L0, 16).toString(2).padStart(16, '0')}`);
        console.log(`R0 = ${R0} в двоичном представлении: ${parseInt(R0, 16).toString(2).padStart(16, '0')}`);
        console.log(`Ключ K4 = ${K4} в двоичном представлении: ${parseInt(K4, 16).toString(2).padStart(16, '0')}`);
        console.log(`Ключ K3 = ${K3} в двоичном представлении: ${parseInt(K3, 16).toString(2).padStart(16, '0')}`);
        console.log(`Ключ K2 = ${K2} в двоичном представлении: ${parseInt(K2, 16).toString(2).padStart(16, '0')}`);
        console.log(`Ключ K1 = ${K1} в двоичном представлении: ${parseInt(K1, 16).toString(2).padStart(16, '0')}`);

    
        console.log("\n● Первый раунд");
        console.log("1) F1 = L0 xor K4:");
        const xorL0_K4 = (parseInt(L0, 16) ^ parseInt(K4, 16)).toString(2).padStart(16, '0');
        console.log(xorL0_K4 + " = F1");
    
        console.log("2) L1 = F1 xor R0:");
        const xorF1_R0 = (parseInt(xorL0_K4, 2) ^ parseInt(R0, 16)).toString(2).padStart(16, '0');
        console.log(xorF1_R0 + " = L1");
    
        console.log("\n● Второй раунд");
        console.log("1) F2 = L1 xor K3:");
        const xorL1_K3 = (parseInt(xorF1_R0, 2) ^ parseInt(K3, 16)).toString(2).padStart(16, '0');
        console.log(xorL1_K3 + " = F2");
    
        console.log("2) L2 = F2 xor R1 (R1 = L0):");
        const xorF2_L0 = (parseInt(xorL1_K3, 2) ^ parseInt(L0, 16)).toString(2).padStart(16, '0');
        console.log(xorF2_L0 + " = L2");
    
        console.log("\n● Третий раунд");
        console.log("1) F3 = L2 xor K2:");
        const xorL2_K2 = (parseInt(xorF2_L0, 2) ^ parseInt(K2, 16)).toString(2).padStart(16, '0');
        console.log(xorL2_K2 + " = F3");
    
        console.log("2) L3 = F3 xor R2 (R2 = L1):");
        const xorF3_L1 = (parseInt(xorL2_K2, 2) ^ parseInt(xorF1_R0, 2)).toString(2).padStart(16, '0');
        console.log(xorF3_L1 + " = L3 = L4");
    
        console.log("\n● Четвёртый раунд");
        console.log("1) F4 = L3 xor K1:");
        const xorL3_K1 = (parseInt(xorF3_L1, 2) ^ parseInt(K1, 16)).toString(2).padStart(16, '0');
        console.log(xorL3_K1 + " = F4");
    
        console.log("2) R4 = F4 xor R3 (R3 = L2):");
        const xorF4_L2 = (parseInt(xorL3_K1, 2) ^ parseInt(xorF2_L0, 2)).toString(2).padStart(16, '0');
        console.log(xorF4_L2 + " = R4");
    
        console.log(`\nL4 = ${xorF3_L1}`);
        console.log(`R4 = ${xorF4_L2}`);
    
        // Функция для перевода двоичного числа в десятичное
        function binary_to_decimal(binary) {
            let decimal = 0;
            for (let i = 0; i < binary.length; i++) {
                decimal += parseInt(binary[i]) * Math.pow(2, binary.length - 1 - i);
            }
            return decimal;
        }
    
        // Входное двоичное число длиной 16 символов
        const binary_number1 = xorF3_L1.padStart(16, '0');
        const binary_number2 = xorF4_L2.padStart(16, '0');
    
        // Разбиваем число на две части по 8 символов
        const first_part1 = binary_number1.slice(0, 8);
        const second_part1 = binary_number1.slice(8);
    
        // Переводим каждую часть в десятичную систему
        const decimal_first_part1 = binary_to_decimal(first_part1);
        const decimal_second_part1 = binary_to_decimal(second_part1);
    
        console.log("\n● Разбиваем последовательность L4R4 на 4 части по 8 бит:");
        console.log(` Первая буква: ${first_part1} = ${decimal_first_part1} = ${Russian_Alphabet(decimal_first_part1)}`);
        console.log(` Вторая буква: ${second_part1} = ${decimal_second_part1} = ${Russian_Alphabet(decimal_second_part1)}`);
    
        // Разбиваем второе число на две части по 8 символов
        const first_part2 = binary_number2.slice(0, 8);
        const second_part2 = binary_number2.slice(8);
    
        // Переводим каждую часть в десятичную систему
        const decimal_first_part2 = binary_to_decimal(first_part2);
        const decimal_second_part2 = binary_to_decimal(second_part2);
    
        console.log(` Третья буква: ${first_part2} = ${decimal_first_part2} = ${Russian_Alphabet(decimal_first_part2)}`);
        console.log(` Четвёртая буква: ${second_part2} = ${decimal_second_part2} = ${Russian_Alphabet(decimal_second_part2)}`);
    
        console.log(`\nОТВЕТ: ${Russian_Alphabet(decimal_first_part1)}${Russian_Alphabet(decimal_second_part1)}${Russian_Alphabet(decimal_first_part2)}${Russian_Alphabet(decimal_second_part2)}`);

        document.getElementById('resultFeistel').value = `\nОТВЕТ: ${Russian_Alphabet(decimal_first_part1)}${Russian_Alphabet(decimal_second_part1)}${Russian_Alphabet(decimal_first_part2)}${Russian_Alphabet(decimal_second_part2)}`;
    }
    
    // Пример вызова функции
    //window.calculateElGamal = CalculateFeistel;

});