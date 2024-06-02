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
            document.getElementById('resultField_pole').style.display = 'flex';
            window.calculateElGamal = calculateElGamal;
        } else {
            document.getElementById('inputFields').style.display = 'none';
            document.getElementById('resultField_pole').style.display = 'none';
        }
        if (method === 'Сеть Фейстеля') {
            document.getElementById('inputFeistel').style.display = 'flex';
            document.getElementById('resultFeistel_pole').style.display = 'flex';
            window.calculateFeistel = calculateFeistel;
        } else {
            document.getElementById('inputFeistel').style.display = 'none';
            document.getElementById('resultFeistel_pole').style.display = 'none';
        }
        if (method === 'DES') {
            document.getElementById('inputDES').style.display = 'flex';
            document.getElementById('resultDES_pole').style.display = 'flex';
            window.calculateDES = calculateDES;
        } else {
            document.getElementById('inputDES').style.display = 'none';
            document.getElementById('resultDES_pole').style.display = 'none';
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
    







    /////////////////////// DES //////////////////////
    function IP(bin_A1, bin_A2, bin_A3, bin_A4) {
        let mas_ip = [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ];
    
        let mas_word = String(bin_A1) + String(bin_A2) + String(bin_A3) + String(bin_A4);
        
        mas_ip[0][0] = mas_word[25];
        mas_ip[0][1] = mas_word[17];
        mas_ip[0][2] = mas_word[9];
        mas_ip[0][3] = mas_word[1];
        mas_ip[0][4] = mas_word[27];
        mas_ip[0][5] = mas_word[19];
        mas_ip[0][6] = mas_word[11];
        mas_ip[0][7] = mas_word[3];
        
        mas_ip[1][0] = mas_word[29];
        mas_ip[1][1] = mas_word[21];
        mas_ip[1][2] = mas_word[13];
        mas_ip[1][3] = mas_word[5];
        mas_ip[1][4] = mas_word[31];
        mas_ip[1][5] = mas_word[23];
        mas_ip[1][6] = mas_word[15];
        mas_ip[1][7] = mas_word[7];
        
        mas_ip[2][0] = mas_word[24];
        mas_ip[2][1] = mas_word[16];
        mas_ip[2][2] = mas_word[8];
        mas_ip[2][3] = mas_word[0];
        mas_ip[2][4] = mas_word[26];
        mas_ip[2][5] = mas_word[18];
        mas_ip[2][6] = mas_word[10];
        mas_ip[2][7] = mas_word[2];
        
        mas_ip[3][0] = mas_word[28];
        mas_ip[3][1] = mas_word[20];
        mas_ip[3][2] = mas_word[12];
        mas_ip[3][3] = mas_word[4];
        mas_ip[3][4] = mas_word[30];
        mas_ip[3][5] = mas_word[22];
        mas_ip[3][6] = mas_word[14];
        mas_ip[3][7] = mas_word[6];
       
        for (let i = 0; i < 4; i++) {
            let row = "|";
            for (let j = 0; j < 8; j++) {
                row += mas_ip[i][j];
                if (j === 7) {
                    row += "|\n";
                }
            }
            console.log(row);
        }
        
        return mas_ip;
    }
    
    function extension_key(R0) {
        let ExR0 = '';
        ExR0 += R0[15];
        ExR0 += R0[0];
        ExR0 += R0[1];
        ExR0 += R0[2];
        ExR0 += R0[3];
        ExR0 += R0[4];
        
        ExR0 += R0[3];
        ExR0 += R0[4];
        ExR0 += R0[5];
        ExR0 += R0[6];
        ExR0 += R0[7];
        ExR0 += R0[8];
        
        ExR0 += R0[7];
        ExR0 += R0[8];
        ExR0 += R0[9];
        ExR0 += R0[10];
        ExR0 += R0[11];
        ExR0 += R0[12];
        
        ExR0 += R0[11];
        ExR0 += R0[12];
        ExR0 += R0[13];
        ExR0 += R0[14];
        ExR0 += R0[15];
        ExR0 += R0[0];
        
        return ExR0;
    }
    
    function R0_xor_key(R0, key) {
        let paddedR0 = R0.padStart(24, '0');
        let paddedKey = key.padStart(24, '0');
        let resultR0Key = (parseInt(paddedR0, 2) ^ parseInt(paddedKey, 2)).toString(2);
        return resultR0Key.padStart(24, '0');
    }
    
    function S_Blocks(resultR0Key) {
        const S1_BOX = [
            [14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 7],
            [0, 15, 7, 4, 14, 2, 13, 1, 10, 6, 12, 11, 9, 5, 3, 8],
            [4, 1, 14, 8, 13, 6, 2, 11, 15, 12, 9, 7, 3, 10, 5, 0],
            [15, 12, 8, 2, 4, 9, 1, 7, 5, 11, 3, 14, 10, 0, 6, 13]
        ];
    
        const S2_BOX = [
            [15, 1, 8, 14, 6, 11, 3, 4, 9, 7, 2, 13, 12, 0, 5, 10],
            [3, 13, 4, 7, 15, 2, 8, 14, 12, 0, 1, 10, 6, 9, 11, 5],
            [0, 14, 7, 11, 10, 4, 13, 1, 5, 8, 12, 6, 9, 3, 2, 15],
            [13, 8, 10, 1, 3, 15, 4, 2, 11, 6, 7, 12, 0, 5, 14, 9]
        ];
    
        const S3_BOX = [
            [10, 0, 9, 14, 6, 3, 15, 5, 1, 13, 12, 7, 11, 4, 2, 8],
            [13, 7, 0, 9, 3, 4, 6, 10, 2, 8, 5, 14, 12, 11, 15, 1],
            [13, 6, 4, 9, 8, 15, 3, 0, 11, 1, 2, 12, 5, 10, 14, 7],
            [1, 10, 13, 0, 6, 9, 8, 7, 4, 15, 14, 3, 11, 5, 2, 12]
        ];
    
        const S4_BOX = [
            [7, 13, 14, 3, 0, 6, 9, 10, 1, 2, 8, 5, 11, 12, 4, 15],
            [13, 8, 11, 5, 6, 15, 0, 3, 4, 7, 2, 12, 1, 10, 14, 9],
            [10, 6, 9, 0, 12, 11, 7, 13, 15, 1, 3, 14, 5, 2, 8, 4],
            [3, 15, 0, 6, 10, 1, 13, 8, 9, 4, 5, 11, 12, 7, 2, 14]
        ];
    
        const S1_str = parseInt(resultR0Key[0] + resultR0Key[5], 2);
        const S1_col = parseInt(resultR0Key.slice(1, 5), 2);
        console.log(`${resultR0Key.slice(0, 6)} -> ${resultR0Key[0] + resultR0Key[5]} ${resultR0Key.slice(1, 5)} -> ${S1_str} строка ${S1_col} столбец блока S1`);
        const S1 = S1_BOX[S1_str][S1_col];
    
        const S2_str = parseInt(resultR0Key[6] + resultR0Key[11], 2);
        const S2_col = parseInt(resultR0Key.slice(7, 11), 2);
        console.log(`${resultR0Key.slice(6, 12)} -> ${resultR0Key[6] + resultR0Key[11]} ${resultR0Key.slice(7, 11)} -> ${S2_str} строка ${S2_col} столбец блока S2`);
        const S2 = S2_BOX[S2_str][S2_col];
    
        const S3_str = parseInt(resultR0Key[12] + resultR0Key[17], 2);
        const S3_col = parseInt(resultR0Key.slice(13, 17), 2);
        console.log(`${resultR0Key.slice(12, 18)} -> ${resultR0Key[12] + resultR0Key[17]} ${resultR0Key.slice(13, 17)} -> ${S3_str} строка ${S3_col} столбец блока S3`);
        const S3 = S3_BOX[S3_str][S3_col];
    
        const S4_str = parseInt(resultR0Key[18] + resultR0Key[23], 2);
        const S4_col = parseInt(resultR0Key.slice(19, 23), 2);
        console.log(`${resultR0Key.slice(18, 24)} -> ${resultR0Key[18] + resultR0Key[23]} ${resultR0Key.slice(19, 23)} -> ${S4_str} строка ${S4_col} столбец блока S4`);
        const S4 = S4_BOX[S4_str][S4_col];
    
        return [S1, S2, S3, S4];
    }
    
    function P_Box_function(S) {
        let P_Box = '';
        P_Box += S[15];
        P_Box += S[6];   
        P_Box += S[11];
        P_Box += S[12];
        
        P_Box += S[0];
        P_Box += S[4];
        P_Box += S[14];
        P_Box += S[9];
        
        P_Box += S[1];
        P_Box += S[7];
        P_Box += S[2];
        P_Box += S[8];
    
        P_Box += S[13];
        P_Box += S[5];
        P_Box += S[3];
        P_Box += S[10];
    
        return P_Box;
    }
    
    function IP_Inverse(L1, R1) {
        let mas_ip_inv = [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ];
        let mas_word = L1.toString() + R1.toString();
    
        mas_ip_inv[0][0] = mas_word[19];
        mas_ip_inv[0][1] = mas_word[3];
        mas_ip_inv[0][2] = mas_word[23];
        mas_ip_inv[0][3] = mas_word[7];
        mas_ip_inv[0][4] = mas_word[27];
        mas_ip_inv[0][5] = mas_word[11];
        mas_ip_inv[0][6] = mas_word[31];
        mas_ip_inv[0][7] = mas_word[15];
    
        mas_ip_inv[1][0] = mas_word[18];
        mas_ip_inv[1][1] = mas_word[2];
        mas_ip_inv[1][2] = mas_word[22];
        mas_ip_inv[1][3] = mas_word[6];
        mas_ip_inv[1][4] = mas_word[26];
        mas_ip_inv[1][5] = mas_word[10];
        mas_ip_inv[1][6] = mas_word[30];
        mas_ip_inv[1][7] = mas_word[14];
    
        mas_ip_inv[2][0] = mas_word[17];
        mas_ip_inv[2][1] = mas_word[1];
        mas_ip_inv[2][2] = mas_word[21];
        mas_ip_inv[2][3] = mas_word[5];
        mas_ip_inv[2][4] = mas_word[25];
        mas_ip_inv[2][5] = mas_word[9];
        mas_ip_inv[2][6] = mas_word[29];
        mas_ip_inv[2][7] = mas_word[13];
    
        mas_ip_inv[3][0] = mas_word[16];
        mas_ip_inv[3][1] = mas_word[0];
        mas_ip_inv[3][2] = mas_word[20];
        mas_ip_inv[3][3] = mas_word[4];
        mas_ip_inv[3][4] = mas_word[24];
        mas_ip_inv[3][5] = mas_word[8];
        mas_ip_inv[3][6] = mas_word[28];
        mas_ip_inv[3][7] = mas_word[12];
    
        for (let i = 0; i < 4; i++) {
            let row = '|';
            for (let j = 0; j < 8; j++) {
                row += mas_ip_inv[i][j];
                if (j === 7) {
                    row += '|';
                }
            }
            console.log(row);
        }
    
        return mas_ip_inv;
    }
    
    function calculateDES() {

        function Russian_AlphabetDES(letter) {
            const Russian_Alphabet_dict = {
                'А': '00', 'Б': '01', 'В': '02', 'Г': '03', 'Д': '04', 'Е': '05', 'Ё': '06',
                'Ж': '07', 'З': '08', 'И': '09', 'Й': '10', 'К': '11', 'Л': '12', 'М': '13',
                'Н': '14', 'О': '15', 'П': '16', 'Р': '17', 'С': '18', 'Т': '19', 'У': '20',
                'Ф': '21', 'Х': '22', 'Ц': '23', 'Ч': '24', 'Ш': '25', 'Щ': '26', 'Ъ': '27',
                'Ы': '28', 'Ь': '29', 'Э': '30', 'Ю': '31', 'Я': '32'
            };

            let integer_letter = "";
            for (let digit of letter) {
                integer_letter += Russian_Alphabet_dict[digit];
            }

            return integer_letter;
        }


        /// ВЕСТИ СЮДА ЗНАЧЕНИЯ
        const A1 = document.getElementById('A1').value;
        const A2 = document.getElementById('A2').value;
        const A3 = document.getElementById('A3').value;
        const A4 = document.getElementById('A4').value;
        const B1 = document.getElementById('B1').value;
        const B2 = document.getElementById('B2').value;
        const B3 = document.getElementById('B3').value;

    
        // Conversion of letters to binary sequences
        let bin_A1 = (Russian_AlphabetDES(A1)).toString(2).padStart(8, '0');
        let bin_A2 = (Russian_AlphabetDES(A2)).toString(2).padStart(8, '0');
        let bin_A3 = (Russian_AlphabetDES(A3)).toString(2).padStart(8, '0');
        let bin_A4 = (Russian_AlphabetDES(A4)).toString(2).padStart(8, '0');

        bin_A1 = `${parseInt(bin_A1, 10).toString(2).padStart(8, '0')}`
        bin_A2 = `${parseInt(bin_A2, 10).toString(2).padStart(8, '0')}`
        bin_A3 = `${parseInt(bin_A3, 10).toString(2).padStart(8, '0')}`
        bin_A4 = `${parseInt(bin_A4, 10).toString(2).padStart(8, '0')}`
    
        console.log("Binary representation of input letters:");
        console.log(`${A1} = |${bin_A1}|`);
        console.log(`${A2} = |${bin_A2}|`);
        console.log(`${A3} = |${bin_A3}|`);
        console.log(`${A4} = |${bin_A4}|\n`);
        console.log("Binary representation of key letters:");
    
        let bin_B1 = (Russian_AlphabetDES(B1)).toString(2).padStart(8, '0');
        let bin_B2 = (Russian_AlphabetDES(B2)).toString(2).padStart(8, '0');
        let bin_B3 = (Russian_AlphabetDES(B3)).toString(2).padStart(8, '0');

        bin_B1 = `${parseInt(bin_B1, 10).toString(2).padStart(8, '0')}`
        bin_B2 = `${parseInt(bin_B2, 10).toString(2).padStart(8, '0')}`
        bin_B3 = `${parseInt(bin_B3, 10).toString(2).padStart(8, '0')}`
    
        console.log(`${B1} = |${bin_B1}|`);
        console.log(`${B2} = |${bin_B2}|`);
        console.log(`${B3} = |${bin_B3}|\n`);
    
        // Initial permutation
        console.log(`Initial permutation IP of word ${A1}${A2}${A3}${A4}:`);
        let mas_ip = IP(bin_A1, bin_A2, bin_A3, bin_A4);
        
        // Get L0 and R0
        let L0 = '';
        let R0 = '';
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 8; j++) {
                if (i < 2) {
                    L0 += mas_ip[i][j];
                } else {
                    R0 += mas_ip[i][j];
                }
            }
        }
        console.log(" ");
        console.log(`L0 = ${L0}\nR0 = ${R0}`);
    
        // Expand R0
        let ExR0 = extension_key(R0);
        console.log("\nExpansion of R0:");
        console.log(`${R0} -> ${ExR0}`);
        
        // Key
        let key = bin_B1.padStart(8, '0') + bin_B2.padStart(8, '0') + bin_B3.padStart(8, '0');
        // Expanded R0 xor Key
        console.log("\nExpanded R0 xor Key:");
        console.log(` ${ExR0}`);
        console.log(` ${key}`);
        console.log("───────");
        let result_R0_key = R0_xor_key(ExR0.padStart(24, '0'), key.padStart(24, '0'));
        console.log(` ${result_R0_key}`);
    
        // S-Blocks
        console.log("\nS-Blocks:");
        console.log("# Split the result of XOR into 4 parts of 6 bits each");
        console.log("# The first and last bits point to the column of the corresponding S-block");
        console.log("# Bits from the second to the fourth indicate the row of the S-block");
    


        // let S_blocks_result = S_Blocks(result_R0_key.padStart(24, '0'));
        // console.log(`Results of S-blocks: S1 = ${S_blocks_result[0]} = ${parseInt(S_blocks_result[0], 2).toString(2).padStart(4, '0')}`);
        // console.log(`                     S2 = ${S_blocks_result[1]} = ${parseInt(S_blocks_result[1], 2).toString(2).padStart(4, '0')}`);
        // console.log(`                     S3 = ${S_blocks_result[2]} = ${parseInt(S_blocks_result[2], 2).toString(2).padStart(4, '0')}`);
        // console.log(`                     S4 = ${S_blocks_result[3]} = ${parseInt(S_blocks_result[3], 2).toString(2).padStart(4, '0')}`);
        // let S = parseInt(S_blocks_result[0], 2).toString(2).padStart(4, '0') + parseInt(S_blocks_result[1], 2).toString(2).padStart(4, '0') +
        //         parseInt(S_blocks_result[2], 2).toString(2).padStart(4, '0') + parseInt(S_blocks_result[3], 2).toString(2).padStart(4, '0');
        // console.log(`S = S1S2S3S4 = ${S}`);
    

        // Assuming S_Blocks is a function that takes a 24-bit string and returns an array [S1, S2, S3, S4]
         // replace with actual value
        let zfilledKey = result_R0_key.padStart(24, '0');

        let [S1, S2, S3, S4] = S_Blocks(zfilledKey);

        console.log(`Результаты S-блоков: S1 = ${S1} = ${parseInt(S1).toString(2).padStart(4, '0')}`);
        console.log(`                     S2 = ${S2} = ${parseInt(S2).toString(2).padStart(4, '0')}`);
        console.log(`                     S3 = ${S3} = ${parseInt(S3).toString(2).padStart(4, '0')}`);
        console.log(`                     S4 = ${S4} = ${parseInt(S4).toString(2).padStart(4, '0')}`);

        let S = parseInt(S1).toString(2).padStart(4, '0') + 
                parseInt(S2).toString(2).padStart(4, '0') + 
                parseInt(S3).toString(2).padStart(4, '0') + 
                parseInt(S4).toString(2).padStart(4, '0');

        console.log(`S = S1S2S3S4 = ${S}`);




        // P-Box
        console.log("\nP-Box:");
        console.log("# Permute the characters S according to the P-box");
    
        let F = P_Box_function(S);
        console.log(`${S} -> ${F}`);
    
        // Find R1
        console.log("\nFinding R1:");
        console.log("# XOR the result of P-box with L0");
        console.log(` ${F}`);
        console.log(` ${L0}`);
        console.log("───────");
        let P_b_xor_L0 = (parseInt(F, 2) ^ parseInt(L0, 2)).toString(2).padStart(16, '0');
        console.log(` ${P_b_xor_L0} = R1`);
        let L1 = R0;
        let R1 = P_b_xor_L0;
    
        // Construct the matrix from L1 and R1
        console.log("\nMatrix L1R1 (L1 = R0):");
        console.log(`L1 = |${L1.slice(0, 8)}|`);
        console.log(`     |${L1.slice(8)}|`);
        console.log(`R1 = |${R1.slice(0, 8)}|`);
        console.log(`     |${R1.slice(8)}|`);
    
        // Final permutation
        console.log("\nFinal permutation IP^(-1) of the matrix L1R1:");
        let mas_ip_inv = IP_Inverse(L1, R1);
    
        let resA1 = '';
        let resA2 = '';
        let resA3 = '';
        let resA4 = '';
    
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 8; j++) {
                if (i === 0) {
                    resA1 += mas_ip_inv[i][j];
                } else if (i === 1) {
                    resA2 += mas_ip_inv[i][j];
                } else if (i === 2) {
                    resA3 += mas_ip_inv[i][j];
                } else {
                    resA4 += mas_ip_inv[i][j];
                }
            }
        }
        console.log(`${resA1} = ${parseInt(resA1, 2).toString(16)}`);
        console.log(`${resA2} = ${parseInt(resA2, 2).toString(16)}`);
        console.log(`${resA3} = ${parseInt(resA3, 2).toString(16)}`);
        console.log(`${resA4} = ${parseInt(resA4, 2).toString(16)}`);
    
        resA1 = parseInt(resA1, 2).toString(16);
        resA2 = parseInt(resA2, 2).toString(16);
        resA3 = parseInt(resA3, 2).toString(16);
        resA4 = parseInt(resA4, 2).toString(16);
    
        document.getElementById('resultDES').value =`\nRESULT: ${resA1.padStart(2, '0')}${resA2.padStart(2, '0')}${resA3.padStart(2, '0')}${resA4.padStart(2, '0')}`

    }


});