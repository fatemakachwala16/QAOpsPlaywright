import { After, Before } from "@cucumber/cucumber"
import { chromium } from "@playwright/test"
import { POManager } from "../pageObjects/POManager"


Before(async function () {

    const browser = await chromium.launch({ headless: true })
    const context = await browser.newContext()
    this.page = await context.newPage()
    this.poManager = new POManager(this.page)

})

After(async function () {
    await this.page.close()
})