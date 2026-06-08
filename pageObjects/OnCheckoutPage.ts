import { expect, Locator } from "@playwright/test"

export class OnCheckoutPage {
    onCheckoutButton: Locator
    selectCountry: Locator
    dropdown: Locator
    countOfDropDown: any
    lableCheck: Locator

    constructor(page: any) {
        this.onCheckoutButton = page.locator('.action__submit')
        this.selectCountry = page.getByPlaceholder('Select Country')
        this.dropdown = page.locator('.ta-results')
        this.lableCheck = page.locator('.user__name label[type="text"]')
    }

    async updateDetailsOnCheckoutPage(country: string, email: string) {

        await this.selectCountry.pressSequentially(country)
        await this.dropdown.waitFor()

        const countOfDropDown = await this.dropdown.locator('button').count()

        for (let i = 0; i < countOfDropDown; i++) {
            const text = await this.dropdown.locator('button').nth(i).textContent()
            if (text?.trim() === country) {
                await this.dropdown.locator('button').nth(i).click()
                break;
            }
        }

        await expect(this.lableCheck).toHaveText(email)
    }

    async clickOnCheckoutButon() {
        await this.onCheckoutButton.click()

    }
}