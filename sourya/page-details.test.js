
    //exporting parent class
    //creating object in parent class

const { expect } = require('@playwright/test');

var url1 = 'https://www.saucedemo.com';
var un = 'standard_user';
var pwd = 'secret_sauce';

exports.pageDetailsPage = class pageDetailsPage {

    

    constructor(page) {

        this.page = page;

    }

   

    async goto() {

        await this.page.goto(url1);


    }

    async login() {


        await this.page.getByPlaceholder('Username').fill(un);
        await this.page.getByPlaceholder('Password').fill(pwd);

    }

    async click() {

        await this.page.locator('//*[@id="login-button"]').click();
        await this.page.locator('//*[@id="item_3_title_link"]').click();


    }


    async addToCart() {

        await this.page.getByText('Test.allTheThings() T-Shirt (Red)').click();
        await this.page.getByRole('button', { name: 'Add to Cart' }).click();

    }
}

