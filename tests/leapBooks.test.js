
import { test, expect } from '@playwright/test';

exports.leapBooks = class leapBooks {

    constructor(page) {

        this.page = page;


    }

    async books() {

        console.log('You visited Books page');

        await this.page.goto('https://demoqa.com/books');
        await this.page.getByText('Image', { exact: true }).click();
        await this.page.getByText('Title').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('columnheader', { name: 'Title' }).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByText('Author').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('columnheader', { name: 'Author' }).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('columnheader', { name: 'Publisher' }).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('columnheader', { name: 'Publisher' }).click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('link', { name: 'Programming JavaScript Applications' }).click({
            button: 'right'
        });
        await this.page.getByRole('link', { name: 'You Don\'t Know JS' }).click({
            button: 'right'
        });
        await this.page.getByRole('link', { name: 'Speaking JavaScript' }).click({
            button: 'right'
        });
        await this.page.getByRole('link', { name: 'Designing Evolvable Web APIs with ASP.NET' }).click({
            button: 'right'
        });
        await this.page.getByRole('link', { name: 'Learning JavaScript Design Patterns' }).click({
            button: 'right'
        });
        await this.page.getByRole('link', { name: 'Git Pocket Guide' }).click({
            button: 'right'
        });
        await this.page.getByRole('link', { name: 'Understanding ECMAScript 6' }).click({
            button: 'right'
        });
        await this.page.getByRole('link', { name: 'Eloquent JavaScript, Second Edition' }).click({
            button: 'right'
        });
        await this.page.waitForTimeout(1000);

        await expect(this.page.getByText('Book Store').first()).toBeVisible();



    }

}