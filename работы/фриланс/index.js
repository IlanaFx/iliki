function findMin() {
    let num1 = document.getElementById('number1').value;
    let num2 = document.getElementById('number2').value;
    let num3 = document.getElementById('number3').value;
    let num4 = document.getElementById('number4').value;
    let num5 = document.getElementById('number5').value;

    // Преобразуем значения в числа и переводим в массив
    let numbers = [num1, num2, num3, num4, num5].map(Number);
    //numbers это функция сортировки массива

    // Сортируем чисела по убыванию
    numbers.sort(function(a, b) {
        return b - a;
    });
    //функция sort() принимает другую функцию в качестве параметра,
// которая определяет порядок сортировки.

//принимает два элемента массива, a и b, и возвращает результат их вычитания b - a.

//Если результат вычитания положительный, то элемент b будет расположен перед элементом a.

    // Выводим числа в консоль
    console.log("Числа по убыванию: " + numbers.join(', '));
}
function findMax() {
    let num1 = document.getElementById('number1').value;
    let num2 = document.getElementById('number2').value;
    let num3 = document.getElementById('number3').value;
    let num4 = document.getElementById('number4').value;
    let num5 = document.getElementById('number5').value;

    // Преобразуем значения в числа и переводим в массив
    let numbers2 = [num1, num2, num3, num4, num5].map(Number);
    //numbers это функция сортировки массива

    // Сортируем чисела по убыванию
    numbers2.sort(function(a, b) {
        return a - b;
    });
    //функция sort() принимает другую функцию в качестве параметра,
// которая определяет порядок сортировки.

//принимает два элемента массива, a и b, и возвращает результат их вычитания b - a.

//Если результат вычитания положительный, то элемент b будет расположен перед элементом a.

    // Выводим числа в консоль
    console.log("Числа по возврастанию: " + numbers2.join(', '));
}