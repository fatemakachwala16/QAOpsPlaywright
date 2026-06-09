import { test, expect } from '@playwright/test'

//test.describe.configure({mode: 'parallel'})

test('More validation test', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await page.locator('[onclick="hideElement()"]').click()
    expect(page.locator('#displayed-text')).toBeHidden()
    await page.locator('[onclick="showElement()"]').click()
    expect(page.locator('#displayed-text')).toBeVisible()

    //pop up
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });

    await page.locator('#confirmbtn').click();

    //hover
    await page.locator('#mousehover').hover()

    //iframe
    const framesPage = page.frameLocator('#courses-iframe')
    await framesPage.locator('li a[href="lifetime-access"]:visible').click()
    const text = await framesPage.locator('div h2 span').first().innerText()
    console.log(text)


})

test('Screenshot and Visual testing', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    expect(page.locator('#displayed-text')).toBeVisible()
    await page.locator('#displayed-text').screenshot({ path: 'partialScreenshot.png' })
    await page.locator('[onclick="hideElement()"]').click()
    await page.screenshot({ path: 'screenshot.png' })
    expect(page.locator('#displayed-text')).toBeHidden()
    await page.locator('[onclick="showElement()"]').click()
    expect(page.locator('#displayed-text')).toBeVisible()

})

test.skip('Visual testing', async ({ page }) => {

    await page.goto('https://eventhub.rahulshettyacademy.com/')
    expect(await page.screenshot()).toMatchSnapshot('landingPage.png')


})