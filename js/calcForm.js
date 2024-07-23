document.getElementById('CalculatorForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращает стандартное поведение формы

    var form = event.target;
    var formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(function(response) {
        if (response.ok) {
            window.location.href = 'https://www.youtube.com/'; // Замените на ваш URL
        } else {
            console.log('Ошибка отправки формы');
        }
    }).catch(function(error) {
        console.log('Ошибка:', error);
    });
});