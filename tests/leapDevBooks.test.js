import { test, expect } from '@playwright/test';

const { leapBooks } = require('./leapBooks.test');

test('Test for QAdemo page', async ({ page }) => {

    const leapBooks1 = new leapBooks(page);
    await leapBooks1.books();

    });

   