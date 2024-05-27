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
        } else {
            document.getElementById('inputFields').style.display = 'none';
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

    window.calculateElGamal = calculateElGamal;
});
