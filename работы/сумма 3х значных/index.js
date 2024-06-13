function sort() {
    {
        var number = document.getElementById('number1').value;
        if(number.length === 3) {
            var sum = 0;
            for(var i = 0; i < number.length; i++) {
                sum += Number(number[i]);
            }
            document.getElementById('result').textContent = 'Сумма цифр: ' + sum;
        } else {
            document.getElementById('result').textContent = 'Пожалуйста, введите трехзначное число.';
        }
    }
}
function sort() {
    var number = 123;
    var sum = 0;
    var digits = number.toString(); 

    for(var i = 0; i < digits.length; i++) {
        sum += Number(digits[i]);
    }

    console.log("Сумма цифр числа: " + sum);
}

sort();
//Переменная i уках 0 и увеличивается на 1 после каждого перехода цикла.
// Цикл продолжается до тех пор, пока i меньше длины строки number.
// Внутри цикла происходит сложение. 
//Оператор += означает, что к текущему значению переменной sum добавляется значение, которое следует за ним.