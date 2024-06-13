function sort() {
    var number = parseInt(document.getElementById("number1").value);
    var Chet = 0;
    var Nechet = [];

    // Проверяем, что число является четырехзначным
    if (number >= 1000 && number <= 9999) {
        // Проверяем каждую цифру в числе
        for (var i = 0; i < 4; i++) {
            const digit = Math.floor(number / 10 ** i) % 10;
            if (digit % 2 === 0) {
                Chet++;
            Nechet.push(digit);
            }
        }

        // Выводим результат
        document.getElementById("result").textContent = `Из числа ${number}, ${Chet} четных цифр: ${Nechet.join(', ')}`;
    } else {
        // Выводим сообщение об ошибке
        document.getElementById("result").textContent = "Введите четырехзначное число!";
    }
}