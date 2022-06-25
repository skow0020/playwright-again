import context, { type Page } from '@playwright/test';


export const login = async (page: Page, email: string, password: string) => {
    await page.goto('https://qa-library-dev.herokuapp.com/library-login');

    await page.type('#email', email)
    await page.type('#password', password)
    await page.click('#submit-button')
    await page.click('#search-button')
}