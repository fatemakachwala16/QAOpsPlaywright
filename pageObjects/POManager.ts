import { Page } from "@playwright/test"
import { DashboardPage } from "./DashboardPage"
import { LoginPage } from "./LoginPage"
import { OnCartPage } from "./OnCartPage"
import { OnCheckoutPage } from "./OnCheckoutPage"
import { OnOrdersPage } from "./OnOrdersPage"
import { OnOrderSummaryPage } from "./OnOrderSummaryPage"
import { PlaceOrderPage } from "./PlaceOrderPage"

export class POManager {
    loginPage: LoginPage
    dashboardPage: DashboardPage
    onCartPage: OnCartPage
    onCheckoutPage: OnCheckoutPage
    placeOrderPage: PlaceOrderPage
    onOrdersPage: OnOrdersPage
    onOrderSummaryPage: OnOrderSummaryPage

    constructor(page: Page) {
        this.loginPage = new LoginPage(page)
        this.dashboardPage = new DashboardPage(page)
        this.onCartPage = new OnCartPage(page)
        this.onCheckoutPage = new OnCheckoutPage(page)
        this.placeOrderPage = new PlaceOrderPage(page)
        this.onOrdersPage = new OnOrdersPage(page)
        this.onOrderSummaryPage = new OnOrderSummaryPage(page)

    }

    getLoginPage() {
        return this.loginPage
    }

    getDashboardPage() {
        return this.dashboardPage
    }

    getOnCartPage() {
        return this.onCartPage
    }

    getOnCheckoutPage() {
        return this.onCheckoutPage
    }

    getPlaceOrderPage() {
        return this.placeOrderPage
    }

    getOnOrdersPage() {
        return this.onOrdersPage
    }

    getOnOrderSummaryPage() {
        return this.onOrderSummaryPage
    }

}