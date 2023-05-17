import { test, expect } from '@playwright/test';

/*import { defineConfig } from '@playwright/test';

export default defineConfig({
    reporter: 'line',
});*/
//Importing classes
const { leapPage } = require('./leapPage.test');
const { leapForms } = require('./leapForms.test');
const { leapBooks } = require('./leapBooks.test');

test('Test for QAdemo page', async ({ page }) => {


    const leapPage1 = new leapPage(page);
    await leapPage1.login();

    const leapForms1 = new leapForms(page);
   await leapForms1.forms();

    const leapBooks1 = new leapBooks(page);
    await leapBooks1.books();

    });

   