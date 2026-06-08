import { test, expect, request } from '@playwright/test'
import {APIUtils} from '../utils/APIUtils'


const loginPayload = { userEmail: "testuser267@gmail.com", userPassword: "Test@1234" }
const orderPayload =
{
    orders:
        [{ country: "India", productOrderedId: "6960eac0c941646b7a8b3e68" }]
}
let response:any

test.beforeAll (async() =>{

      const apiContext = await request.newContext()
      const apiUtils = new APIUtils(apiContext,loginPayload)
      response = await apiUtils.createOrder(orderPayload)

})
  

test('login to the Lets shop application', async ({ page }) => {


    await page.addInitScript(value => {
        window.localStorage.setItem('token', value)
    }, response.token)

    await page.goto('https://rahulshettyacademy.com/client/')

    await page.locator('button[routerlink="/dashboard/myorders"]').click()

    await expect(page.locator('div.table-responsive h1')).toHaveText('Your Orders')

    const tableLocator = page.locator('tbody tr')
    const countRows = await page.locator('tbody tr').count()

    for (let i = 0; i < countRows; i++) {
        const rowOrderID = await tableLocator.nth(i).locator('th').textContent()
        if (response.orderID?.includes(rowOrderID!)) {
            await tableLocator.nth(i).locator('button.btn-primary').click()
            break
        }

    }

    await expect(page.locator('p.tagline')).toHaveText('Thank you for Shopping With Us')
    await expect(page.locator('.col-text')).toContainText(response.orderID!);

})