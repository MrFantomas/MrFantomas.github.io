//operation functions
function hexToBinary(hexNum) {
    const hexToBinDict = {
        '0': '0000', '1': '0001', '2': '0010', '3': '0011',
        '4': '0100', '5': '0101', '6': '0110', '7': '0111',
        '8': '1000', '9': '1001', 'A': '1010', 'B': '1011',
        'C': '1100', 'D': '1101', 'E': '1110', 'F': '1111'
    };

    let binaryNum = "";
    for (let digit of hexNum) {
        binaryNum += hexToBinDict[digit];
    }

    return binaryNum;
}

function binaryToHex(binNum) {
    const binToHexDict = {
        '0000': '0', '0001': '1', '0010': '2', '0011': '3',
        '0100': '4', '0101': '5', '0110': '6', '0111': '7',
        '1000': '8', '1001': '9', '1010': 'A', '1011': 'B',
        '1100': 'C', '1101': 'D', '1110': 'E', '1111': 'F'
    };

    let hexNum = "";
    for (let i = 0; i < binNum.length; i += 4) {
        let digit = binNum.substring(i, i + 4);
        hexNum += binToHexDict[digit];
    }

    return hexNum;
}


////////////////////// DES //////////////////////////
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

function extensionKey(R0) {
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

function R0XorKey(R0, key) {
    let paddedR0 = R0.padStart(24, '0');
    let paddedKey = key.padStart(24, '0');
    let resultR0Key = (parseInt(paddedR0, 2) ^ parseInt(paddedKey, 2)).toString(2);
    return resultR0Key.padStart(24, '0');
}

function SBlocks(resultR0Key) {
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

function PBoxFunction(S) {
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

function IPInverse(L1, R1) {
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

function DES(A1, A2, A3, A4, B1, B2, B3) {
    // Function to convert letters to binary sequence
    function Russian_Alphabet(letter) {
        // Implement your own conversion logic here
    }

    // Conversion of letters to binary sequences
    let bin_A1 = (Russian_Alphabet(A1.toUpperCase())).toString(2).padStart(8, '0');
    let bin_A2 = (Russian_Alphabet(A2.toUpperCase())).toString(2).padStart(8, '0');
    let bin_A3 = (Russian_Alphabet(A3.toUpperCase())).toString(2).padStart(8, '0');
    let bin_A4 = (Russian_Alphabet(A4.toUpperCase())).toString(2).padStart(8, '0');

    console.log("Binary representation of input letters:");
    console.log(`${A1} = |${bin_A1}|`);
    console.log(`${A2} = |${bin_A2}|`);
    console.log(`${A3} = |${bin_A3}|`);
    console.log(`${A4} = |${bin_A4}|\n`);
    console.log("Binary representation of key letters:");

    let bin_B1 = (Russian_Alphabet(B1.toUpperCase())).toString(2).padStart(8, '0');
    let bin_B2 = (Russian_Alphabet(B2.toUpperCase())).toString(2).padStart(8, '0');
    let bin_B3 = (Russian_Alphabet(B3.toUpperCase())).toString(2).padStart(8, '0');

    console.log(`${B1} = |${bin_B1}|`);
    console.log(`${B2} = |${bin_B2}|`);
    console.log(`${B3} = |${bin_B3}|\n`);

    // Initial permutation
    console.log(`Initial permutation IP of word ${A1.toUpperCase()}${A2.toUpperCase()}${A3.toUpperCase()}${A4.toUpperCase()}:`);
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

    let S_blocks_result = S_Blocks(result_R0_key.padStart(24, '0'));
    console.log(`Results of S-blocks: S1 = ${S_blocks_result[0]} = ${parseInt(S_blocks_result[0], 2).toString(2).padStart(4, '0')}`);
    console.log(`                     S2 = ${S_blocks_result[1]} = ${parseInt(S_blocks_result[1], 2).toString(2).padStart(4, '0')}`);
    console.log(`                     S3 = ${S_blocks_result[2]} = ${parseInt(S_blocks_result[2], 2).toString(2).padStart(4, '0')}`);
    console.log(`                     S4 = ${S_blocks_result[3]} = ${parseInt(S_blocks_result[3], 2).toString(2).padStart(4, '0')}`);
    let S = parseInt(S_blocks_result[0], 2).toString(2).padStart(4, '0') + parseInt(S_blocks_result[1], 2).toString(2).padStart(4, '0') +
            parseInt(S_blocks_result[2], 2).toString(2).padStart(4, '0') + parseInt(S_blocks_result[3], 2).toString(2).padStart(4, '0');
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
    console.log(`${resA1} = ${parseInt(resA1, 2).toString(16).toUpperCase()}`);
    console.log(`${resA2} = ${parseInt(resA2, 2).toString(16).toUpperCase()}`);
    console.log(`${resA3} = ${parseInt(resA3, 2).toString(16).toUpperCase()}`);
    console.log(`${resA4} = ${parseInt(resA4, 2).toString(16).toUpperCase()}`);

    resA1 = parseInt(resA1, 2).toString(16).toUpperCase();
    resA2 = parseInt(resA2, 2).toString(16).toUpperCase();
    resA3 = parseInt(resA3, 2).toString(16).toUpperCase();
    resA4 = parseInt(resA4, 2).toString(16).toUpperCase();

    console.log(`\nRESULT: ${resA1.padStart(2, '0')}${resA2.padStart(2, '0')}${resA3.padStart(2, '0')}${resA4.padStart(2, '0')}`);
}








function ElGamal() {
    console.log("Алгоритм Эль-Гамаля:");
    let p = parseInt(prompt("Введите p: "));
    let g = parseInt(prompt("Введите g: "));
    let k = parseInt(prompt("Введите k: "));
    let x = parseInt(prompt("Введите x: "));
    let M = parseInt(prompt("Введите M: "));

    let y = BigInt(Math.pow(g, x) % p);
    console.log(`\ny = (g^x) mod p = (${g}^${x}) mod ${p} = ${y}`);
    let b = M * BigInt(Math.pow(y, k) % p);
    console.log(`b = M * ((y^k) mod p) = ${M} * ((${y}^${k}) mod ${p}) = ${b}`);
    console.log("\nОТВЕТ:", b);

    return b;
}


////////////////// ZACHET EPTA /////////////////
while (true) {
    console.log("\n1.1 Алгоритм Эль-Гамаля");
    console.log("1.2 Алгоритм Диффи-Хеллмана для 2-х отправителей (Даны n, q, x, y)");
    console.log("1.3 Алгоритм Диффи-Хеллмана для 3-х отправителей (Даны a, b, c, g, n)");
    console.log("1.4 RSA");
    console.log("2 - Сеть Фейстеля");
    console.log("3.1 - MixColumn");
    console.log("3.2 - InvMixColumn");
    console.log("4 - AES 1 раунд");
    console.log("5 - DES");
    console.log("exit для выхода\n");

    let task_number = prompt("Введите номер задачи для запуска:\n");
    if (task_number.toLowerCase() === 'exit') {
        break;
    }

    if (task_number === '1.1') {
        ElGamal();
    } else if (task_number === '1.2') {
        Diffie_Hellman_2();
    } else if (task_number === '1.3') {
        Diffie_Hellman_3();
    } else if (task_number === '1.4') {
        RSA();
    } else if (task_number === '2') {
        console.log("Сеть Фейстеля \n");
        Set_Feistel();
    } else if (task_number === '3.1') {
        console.log("MixColumn\n");
        console.log("Введите числа первого вектора из левой матрицы (столбец)");
        let Column1 = prompt("Введите 1-е число в шестнадцатиричной системе: ");
        let Column2 = prompt("Введите 2-е число в шестнадцатиричной системе: ");
        let Column3 = prompt("Введите 3-е число в шестнадцатиричной системе: ");
        let Column4 = prompt("Введите 4-е число в шестнадцатиричной системе: ");
        
        console.log("Введите числа второго вектора из правой матрицы (строка)");
        let String1 = prompt("Введите 1-е число в шестнадцатиричной системе: ");
        let String2 = prompt("Введите 2-е число в шестнадцатиричной системе: ");
        let String3 = prompt("Введите 3-е число в шестнадцатиричной системе: ");
        let String4 = prompt("Введите 4-е число в шестнадцатиричной системе: ");
        
        InvMixColumn(Column1, Column2, Column3, Column4, String1, String2, String3, String4);
    } else if (task_number === '3.2') {
        console.log("InvMixColumn\n");
        console.log("Введите числа первого вектора из левой матрицы (столбец)");
        let Column1 = prompt("Введите 1-е число в шестнадцатиричной системе: ");
        let Column2 = prompt("Введите 2-е число в шестнадцатиричной системе: ");
        let Column3 = prompt("Введите 3-е число в шестнадцатиричной системе: ");
        let Column4 = prompt("Введите 4-е число в шестнадцатиричной системе: ");

        console.log("Введите числа второго вектора из правой матрицы (строка)");
        let String1 = prompt("Введите 1-е число в шестнадцатиричной системе: ");
        let String2 = prompt("Введите 2-е число в шестнадцатиричной системе: ");
        let String3 = prompt("Введите 3-е число в шестнадцатиричной системе: ");
        let String4 = prompt("Введите 4-е число в шестнадцатиричной системе: ");
        
        InvMixColumn(Column1, Column2, Column3, Column4, String1, String2, String3, String4);
    } else if (task_number === '4') {
        console.log("AES 1 раунд:");
        console.log("Введите по буквам слово, которое необходимо зашифровать:");
        let A1 = prompt("Введите первую букву слова:");
        let A2 = prompt("Введите вторую букву слова:");
        let A3 = prompt("Введите третью букву слова:");
        let A4 = prompt("Введите четвёртую букву слова:");

        console.log("Введите по буквам ключ:");
        let B1 = prompt("Введите первую букву ключа:");
        let B2 = prompt("Введите вторую букву ключа:");
        let B3 = prompt("Введите третью букву ключа:");
        let B4 = prompt("Введите четвёртую букву ключа:");
        console.log("\n");

        AES_First_Round(A1, A2, A3, A4, B1, B2, B3, B4);
    } else if (task_number === '5') {
        console.log("DES");
        console.log("Введите по буквам слово, которое небходимо зашифровать");
        let A1 = prompt("Введите первую букву слова:");
        let A2 = prompt("Введите вторую букву слова:");
        let A3 = prompt("Введите третью букву слова:");
        let A4 = prompt("Введите четвёртую букву слова:");
        console.log("Введите по буквам ключ");
        let B1 = prompt("Введите первую букву ключа:");
        let B2 = prompt("Введите вторую букву ключа:");
        let B3 = prompt("Введите третью букву ключа:");
        console.log("\n");
        DES(A1, A2, A3, A4, B1, B2, B3);
    } else {
        console.log(`Задача с номером ${task_number} не найдена`);
    }
}
