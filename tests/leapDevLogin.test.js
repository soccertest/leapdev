import { test, expect } from '@playwright/test';

//Importing classes
const { leapPage } = require('./leapPage.test');

test('Test for QAdemo login page', async ({ page }) => {


    const leapPage1 = new leapPage(page);
    await leapPage1.login();

    });

   