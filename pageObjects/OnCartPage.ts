import { expect, Locator, Page } from "@playwright/test"

export class OnCartPage {

    page: Page
    onCartFirstProductCheck: Locator
    checkoutButton: Locator
    constructor(page: Page) {
        this.page = page
        this.onCartFirstProductCheck = page.locator('.cartWrap').first()
        this.checkoutButton = page.locator('text=Checkout')
    }

    async checkProductIsInCartandClickOnCart(productName: string) {
        //to pause for 30seconds
        await this.onCartFirstProductCheck.waitFor()
        const bool = await this.page.locator('h3', { hasText: productName }).isVisible()
        expect(bool).toBeTruthy()
        await this.checkoutButton.click()

    }
}