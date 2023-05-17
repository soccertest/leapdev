

import { test, expect } from '@playwright/test';

exports.leapPage = class leapPage {


    constructor(page) {

        this.page = page;

    }

    async login() {

        console.log('You visited login page');

        //Correct Username & Password
        await this.page.goto('https://demoqa.com/login');
        await this.page.getByPlaceholder('UserName').click();
        await this.page.getByPlaceholder('UserName').fill('leapdevsydney2023');
        await this.page.getByPlaceholder('Password').click();
        await this.page.getByPlaceholder('Password').fill('Testing@123!');
        await this.page.getByRole('button', { name: 'Login' }).click();
        await expect(this.page.getByText('leapdevsydney2023'), 'leapdevsydney2023').toBeVisible();
        await expect(this.page.getByRole('button', { name: 'Log out' }), 'Log out').toBeVisible();
        await this.page.getByRole('button', { name: 'Log out' }).click();

        //Correct Username & Incorrect Password
        await this.page.getByPlaceholder('UserName').click();
        await this.page.getByPlaceholder('UserName').fill('leapdevsydney2023');
        await this.page.getByPlaceholder('UserName').press('Tab');
        await this.page.getByPlaceholder('Password').fill('Password');
        await this.page.getByRole('button', { name: 'Login' }).click();
        await expect(this.page.getByText('Invalid username or password!'), 'Invalid username or password!').toBeVisible();

         //Incorrect Username & Incorrect Password
        await this.page.getByPlaceholder('UserName').click();
        await this.page.getByPlaceholder('UserName').fill('leapdevsydney');
        await this.page.getByText('Password :').click();
        await this.page.getByPlaceholder('Password').click();
        await this.page.locator('#password-wrapper div').nth(1).click();
        await this.page.getByPlaceholder('Password').fill('Testing@123!');
        await this.page.getByRole('button', { name: 'Login' }).click();
        await this.page.getByText('Welcome,Login in Book StoreUserName : Password : LoginNew UserInvalid username o').click();
        await expect(this.page.getByText('Invalid username or password!'), 'Invalid username or password!').toBeVisible();

        //Incorrect Username & Incorrect Password
        await this.page.getByPlaceholder('UserName').click();
        await this.page.getByPlaceholder('UserName').fill('test');
        await this.page.getByPlaceholder('UserName').press('Tab');
        await this.page.getByPlaceholder('Password').fill('test');
        await this.page.getByRole('button', { name: 'Login' }).click();
        await expect(this.page.getByText('Invalid username or password!'), 'Invalid username or password!').toBeVisible();


    }

}