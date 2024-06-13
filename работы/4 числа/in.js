function sort() {
    const number1 = parseInt(document.getElementById('number1').value);
    const number2 = parseInt(document.getElementById('number2').value);
    const number3 = parseInt(document.getElementById('number3').value);
    const number4 = parseInt(document.getElementById('number4').value);

    const numbers = [number1, number2, number3, number4];
    var Chet = '';
    var Nechet = '';
    var chet = 0;//кол во четных чисел
 var nechet = 0; //кол во нечетных чисел

    for (const number of numbers) {
        if (number % 2 === 0) {
            Chet += number + '<br>';
            chet++;
        } else {
            Nechet += number + '<br>';
            nechet++;
        }
    }

    document.getElementById('result').innerHTML = `
        <strong>Четные числа:</strong><br>${Chet}<br>
        <strong>Нечетные числа:</strong><br>${Nechet}<br>
        <strong>Количество четных чисел:</strong> ${chet}<br>
        <strong>Количество нечетных чисел:</strong> ${nechet}
    `;
}