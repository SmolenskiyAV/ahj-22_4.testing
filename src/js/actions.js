/* eslint-disable linebreak-style */
/* eslint-disable default-case */

export function toggleOnLabel(activatingElement) { // функция "подсветки" лэйбла карты
  const valueAttribute = activatingElement.getAttribute('title');
  switch (valueAttribute) {
    case 'Visa':
      activatingElement.classList.remove('visa_gray');
      activatingElement.classList.add('visa');
      break;

    case 'Mastercard':
      activatingElement.classList.remove('master_gray');
      activatingElement.classList.add('master');
      break;

    case 'American_Express':
      activatingElement.classList.remove('amex_gray');
      activatingElement.classList.add('amex');
      break;

    case 'Discover':
      activatingElement.classList.remove('discover_gray');
      activatingElement.classList.add('discover');
      break;

    case 'JCB':
      activatingElement.classList.remove('jcb_gray');
      activatingElement.classList.add('jcb');
      break;

    case 'Diners_Club':
      activatingElement.classList.remove('diners_club_gray');
      activatingElement.classList.add('diners_club');
      break;

    case 'Mir':
      activatingElement.classList.remove('mir_gray');
      activatingElement.classList.add('mir');
      break;
  }
}

export function toggleOffLabel(deactivatingElement) { // функция "приглушения" лэйбла карты
  const valueAttribute = deactivatingElement.getAttribute('title');
  switch (valueAttribute) {
    case 'Visa':
      deactivatingElement.classList.remove('visa');
      deactivatingElement.classList.add('visa_gray');
      break;

    case 'Mastercard':
      deactivatingElement.classList.remove('master');
      deactivatingElement.classList.add('master_gray');
      break;

    case 'American_Express':
      deactivatingElement.classList.remove('amex');
      deactivatingElement.classList.add('amex_gray');
      break;

    case 'Discover':
      deactivatingElement.classList.remove('discover');
      deactivatingElement.classList.add('discover_gray');
      break;

    case 'JCB':
      deactivatingElement.classList.remove('jcb');
      deactivatingElement.classList.add('jcb_gray');
      break;

    case 'Diners_Club':
      deactivatingElement.classList.remove('diners_club');
      deactivatingElement.classList.add('diners_club_gray');
      break;

    case 'Mir':
      deactivatingElement.classList.remove('mir');
      deactivatingElement.classList.add('mir_gray');
      break;
  }
}

export function displayResultValidation(value, cardNumber) { // отображение проверенного номера
  const resultValidation = document.getElementById('result_validation');
  if (resultValidation.classList.contains('hided')) resultValidation.classList.remove('hided');
  if (resultValidation.classList.contains('validNumber')) resultValidation.classList.remove('validNumber');
  if (resultValidation.classList.contains('invalidNumber')) resultValidation.classList.remove('invalidNumber');
  resultValidation.querySelector('p').innerHTML = cardNumber;
  if (value) {
    resultValidation.classList.add('validNumber');
    resultValidation.querySelector('div').innerHTML = 'card-number is OK!';
  } else {
    resultValidation.classList.add('invalidNumber');
    resultValidation.querySelector('div').innerHTML = 'INVALID card-number!!!';
  }
}
