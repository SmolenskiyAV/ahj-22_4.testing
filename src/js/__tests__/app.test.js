/* eslint-disable linebreak-style */
/**
 * @jest-environment jsdom
 */
import { luhnAlgorithm, preDetectCardType } from '../base';

class BankCardsData { // Класс для проверочных данных
  constructor() {
    this.members = new Set();
  }

  add(cards) { // метод добавления карты в объект
    this.members.add(cards);
  }

  addAll(...persons) { // метод одновременного добавления нескольких карт в объект
    for (const arg of persons) this.members.add(arg);
  }

  toArray() { // метод конвертации объекта Set в массив
    const result = [...this.members];

    return result;
  }
}

// проверка функции алгоритма "Луна"
test('shoud check card-number validation by Luhn algorithm', () => {
  const amexValue = luhnAlgorithm(String(345936346788903));
  const amexKey = preDetectCardType(345936346788903);
  const amex = { [amexKey]: amexValue };

  const visaValue = luhnAlgorithm(String(4556015886206505));
  const visaKey = preDetectCardType(4556015886206505);
  const visa = { [visaKey]: visaValue };

  const jcbValue = luhnAlgorithm(String(3551115647119851));
  const jcbKey = preDetectCardType(3551115647119851);
  const jcb = { [jcbKey]: jcbValue };

  const discoverValue = luhnAlgorithm(String(6011894492395579));
  const discoverKey = preDetectCardType(6011894492395579);
  const discover = { [discoverKey]: discoverValue };

  const m = new BankCardsData();
  m.addAll(amex, visa, jcb, discover);
  const result = m.toArray();
  expect(result).toEqual([
    { American_Express: true },
    { Visa: true },
    { JCB: true },
    { Discover: true },
  ]);
});
