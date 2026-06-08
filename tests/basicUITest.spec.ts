import { test, expect } from '@playwright/test'

test('browser context declaration playwright test', async ({ browser }) => {


    //to use cookie and plugin
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

    const usernameTextBox = page.locator('#username')
    const passwordTextBox = page.locator('[type="password"]')
    const signInButton = page.locator('#signInBtn')
    const cardTitles = page.locator('h4.card-title')

    console.log(await page.title())
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy')
    await usernameTextBox.fill("rahulshettyacademy")
    await passwordTextBox.fill('rahulshettyacademy') //incorrect password, correct password is Learning@830$3mK2
    await signInButton.click()
    const text = await page.locator('[style*="block"]').textContent()
    console.log(text)
    expect(text).toContain('Incorrect username/password.')

    await usernameTextBox.fill("")
    await usernameTextBox.fill("rahulshettyacademy")
    await passwordTextBox.fill("")
    await passwordTextBox.fill("Learning@830$3mK2")

    await signInButton.click()

    console.log(await cardTitles.first().textContent())
    console.log(await cardTitles.nth(1).textContent())
    const allCardTitles = await cardTitles.allTextContents()
    console.log(allCardTitles)

})

test('page context declaration playwright test', async ({ page }) => {

    //if we want a fresh browser with default value
    await page.goto("https://www.google.com/")
    console.log(await page.title())
    await expect(page).toHaveTitle('Google')
})

test('UI controls', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    //select dropdown
    await page.locator('select.form-control').selectOption('consult')
    //radio button
    const radioButton = page.locator('input[value="user"]')
    await radioButton.click()
    await page.locator('#okayBtn').click()
    //assertion to see if the button is checked 
    await expect(radioButton).toBeChecked()
    //to get the boolean value
    console.log(await radioButton.isChecked())

    await page.locator('#terms').click()
    await expect(page.locator('#terms')).toBeChecked()
    await page.locator('#terms').uncheck()
    await expect(page.locator('#terms')).not.toBeChecked()

    await expect(page.locator('[href="https://rahulshettyacademy.com/documents-request"]')).toHaveAttribute('class', 'blinkingText')
})

test('Child windows', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

    const [childPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator(('[href="https://rahulshettyacademy.com/documents-request"]')).click()
    ])

    console.log(await childPage.title())
    const text: string = (await childPage.locator('.im-para.red').textContent())!

    expect(text).toContain('Please email us at mentor@rahulshettyacademy.com with below template to receive response')

    const newText1: string = text.split('mentor@')[1]
    const newText: string = newText1.split('.com')[0]
    //console.log(newText)
    await page.locator('#username').fill(newText);
    console.log(await page.locator('#username').inputValue())

})
