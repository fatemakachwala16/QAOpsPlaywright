import { test, expect } from '@playwright/test'

test('assignment 1 - event hub', async ({ page }) => {

    function futureDateValue(): string {
        return '2027-05-16T10:50';
    }

    await page.goto('https://eventhub.rahulshettyacademy.com')

    await page.getByPlaceholder('you@email.com').fill('testuser267@gmail.com')
    await page.getByLabel('password').fill('Test@1234')
    await page.locator('#login-btn').click()

    await page.getByRole('link', { name: 'Browse Events →' }).waitFor()

    expect(await page.getByRole('link', { name: 'Browse Events →' }).isVisible()).toBeTruthy()

    await page.getByRole('link', { name: 'Browse Events →' }).click()
    await page.getByRole('link', { name: 'Add New Event' }).click()

    const titleEvent = `Test Event ${Date.now()}`

    await page.locator('#event-title-input').fill(titleEvent)
    await page.getByPlaceholder('Describe the event…').fill('text area 123')
    await page.getByLabel('category').selectOption('Sports')
    await page.getByLabel('city').fill('Vadodara')
    await page.getByLabel('venue').fill('Vadodara Gujarat')
    await page.getByLabel('Event Date & Time').fill(futureDateValue());
    await page.getByLabel('Price ($)').fill('120')
    await page.getByLabel('Total Seats').fill('50')
    await page.locator('#add-event-btn').click()
    await expect(page.getByText('Event created!')).toBeVisible();

    //Step 3 — Find the event card and capture seats

    await page.locator('#nav-events').click()

    console.log(await page.locator('[data-testid="event-card"]').allTextContents())

    await page.locator('[data-testid="event-card"]').nth(1).isVisible()

    await page.locator('[data-testid="event-card"]').filter({ hasText: titleEvent }).isVisible()

    const text = await page.locator('[data-testid="event-card"]').filter({ hasText: titleEvent })
        .locator('.p-4 .flex .text-xs').innerText()
    const seatsBeforeBooking = parseInt(text.split(" s")[0])
    console.log(seatsBeforeBooking)


    //Step 4 — Start booking
    //await page.getByRole('button', { name: 'Book Now' }).click()
    await page.locator('[data-testid="event-card"]').filter({ hasText: titleEvent })
        .locator('[data-testid="book-now-btn"]').click()

    //Step 5 — Fill booking form

    await expect(page.locator('#ticket-count')).toHaveText('1')
    await page.getByLabel('Full Name').fill('Test User')
    await page.locator('#customer-email').fill('testUser@gmail.com')
    await page.getByLabel('phone').fill('+91 98765 43210')
    await page.locator('.confirm-booking-btn').click()

    //step 6 Verify booking confirmation
    const bookingRef = (await page.locator('.booking-ref').first().innerText()).trim()
    console.log(bookingRef)

    //Step 7 — Verify in My Bookings

    await page.getByRole('link', { name: 'View My Bookings' }).click()

    await expect(page).toHaveURL('https://eventhub.rahulshettyacademy.com/bookings')
    await page.locator('#booking-card').first().isVisible()

    await page.locator('#booking-card').locator('.booking-ref').filter({ hasText: bookingRef }).isVisible()

    await expect(page.locator('#booking-card').filter({ hasText: bookingRef }).locator('h3.font-semibold')).toHaveText(titleEvent)


    //Step 8 — Verify seat reduction

    await page.goto('https://eventhub.rahulshettyacademy.com/events')
    await page.locator('[data-testid="event-card"]').nth(1).isVisible()
    await page.locator('[data-testid="event-card"]').filter({ hasText: titleEvent }).isVisible()
    const text1 = await page.locator('[data-testid="event-card"]').filter({ hasText: titleEvent })
        .locator('.p-4 .flex .text-xs').innerText()
    const seatsAfterBooking = parseInt(text1.split(" s")[0])
    console.log(seatsAfterBooking)
    expect(seatsAfterBooking).toBe(seatsBeforeBooking -1)

})