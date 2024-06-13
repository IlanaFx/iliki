// Функция для сортировки массива чисел в убывающем порядке
function sortMin() {
    // Получаем числа из полей ввода
    let num1 = Number(document.getElementById('number1').value);
    let num2 = Number(document.getElementById('number2').value);
    let num3 = Number(document.getElementById('number3').value);
    let num4 = Number(document.getElementById('number4').value);
    let num5 = Number(document.getElementById('number5').value);

    // Создаем массив из полученных чисел
    let numbers = [num1, num2, num3, num4, num5];

    // Сортируем массив в убывающем порядке
    for (let i = 0; i < numbers.length; i++) {
        for (let k = 0; k < numbers.length - i - 1; k++) {
            if (numbers[k] < numbers[k + 1]) {
                let temp = numbers[k];
                numbers[k] = numbers[k + 1];
                numbers[k + 1] = temp;
            }
        }
    }

    // Выводим отсортированный массив в консоль
    console.log("Числа по убыванию: " + numbers.join(', '));
}

// Функция для сортировки массива чисел в возрастающем порядке
function sortMax() {
    // Получаем числа из полей ввода
    let num1 = Number(document.getElementById('number1').value);
    let num2 = Number(document.getElementById('number2').value);
    let num3 = Number(document.getElementById('number3').value);
    let num4 = Number(document.getElementById('number4').value);
    let num5 = Number(document.getElementById('number5').value);

    // Создаем массив из полученных чисел
    let numbers = [num1, num2, num3, num4, num5];

    // Сортируем массив в возрастающем порядке
    for (let i = 0; i < numbers.length; i++) {
        for (let k = 0; k < numbers.length - i - 1; k++) {
            if (numbers[k] > numbers[k + 1]) {
                let temp = numbers[k];
                numbers[k] = numbers[k + 1];
                numbers[k + 1] = temp;
            }
        }
    }

    // Выводим отсортированный массив в консоль
    console.log("Числа по возрастанию: " + numbers.join(', '));
}