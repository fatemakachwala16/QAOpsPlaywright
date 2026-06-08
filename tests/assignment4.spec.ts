import { test, expect, request, Page } from '@playwright/test'


const BASE_URL = 'https://eventhub.rahulshettyacademy.com'
const API_URL = 'https://api.eventhub.rahulshettyacademy.com/api'
let token: any
let eventId: any
let yahooBookingId: any

const dataPayload = {
    email: "testuser267@yahoo.com",
    password: "Test@1234"
}

async function loginAs(page: Page) {

    await page.goto(BASE_URL);

    await page.getByPlaceholder('you@email.com').fill('testuser267@gmail.com');
    await page.locator('#password').fill('Test@1234');

    await page.locator('#login-btn').click()
    await page.getByRole('link', { name: 'Browse Events →' }).waitFor()
}

test('API', async ({ page }) => {

    //Login as Yahoo user via API 
    const apiContext = await request.newContext()
    const loginResponse = await apiContext.post(`${API_URL}/auth/login`,
        {
            data: dataPayload
        }
    )

    expect(loginResponse.ok()).toBeTruthy()
    const loginJSONResponse = await loginResponse.json()
    token = loginJSONResponse.token
    console.log(token)

    //Step 2 — Fetch events via API to get a valid event ID

    const eventResponse = await apiContext.get(`${API_URL}/events`,
        {

            headers:
            {
                Authorization: `Bearer ${token}`
            }
        }
    )

    expect(eventResponse.ok()).toBeTruthy()
    const eventJSONResponse = await eventResponse.json()
    eventId = eventJSONResponse.data[0].id
    console.log(eventId)

    //Step 3 — Create a booking via API as Yahoo user

    const bookingPayload = {
        eventId: `${eventId}`,
        customerName: "Yahoo User",
        customerEmail: "testuser267@yahoo.com",
        customerPhone: "+91-9876543210",
        quantity: 1
    }

    const bookingResponse = await apiContext.post(`${API_URL}/bookings`,
        {
            data: bookingPayload,
            headers:
            {
                Authorization: `Bearer ${token}`
            }
        }

    )

    expect(bookingResponse.ok()).toBeTruthy()
    const bookingJSONResponse = await bookingResponse.json()
    yahooBookingId = bookingJSONResponse.data.id
    console.log(bookingJSONResponse.data.id)

    //Step 4 — Login as Gmail user via browser UI
    await loginAs(page)

    //Step 5 — Navigate to Yahoo's booking URL as Gmail user

    await page.goto(`${BASE_URL}/bookings/${yahooBookingId}`, { waitUntil: 'networkidle' })

    await expect(page.getByText('Access Denied')).toBeVisible()
    await expect(page.getByText('You are not authorized to view this booking.')).toBeVisible()

})



