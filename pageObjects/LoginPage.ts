import { Locator, Page } from "@playwright/test"

export class LoginPage {
    signInButton: Locator
    userEmail: Locator
    userPassword: Locator
    page: Page

    constructor(page: Page) {
        this.page = page
        this.userEmail = page.locator('#userEmail')
        this.userPassword = page.locator('#userPassword')
        this.signInButton = page.locator('#login')
    }

    async goTo()
    {
        await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login')
    }
    

    async validLogin(username: string  , password: string) {
        await this.userEmail.fill(username)
        await this.userPassword.fill(password)
        await this.signInButton.click()
    }
}