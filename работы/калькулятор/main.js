function calculateIsoscelesTriangle() {
    var sideA = parseFloat(document.getElementById('sideA').value);
    var heightB = parseFloat(document.getElementById('heightB').value);
    
    // Вычисление площади
    var area = (sideA * heightB) / 2;
    document.getElementById('result').innerHTML = '<strong>Площадь треугольника:</strong> ' + area.toFixed(2);
  
    // Вычисление углов основания
    var baseAngle = Math.acos((2 * Math.pow(heightB, 2) - Math.pow(sideA, 2)) / (2 * Math.pow(heightB, 2))) * (180 / Math.PI);
    document.getElementById('result').innerHTML += '; <strong>Угол основания:</strong> ' + baseAngle.toFixed(2) + '°';
  }s