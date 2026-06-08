import { expect, Locator, Page } from "@playwright/test";

export class OnOrderSummaryPage {
    taglineLocator: Locator;
    orderIdText: Locator;
    constructor(page: Page) {
        this.taglineLocator = page.locator('p.tagline')
        this.orderIdText = page.locator('.col-text')
    }

    async onOrderSummaryDetailsPage(orderID: any) {

        await expect(this.taglineLocator).toHaveText('Thank you for Shopping With Us')
        await expect(this.orderIdText).toContainText(orderID!);

    }
}