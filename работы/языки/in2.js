function displayLanguage() {
    var lang = document.getElementById('lang').value;
    var languageName;
  
    switch(lang) {
      case 'ru':
        languageName = 'русский';
        break;
      case 'en':
        languageName = 'английский';
        break;
      case 'fr':
        languageName = 'французский';
        break;
      case 'de':
        languageName = 'немецкий';
        break;
      default:
        languageName = 'Язык неизвестен';
    }
  
    document.getElementById('result').textContent = languageName;
  }