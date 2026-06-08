import { expect, Locator, Page } from "@playwright/test"

export class PlaceOrderPage{

    myOrdersButton: Locator
    textCheck: Locator
    getOrderID: Locator
    constructor(page:Page)
    {
        this.myOrdersButton = page.locator('label[routerlink="/dashboard/myorders"]')
        this.textCheck = page.locator('.hero-primary')
        this.getOrderID = page.locator('.em-spacer-1 label.ng-star-inserted')

    }

    async verifyOrderDetails()
    {
          await expect(this.textCheck).toHaveText(' Thankyou for the order. ')
        
            const value = await this.getOrderID.textContent()
            const orderID = value?.split('| ')[1]
            console.log(orderID)
            return orderID
    }

    async clickOnMyOrdersButton()
    {
        await this.myOrdersButton.click()
    }
}