import { test, expect, request } from '@playwright/test'
import { APIUtils } from '../utils/APIUtils'


const loginPayload = { userEmail: "testuser267@gmail.com", userPassword: "Test@1234" }
const orderPayload =
{
    orders:
        [{ country: "India", productOrderedId: "6960eac0c941646b7a8b3e68" }]
}
let response: any
const fakeResponseOrder = { data: [], message: "No Orders" }

test.beforeAll(async () => {

    const apiContext = await request.newContext()
    const apiUtils = new APIUtils(apiContext, loginPayload)
    response = await apiUtils.createOrder(orderPayload)

})


test('login to the Lets shop application', async ({ page }) => {


    await page.addInitScript(value => {
        window.localStorage.setItem('token', value)
    }, response.token)

    await page.goto('https://rahulshettyacademy.com/client/')

    await page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*',
        async route => {
            const response = await page.request.fetch(route.request())
            let body: any = JSON.stringify(fakeResponseOrder)
            route.fulfill({
                response,
                body,

            })
        }
    )

    await page.locator('button[routerlink="/dashboard/myorders"]').click()
    await page.waitForResponse('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*')

    console.log(await page.locator('.mt-4').textContent())


})

