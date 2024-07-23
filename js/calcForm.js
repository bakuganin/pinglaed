document.getElementById('CalculatorForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Предотвращает стандартное поведение формы

  var form = event.target;
  var formData = new FormData(form);

  // Создаем объект, чтобы хранить имена полей и их значения
  var data = {};
  formData.forEach((value, key) => {
    if (!data[key]) {
      data[key] = value;
    } else {
      if (!Array.isArray(data[key])) {
        data[key] = [data[key]];
      }
      data[key].push(value);
    }
  });

  // Выводим имена полей и их значения
  for (const key in data) {
    if (Array.isArray(data[key])) {
      data[key].forEach((val, index) => {
        console.log(`${key}_${index + 1}: ${val}`);
      });
    } else {
      console.log(`${key}: ${data[key]}`);
    }
  };

  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(function (response) {
    document.getElementById("CalculatorForm").style.display = "none"
    if (response.ok) {
      document.getElementById("success-form").style.display = "block"
    } else {
      document.getElementById("error-form").style.display = "block"
      console.log('Ошибка отправки формы');
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }).catch(function (error) {
    document.getElementById("error-form").style.display = "block"
    console.log('Ошибка отправки формы');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    console.log('Ошибка:', error);
  });
});