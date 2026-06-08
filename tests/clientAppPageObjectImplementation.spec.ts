import { test, expect } from '@playwright/test'
import { POManager } from '../pageObjects/POManager'
import placeOrderTestData from '../utils/placeOrderTestData.json'

for (const data of placeOrderTestData) {

    test(`login to the Lets shop application for ${data.productName}`, async ({ page }) => {


        const poManager = new POManager(page)

        const loginPage = poManager.getLoginPage()
        await loginPage.goTo()
        await expect(page).toHaveTitle(`Let's Shop`)
        await loginPage.validLogin(data.email, data.password)

        const dashboardPage = poManager.getDashboardPage()
        await dashboardPage.networkCheck()
        await dashboardPage.searchProduct(data.productName)
        await dashboardPage.addProductToCart()

        const onCartPage = poManager.getOnCartPage()
        await onCartPage.checkProductIsInCartandClickOnCart(data.productName)

        const onCheckoutPage = poManager.getOnCheckoutPage()
        await onCheckoutPage.updateDetailsOnCheckoutPage(data.country, data.email)
        await onCheckoutPage.clickOnCheckoutButon()

        const placeOrderPage = poManager.getPlaceOrderPage()
        const orderID = await placeOrderPage.verifyOrderDetails()
        await placeOrderPage.clickOnMyOrdersButton()

        const onOrdersPage = poManager.getOnOrdersPage()
        await onOrdersPage.clickOnViewOrder(orderID)

        const onOrderSummaryPage = poManager.getOnOrderSummaryPage()
        await onOrderSummaryPage.onOrderSummaryDetailsPage(orderID)

    })

}