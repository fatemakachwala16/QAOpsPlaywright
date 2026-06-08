import { Given, When, Then } from '@cucumber/cucumber'
import { expect, chromium } from '@playwright/test'
import { POManager } from '../../pageObjects/POManager'

Given('a login to ecommerce application with {string} and {string}', async function (email, password) {


   
    const loginPage = this.poManager.getLoginPage()
    await loginPage.goTo()
    await expect(this.page).toHaveTitle(`Let's Shop`)
    await loginPage.validLogin(email, password)


});

When('user adds a product {string} to cart', async function (productName) {

    const dashboardPage = this.poManager.getDashboardPage()
    await dashboardPage.networkCheck()
    await dashboardPage.searchProduct(productName)
    await dashboardPage.addProductToCart()

});


Then('verify {string} is added to the cart', async function (productName) {
    const onCartPage = this.poManager.getOnCartPage()
    await onCartPage.checkProductIsInCartandClickOnCart(productName)
});

Then('verify {string} and {string} added on the checkout', async function (country, email) {
    const onCheckoutPage = this.poManager.getOnCheckoutPage()
    await onCheckoutPage.updateDetailsOnCheckoutPage(country, email)
    await onCheckoutPage.clickOnCheckoutButon()

});



When('Enter the valid details and place the order', async function () {
    const placeOrderPage = this.poManager.getPlaceOrderPage()
    this.orderID = await placeOrderPage.verifyOrderDetails()
    await placeOrderPage.clickOnMyOrdersButton()

});



Then('verify order is present in the order history page', async function () {
    const onOrdersPage = this.poManager.getOnOrdersPage()
    await onOrdersPage.clickOnViewOrder(this.orderID)

    const onOrderSummaryPage = this.poManager.getOnOrderSummaryPage()
    await onOrderSummaryPage.onOrderSummaryDetailsPage(this.orderID)

});