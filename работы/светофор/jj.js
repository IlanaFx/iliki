var lights = {
    'red': document.getElementById('red'),
    'yellow': document.getElementById('yellow'),
    'green': document.getElementById('green')
  };
  var timer; // Объявляем переменную timer здесь

  function changeLight(color) {
    for (var key in lights) {
      lights[key].style.backgroundColor = key === color ? color : '#555';
    }
  }

  function sChange(color) {
    changeLight(color);
    switch(color) {
      case 'red':
        timer = setTimeout(function() { sChange('yellow'); }, 30000);
        break;
      case 'yellow':
        timer = setTimeout(function() { sChange('green'); }, 5000);
        break;
      case 'green':
        timer = setTimeout(function() { sChange('red'); }, 20000);
        break;
    }
  }

  function viv() {
    sChange('red');
  }

  viv();