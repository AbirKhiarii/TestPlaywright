import {test, expect} from '@playwright/test'

test.describe('home page check', ()=>{

    test('first check ', async ({page}) => {
    // navigate to url : www.playwright.com
    await page.goto('https://playwright.dev/'); 
    const heading = await page.getByRole('heading',{ name :'palywright'});})

    test('second check', async ({page})=>{
        const element = await page.getByRole('tab', {name:'xx'});
        expect (await element.isVisible().finally())

    })


})