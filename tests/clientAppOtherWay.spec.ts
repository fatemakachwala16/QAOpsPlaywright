import { test, expect } from '@playwright/test'

test('login to the Lets shop application', async ({ page }) => {

    const products = page.locator('.card-body')
    const productName = 'ZARA COAT 3'

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login')
    await expect(page).toHaveTitle(`Let's Shop`)

    await page.getByPlaceholder('email@example.com').fill('testuser267@gmail.com')
    await page.getByPlaceholder('enter your passsword').fill('Test@1234')
    
    await page.getByRole('button',{name:'Login'}).click()

    await page.waitForLoadState('networkidle')

    const cardTitle = page.locator('.card-body b')
    console.log(await cardTitle.allTextContents())

    await page.locator('.card-body').filter({hasText: productName}).getByRole('button', {name: 'Add To Cart'}).click()

    await page.locator('ul').getByRole('button', {name: 'Cart'}).click()

    //to pause for 30seconds
    await page.locator('.cartWrap').first().waitFor()

    await expect(page.getByText(productName)).toBeVisible()

    await page.getByRole('button',{name: 'Checkout'}).click()

    //add the payment details
    await page.getByPlaceholder('Select Country').pressSequentially('India')

    await page.locator('.ta-results').filter({hasText : 'India'}).click()

    await expect(page.locator('.user__name label[type="text"]')).toHaveText('testuser267@gmail.com')

    await page.getByText('Place Order ').click()

    await expect(page.locator('.hero-primary')).toHaveText(' Thankyou for the order. ')

    const value = await page.locator('.em-spacer-1 label.ng-star-inserted').textContent()
    const orderID = value?.split('| ')[1]
    console.log(orderID)

    await page.getByText('Orders History Page').click()

    await expect(page.getByText('Your Orders')).toHaveText('Your Orders')

    await page.locator('tbody tr').filter({hasText :orderID}).getByRole('button',{name :'View'}).click()

    await expect(page.locator('p.tagline')).toHaveText('Thank you for Shopping With Us')
    await expect(page.locator('.col-text')).toContainText(orderID!);    
    
})