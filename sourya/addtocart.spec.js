


//Go to www.saucedemo.com
//Enter username
//Enter password
//Click on Login button
//<div class="inventory_item_name">Test.allTheThings() T-Shirt (Red)</div>
//Click on Add to Cart
//Click on Hamburger button
//Click on Logout

import { test, expect } from '@playwright/test';

const { pageDetailsPage } = require('./page-details.test');

test('test', async ({ page }) => {

 
    const pageDetails = new pageDetailsPage(page);

    await pageDetails.goto();
    await pageDetails.login();
    await pageDetails.click();
    await pageDetails.addToCart();
    
    await page.locator('//*[@id="shopping_cart_container"]/a').click();
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    await expect(page.locator('//*[@id="item_3_title_link"]/div')).toBeVisible();

    await page.getByRole('button',{name:'Continue Shopping'}).click();
    //Worked:await page.locator('//*[@id="continue-shopping"]').click();
})