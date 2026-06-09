import { test, expect, Page } from '@playwright/test'

async function loginAndGoToBooking(page: Page) {

    const BASE_URL = 'https://eventhub.rahulshettyacademy.com'
    // Login
    await page.goto(BASE_URL);

    await page.getByPlaceholder('you@email.com').fill('testuser267@gmail.com');
    await page.locator('#password').fill('Test@1234');

    await page.locator('#login-btn').click()

    // Confirm Browse Events link is visible
    await page.getByRole('link', { name: 'Browse Events →' }).waitFor()

    await expect(
        page.getByRole('link', {
            name: 'Browse Events →'
        })
    ).toBeVisible();
}
test('Single ticket booking is eligible for refund', async ({ page }) => {

    await loginAndGoToBooking(page);

    //Step 2 — Book first event with 1 ticket (default)

    await page.getByRole('link', { name: 'Browse Events →' }).click()

    await page.locator('[data-testid="event-card"]').last().locator('#book-now-btn').click()

    await page.getByLabel('Full Name').fill('Test User')
    await page.locator('#customer-email').fill('testUser@gmail.com')
    await page.getByLabel('phone').fill('+91 98765 43210')
    await page.locator('.confirm-booking-btn').click()

    //Step 3 — Navigate to booking detail


    await page.getByRole('link', { name: 'View My Bookings' }).click()
    await expect(page).toHaveURL('https://eventhub.rahulshettyacademy.com/bookings')

    await page.getByRole('button', { name: 'View Details' }).first().click()
    await expect(page.getByText('Booking Information')).toBeVisible()

    //Step 4 — Validate booking ref

    const bookingRef = (await page.locator('.flex span.font-mono').first().innerText()).trim()
    console.log(bookingRef)

    const eventTitle = await page.locator('h1').first().innerText()
    console.log(eventTitle)

    expect(bookingRef.charAt(0)).toBe(eventTitle.charAt(0))

    //Step 5 — Check refund eligibility

    await page.getByRole('button', { name: 'Check eligibility for refund?' }).click()

    // Immediately visible
    await expect(page.locator('#refund-spinner')).toBeVisible();

    // Gone within 6 seconds
    await expect(page.locator('#refund-spinner')).toBeHidden({
        timeout: 6000
    });

    //Step 6 — Validate result

    await expect(page.locator('#refund-result')).toBeVisible()
    await expect(page.locator('#refund-result')).toHaveText('Eligible for refund. Single-ticket bookings qualify for a full refund.')

})

test('Group ticket booking is NOT eligible for refund', async ({ page }) => {

    await loginAndGoToBooking(page)

    //Step 2 — Book first event with 1 ticket (default)

    await page.getByRole('link', { name: 'Browse Events →' }).click()

    await page.locator('[data-testid="event-card"]').last().locator('#book-now-btn').click()

    await page.getByRole('button', { name: '+' }).click({ clickCount: 2 });

    await page.getByLabel('Full Name').fill('Test User')
    await page.locator('#customer-email').fill('testUser@gmail.com')
    await page.getByLabel('phone').fill('+91 98765 43210')
    await page.locator('.confirm-booking-btn').click()

    //Step 3 — Navigate to booking detail

    await page.getByRole('link', { name: 'View My Bookings' }).click()
    await expect(page).toHaveURL('https://eventhub.rahulshettyacademy.com/bookings')

    await page.getByRole('button', { name: 'View Details' }).first().click()
    await expect(page.getByText('Booking Information')).toBeVisible()

    //Step 4 — Validate booking ref

    const bookingRef = (await page.locator('.flex span.font-mono').first().innerText()).trim()
    console.log(bookingRef)

    const eventTitle = await page.locator('h1').first().innerText()
    console.log(eventTitle)

    expect(bookingRef.charAt(0)).toBe(eventTitle.charAt(0))

    //Step 5 — Check refund eligibility

    await page.getByRole('button', { name: 'Check eligibility for refund?' }).click()

    // Immediately visible
    await expect(page.locator('#refund-spinner')).toBeVisible();

    // Gone within 6 seconds
    await expect(page.locator('#refund-spinner')).toBeHidden({
        timeout: 6000
    });

    //Step 6 — Validate result

    await expect(page.locator('#refund-result')).toBeVisible()
    await expect(page.locator('#refund-result')).toHaveText('Not eligible for refund. Group bookings (3 tickets) are non-refundable.')

})