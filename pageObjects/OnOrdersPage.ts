import { expect, Locator, Page } from "@playwright/test"

export class OnOrdersPage {
    yourOrderLocator: Locator
    tableLocator: Locator
    tbodyLocator: Locator

    constructor(page: Page) {
        this.yourOrderLocator = page.locator('div.table-responsive h1')
        this.tableLocator = page.locator('tbody tr')
        this.tbodyLocator = page.locator('tbody tr')

    }

    async clickOnViewOrder(orderID: any) {
        await expect(this.yourOrderLocator).toHaveText('Your Orders')

        const countRows = await this.tbodyLocator.count()

        for (let i = 0; i < countRows; i++) {
            const rowOrderID = await this.tableLocator.nth(i).locator('th').textContent()
            if (orderID?.includes(rowOrderID!)) {
                await this.tableLocator.nth(i).locator('button.btn-primary').click()
                break
            }

        }
    }

}