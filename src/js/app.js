import { preDetectCardType, findLabel, supportFunc } from './base';
import { toggleOnLabel, toggleOffLabel } from './actions';

document.addEventListener('DOMContentLoaded', () => { // помещаем addEventlistener внутрь обратной функции - для успешного прохождения тестов Jest
  const elementInput = document.getElementById('card_number'); // элемент "поле <input>"
  elementInput.value = ''; // очистка поля при загрузке страницы
  const elementBtn = document.getElementById('submitform'); // элемент "поле <a>" - кнопка

  const elementForm = document.getElementById('form');
  elementForm.addEventListener('submit', (event) => {
    event.preventDefault(); // отключаем действие по умолчанию для формы
  });

  let str;
  let key;
  let activatedLabel;
  elementInput.addEventListener('input', () => { //  обработка ввода сообщений в поле <input>
    str = elementInput.value;
    if ((/[^0-9]/gm.test(str))) str = str.replace(/[a-zа-яё]/gi, ''); // удаление всех не цифровых символов
    key = preDetectCardType(Number(str));
    if (activatedLabel !== undefined) toggleOffLabel(activatedLabel);
    if (key !== undefined) {
      toggleOnLabel(findLabel(key));
      activatedLabel = findLabel(key);
    }
  });

  elementInput.addEventListener('keyup', (e) => { //  обработка события нажатия "Enter" в поле <input>
    if (e.key === 'Enter') {
      supportFunc(activatedLabel, str, elementInput);
    }
  });

  elementBtn.addEventListener('click', () => { //  обработка события нажатия кнопки <a>
    elementBtn.classList.add('btn-success');
    supportFunc(activatedLabel, str, elementInput);
  });
});
