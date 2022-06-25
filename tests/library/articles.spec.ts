import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://qa-library-dev.herokuapp.com/library-login');
});

test.describe('articles', () => {
    test.only('articles show', async ({ page }) => {
        await page.click('#search-button')
    })
})