/* eslint-disable no-alert */
/* eslint-disable no-return-assign */
/* eslint-disable implicit-arrow-linebreak */
import puppetteer from 'puppeteer';
import { fork } from 'child_process';
// import { type } from 'os';

jest.setTimeout(30000); // default puppeteer timeout

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      // product: 'firefox',
      headless: false, // show gui
      slowMo: 250,
      devtools: true, // show devTools
      ignoreHTTPSErrors: true,
      // timeout: 60000,
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  beforeEach(async () => {
    await page.goto(baseUrl);
  });

  test('should test luhnAlgorithm', async () => {
    let result = '';
    await page.goto(baseUrl);
    const form = await page.$('#form');
    const input = await form.$('#card_number');
    await input.type('3551115647119851');
    const submit = await form.$('#submitform');
    await submit.click();
    await page.on('dialog', (dialog) => {
      // получить предупреждающее сообщение
      result = dialog.message();
    });
    expect(result).toBe('card-number is OK!');
  });
});
