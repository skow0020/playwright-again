import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://qa-library-dev.herokuapp.com/library-login');
});

test.describe('login', () => {
    test.only('login', async ({ page }) => {
        await page.type('#email', 'cskow@tapqa.com')
        await page.type('#password', 'password')
        await page.click('#submit-button')
        await page.click('#search-button')
    })
})