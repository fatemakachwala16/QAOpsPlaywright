import { Page, Locator } from "@playwright/test"

export class DashboardPage {

    page: Page
    products: Locator
    cardTitle: Locator
    cart: Locator
    constructor(page: Page) {
        this.page = page
        this.products = page.locator('.card-body')
        this.cardTitle = page.locator('.card-body b')
        this.cart = page.locator('[routerlink="/dashboard/cart"]')

    }

    async networkCheck() {
        await this.page.waitForLoadState('networkidle')
    }

    async searchProduct(productName: string) {
        console.log(await this.cardTitle.allTextContents())

        const count = await this.products.count()
        for (let i = 0; i < count; i++) {
            const name = await this.products.nth(i).locator('b').textContent()

            if (name === productName) {
                await this.products.nth(i).locator('text=Add To Cart').click()
                break;
            }
        }

    }

    async addProductToCart() {

        await this.cart.click()

    }


}