import { test, expect } from '@playwright/test'

let webContext: any

test.beforeAll(async ({ browser }) => {

    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login')
    await expect(page).toHaveTitle(`Let's Shop`)
    await page.locator('#userEmail').fill('testuser267@gmail.com')
    await page.locator('#userPassword').fill('Test@1234')
    await page.locator('#login').click()
    await page.waitForLoadState('networkidle')
    await context.storageState({ path: 'state.json' })
    webContext = await browser.newContext({ storageState: 'state.json' })
})

test('login to the Lets shop application', async () => {

    const page = await webContext.newPage()
    await page.goto('https://rahulshettyacademy.com/client/')


    const products = page.locator('.card-body')
    const productName = 'ZARA COAT 3'


    const cardTitle = page.locator('.card-body b')
    console.log(await cardTitle.allTextContents())

    const count = await products.count()

    for (let i = 0; i < count; i++) {
        const name = await products.nth(i).locator('b').textContent()

        if (name === productName) {
            await products.nth(i).locator('text=Add To Cart').click()
            break;
        }
    }

    await page.locator('[routerlink="/dashboard/cart"]').click()

    //to pause for 30seconds
    await page.locator('.cartWrap').first().waitFor()

    const bool = await page.locator('h3', { hasText: 'ZARA COAT 3' }).isVisible()
    expect(bool).toBeTruthy()

    await page.locator('text=Checkout').click()

    await page.getByPlaceholder('Select Country').pressSequentially('India')


    const dropdown = page.locator('.ta-results')
    await dropdown.waitFor()

    const countOfDropDown = await dropdown.locator('button').count()

    for (let i = 0; i < countOfDropDown; i++) {
        const text = await dropdown.locator('button').nth(i).textContent()
        if (text === ' India') {
            await dropdown.locator('button').nth(i).click()
            break;
        }
    }

    await expect(page.locator('.user__name label[type="text"]')).toHaveText('testuser267@gmail.com')

    await page.locator('.action__submit').click()

    await expect(page.locator('.hero-primary')).toHaveText(' Thankyou for the order. ')

    const value = await page.locator('.em-spacer-1 label.ng-star-inserted').textContent()
    const orderID = value?.split('| ')[1]
    console.log(orderID)

    await page.locator('label[routerlink="/dashboard/myorders"]').click()

    await expect(page.locator('div.table-responsive h1')).toHaveText('Your Orders')

    const tableLocator = page.locator('tbody tr')
    const countRows = await page.locator('tbody tr').count()

    for (let i = 0; i < countRows; i++) {
        const rowOrderID = await tableLocator.nth(i).locator('th').textContent()
        if (orderID?.includes(rowOrderID!)) {
            await tableLocator.nth(i).locator('button.btn-primary').click()
            break
        }

    }

    await expect(page.locator('p.tagline')).toHaveText('Thank you for Shopping With Us')
    await expect(page.locator('.col-text')).toContainText(orderID!);

})