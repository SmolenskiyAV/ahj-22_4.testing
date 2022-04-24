/* eslint-disable linebreak-style */
/* eslint-disable no-cond-assign */
/* eslint-disable consistent-return */
/* eslint-disable no-alert */
/* eslint-disable no-plusplus */
import { toggleOffLabel, displayResultValidation } from './actions';

export function preDetectCardType(number) { // функция предварительной проверки номера карты
  const re = {
    // electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
    // maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
    // dankort: /^(5019)\d+$/,
    // interpayment: /^(636)\d+$/,
    // unionpay: /^(62|88)\d+$/,
    Visa: /^4[0-9]\d+$/, // полный вариант проверки: /^4[0-9]{12}(?:[0-9]{3})?$/
    Mastercard: /^5[1-5][0-9]\d+$/, // полный вариант проверки: /^5[1-5][0-9]{14}$/
    American_Express: /^3[47][0-9]\d+$/, // полный вариант проверки: /^3[47][0-9]{13}$/
    Diners_Club: /^3(?:0[0-5]|[68][0-9])[0-9]\d+$/, // полный вариант проверки: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/
    Discover: /^6(011|5[0-9]{2})[0-9]\d+$/, // полный вариант проверки: /^6(?:011|5[0-9]{2})[0-9]{12}$/
    JCB: /^(2131|1800|35)\d+$/, // полный вариант проверки: /^(?:2131|1800|35\d{3})\d{11}$/
    Mir: /^(2200|2204)\d+$/,
  };

  for (const key in re) {
    if (re[key].test(number)) {
      return key;
    }
  }
}

export function findLabel(key) { // функция поиска элемента, содержащий лэйбл карты
  if (typeof window !== 'undefined') {
    const cardItems = document.querySelectorAll('.card'); // поиск коллекции "card"
    for (let i = 0; i < cardItems.length; i++) { // перебор всей коллекции "card"
      if (cardItems[i].getAttribute('title') === key) return cardItems[i];
    }
  }
}

export function luhnAlgorithm(value) { // функция проверки номера карты (алгоритм "Луна")
  const value2 = value.replace(/\D/g, '');

  let nCheck = 0;
  let bEven = false;

  for (let n = value2.length - 1; n >= 0; n--) {
    let nDigit = parseInt(value2.charAt(n), 10);

    if (bEven && (nDigit *= 2) > 9) {
      nDigit -= 9;
    }

    nCheck += nDigit;
    bEven = !bEven;
  }

  return (nCheck % 10) === 0;
}

export function supportFunc(activatedLabel, str, elementInput) { // вспомогательная функция
  if (activatedLabel !== undefined) toggleOffLabel(activatedLabel);
  if (luhnAlgorithm(str)) {
    displayResultValidation(true, str);
  } else {
    displayResultValidation(false, str);
  }
  // eslint-disable-next-line no-param-reassign
  elementInput.value = ''; // очистка поля
}
