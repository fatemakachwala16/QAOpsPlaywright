# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: assignment4.spec.ts >> API
- Location: tests\assignment4.spec.ts:26:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1  | import { test, expect, request, Page } from '@playwright/test'
  2  | 
  3  | 
  4  | const BASE_URL = 'https://eventhub.rahulshettyacademy.com'
  5  | const API_URL = 'https://api.eventhub.rahulshettyacademy.com/api'
  6  | let token: any
  7  | let eventId: any
  8  | let yahooBookingId: any
  9  | 
  10 | const dataPayload = {
  11 |     email: "testuser267@yahoo.com",
  12 |     password: "Test@1234"
  13 | }
  14 | 
  15 | async function loginAs(page: Page) {
  16 | 
  17 |     await page.goto(BASE_URL);
  18 | 
  19 |     await page.getByPlaceholder('you@email.com').fill('testuser267@gmail.com');
  20 |     await page.locator('#password').fill('Test@1234');
  21 | 
  22 |     await page.locator('#login-btn').click()
  23 |     await page.getByRole('link', { name: 'Browse Events →' }).waitFor()
  24 | }
  25 | 
  26 | test('API', async ({ page }) => {
  27 | 
  28 |     //Login as Yahoo user via API 
  29 |     const apiContext = await request.newContext()
  30 |     const loginResponse = await apiContext.post(`${API_URL}/auth/login`,
  31 |         {
  32 |             data: dataPayload
  33 |         }
  34 |     )
  35 | 
  36 |     expect(loginResponse.ok()).toBeTruthy()
  37 |     const loginJSONResponse = await loginResponse.json()
  38 |     token = loginJSONResponse.token
  39 |     console.log(token)
  40 | 
  41 |     //Step 2 — Fetch events via API to get a valid event ID
  42 | 
  43 |     const eventResponse = await apiContext.get(`${API_URL}/events`,
  44 |         {
  45 | 
  46 |             headers:
  47 |             {
  48 |                 Authorization: `Bearer ${token}`
  49 |             }
  50 |         }
  51 |     )
  52 | 
  53 |     expect(eventResponse.ok()).toBeTruthy()
  54 |     const eventJSONResponse = await eventResponse.json()
  55 |     eventId = eventJSONResponse.data[0].id
  56 |     console.log(eventId)
  57 | 
  58 |     //Step 3 — Create a booking via API as Yahoo user
  59 | 
  60 |     const bookingPayload = {
  61 |         eventId: `${eventId}`,
  62 |         customerName: "Yahoo User",
  63 |         customerEmail: "testuser267@yahoo.com",
  64 |         customerPhone: "+91-9876543210",
  65 |         quantity: 1
  66 |     }
  67 | 
  68 |     const bookingResponse = await apiContext.post(`${API_URL}/bookings`,
  69 |         {
  70 |             data: bookingPayload,
  71 |             headers:
  72 |             {
  73 |                 Authorization: `Bearer ${token}`
  74 |             }
  75 |         }
  76 | 
  77 |     )
  78 | 
> 79 |     expect(bookingResponse.ok()).toBeTruthy()
     |                                  ^ Error: expect(received).toBeTruthy()
  80 |     const bookingJSONResponse = await bookingResponse.json()
  81 |     yahooBookingId = bookingJSONResponse.data.id
  82 |     console.log(bookingJSONResponse.data.id)
  83 | 
  84 |     //Step 4 — Login as Gmail user via browser UI
  85 |     await loginAs(page)
  86 | 
  87 |     //Step 5 — Navigate to Yahoo's booking URL as Gmail user
  88 | 
  89 |     await page.goto(`${BASE_URL}/bookings/${yahooBookingId}`, { waitUntil: 'networkidle' })
  90 | 
  91 |     await expect(page.getByText('Access Denied')).toBeVisible()
  92 |     await expect(page.getByText('You are not authorized to view this booking.')).toBeVisible()
  93 | 
  94 | })
  95 | 
  96 | 
  97 | 
  98 | 
```