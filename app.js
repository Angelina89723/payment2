document.addEventListener('DOMContentLoaded', function() {
    const paymentForm = document.getElementById('paymentForm');
    const notification = document.getElementById('notification');
    const overlay = document.getElementById('overlay');
    const closeNotification = document.getElementById('closeNotification');
    const cardNumber = document.getElementById('cardNumber');
    const expiryDate = document.getElementById('expiryDate');
    const cvv = document.getElementById('cvv');

    // Форматирование номера карты
    cardNumber.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        let formattedValue = '';

        for (let i = 0; i < value.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formattedValue += ' ';
            }
            formattedValue += value[i];
        }

        e.target.value = formattedValue;
    });

    // Форматирование срока действия карты
    expiryDate.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');

        if (value.length >= 2) {
            e.target.value = value.substring(0, 2) + '/' + value.substring(2, 4);
        } else {
            e.target.value = value;
        }
    });

    // Ограничение ввода только цифр для CVV
    cvv.addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/\D/g, '');
    });

    // Обработка отправки формы
    paymentForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Проверка заполнения всех полей
        if (!cardNumber.value || !document.getElementById('cardName').value ||
            !expiryDate.value || !cvv.value) {
            alert('Пожалуйста, заполните все поля формы.');
            return;
        }

        // Показать уведомление
        notification.classList.add('active');
        overlay.classList.add('active');
    });

    // Закрытие уведомления
    closeNotification.addEventListener('click', function() {
        notification.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Закрытие уведомления при клике на оверлей
    overlay.addEventListener('click', function() {
        notification.classList.remove('active');
        overlay.classList.remove('active');
    });
});