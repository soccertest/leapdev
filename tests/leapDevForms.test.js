import { test, expect } from '@playwright/test';

const { leapForms } = require('./leapForms.test');

test('Test for QAdemo Forms page', async ({ page }) => {

    const leapForms1 = new leapForms(page);
    await leapForms1.forms();

    });

   