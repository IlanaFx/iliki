function sort() {
    {
        var number = document.getElementById('number1').value;
        if(number.length === 3) {
            var sum = 0;
            for(var i = 0; i < number.length; i++) {
                sum -= Number(number[i]);
            }
            document.getElementById('result').textContent = 'разница цифр: ' + sum;
        } else {
            document.getElementById('result').textContent = 'Пожалуйста, введите трехзначное число.';
        }
    }
}
function sort() {
    var number = function sort() {
        var number = 543;
        var sum = 0;
        var digits = number.toString(); 
    
        for(var i = 0; i < digits.length; i++) {
            sum -= Number(digits[i]);
        }
    
        console.log("разница  цифр числа: " + sum);
    }
    }

sort();