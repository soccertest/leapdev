
import { test, expect } from '@playwright/test';

exports.leapForms = class leapForms {

    constructor(page) {

        this.page = page;


    }

    async forms() {

        console.log('You visited forms page');

        await this.page.goto('https://demoqa.com/books');
        await this.page.locator('span').filter({ hasText: 'Forms' }).locator('div').first().click();
        await this.page.getByText('Practice Form').click();
        await this.page.getByPlaceholder('First Name').click();
        await this.page.getByPlaceholder('First Name').fill('John');
        await this.page.getByPlaceholder('First Name').press('Tab');
        await this.page.getByPlaceholder('Last Name').fill('Doe');
        await this.page.getByPlaceholder('Last Name').press('Tab');
        await this.page.getByPlaceholder('name@example.com').fill('johddoe@example.com');
        await this.page.getByText('Male', { exact: true }).click();
        await this.page.getByPlaceholder('Mobile Number').click();
        await this.page.getByPlaceholder('Mobile Number').fill('2223332212');
        await this.page.waitForTimeout(1000);
        await this.page.locator('#dateOfBirth').click();
        await this.page.locator('#dateOfBirthInput').click();
        await this.page.getByRole('combobox').nth(1).selectOption('1960');
        await this.page.locator('div').filter({ hasText: /^JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember$/ }).getByRole('combobox').selectOption('0');
        await this.page.getByRole('option', { name: 'Choose Friday, January 1st, 1960' }).click();
        await this.page.locator('.subjects-auto-complete__value-container').click();
        await this.page.locator('#subjectsInput').fill('Computers');
        await this.page.getByText('Sports').click();
        await this.page.getByText('Reading').click();
        await this.page.getByText('Music').click();
        await this.page.getByPlaceholder('Current Address').click();
        await this.page.getByPlaceholder('Current Address').fill('Sydney, Australia');
        await expect(this.page.getByText('Practice Form').first(), 'Practice Form').toBeVisible();
        

    }

}