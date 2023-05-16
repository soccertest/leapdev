

import { test, expect } from '@playwright/test';

exports.leapPage = class leapPage {


    constructor(page) {

        this.page = page;

    }

    async login() {

        console.log('You visited login page');

            await this.page.goto('https://demoqa.com/login');
            await this.page.getByRole('listitem').filter({ hasText: /^Book Store$/ }).click();
   


    }

}