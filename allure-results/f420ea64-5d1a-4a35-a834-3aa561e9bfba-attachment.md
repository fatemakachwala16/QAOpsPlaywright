# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: assignment2.spec.ts >> Group ticket booking is NOT eligible for refund
- Location: tests\assignment2.spec.ts:82:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: 'View My Bookings' })
Expected: visible
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for getByRole('link', { name: 'View My Bookings' })

```

```yaml
- navigation:
  - link "EventHub":
    - /url: /
    - img
    - text: EventHub
  - link "Home":
    - /url: /
  - link "Events":
    - /url: /events
  - link "My Bookings":
    - /url: /bookings
  - link "API Docs":
    - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
  - button "Admin":
    - text: Admin
    - img
  - text: testuser267@gmail.com
  - button "Logout"
- main:
  - navigation:
    - link "Events":
      - /url: /events
    - text: / Dilli Diwali Mela
  - img "Dilli Diwali Mela"
  - text: Festival Featured
  - heading "Dilli Diwali Mela" [level=1]
  - img
  - text: This is a featured event — always available for practice 📅
  - paragraph: Date
  - paragraph: Tuesday, 20 October
  - text: 🕐
  - paragraph: Time
  - paragraph: 10:30 pm
  - text: 📍
  - paragraph: Venue
  - paragraph: Pragati Maidan Exhibition Grounds
  - text: 🌆
  - paragraph: City
  - paragraph: Delhi
  - text: 🎫
  - paragraph: Available
  - paragraph: 9985 / 10000 seats
  - text: 💰
  - paragraph: Price per ticket
  - paragraph: $300
  - heading "About this event" [level=2]
  - paragraph: Celebrate the Festival of Lights at the grandest Diwali Mela in North India. Enjoy 200+ stalls of artisanal crafts, street food, folk performances, fireworks, and cultural showcases spanning three vibrant evenings.
  - heading "Book Tickets" [level=2]
  - text: $300
  - paragraph: per ticket
  - text: Tickets
  - button "−"
  - text: "3"
  - button "+"
  - text: (max 10) Full Name*
  - textbox "Full Name*":
    - /placeholder: Your full name
    - text: Test User
  - text: Email*
  - textbox "Email*":
    - /placeholder: you@email.com
    - text: testUser@gmail.com
  - text: Phone Number*
  - textbox "Phone Number*":
    - /placeholder: +91 98765 43210
    - text: +91 98765 43210
  - text: $300 × 3 tickets $900 Total $900
  - button "Confirm Booking"
- contentinfo:
  - heading "Rahul Shetty Academy" [level=3]
  - paragraph: India's leading QA automation training academy — empowering engineers to build real-world testing skills.
  - heading "Popular Courses" [level=3]
  - list:
    - listitem:
      - link "Selenium WebDriver with Java":
        - /url: https://rahulshettyacademy.com
    - listitem:
      - link "Playwright with JavaScript":
        - /url: https://rahulshettyacademy.com
    - listitem:
      - link "RestAssured API Testing":
        - /url: https://rahulshettyacademy.com
    - listitem:
      - link "Cypress End-to-End Testing":
        - /url: https://rahulshettyacademy.com
    - listitem:
      - link "Appium Mobile Testing":
        - /url: https://rahulshettyacademy.com
  - heading "QA Job Hiring Platform" [level=3]
  - paragraph: Get hired faster — take skill assessments trusted by top QA employers worldwide.
  - link "techsmarthire.com →":
    - /url: https://techsmarthire.com
  - heading "EventHub Practice App" [level=3]
  - list:
    - listitem:
      - link "Browse Events":
        - /url: /events
    - listitem:
      - link "My Bookings":
        - /url: /bookings
    - listitem:
      - link "Manage Events":
        - /url: /admin/events
    - listitem:
      - link "API Documentation":
        - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
  - paragraph: © 2026 Rahul Shetty Academy. All rights reserved.
  - link "rahulshettyacademy.com →":
    - /url: https://rahulshettyacademy.com
  - link "techsmarthire.com →":
    - /url: https://techsmarthire.com
- alert
```

# Test source

```ts
  5   |     const BASE_URL = 'https://eventhub.rahulshettyacademy.com'
  6   |     // Login
  7   |     await page.goto(BASE_URL);
  8   | 
  9   |     await page.getByPlaceholder('you@email.com').fill('testuser267@gmail.com');
  10  |     await page.locator('#password').fill('Test@1234');
  11  | 
  12  |     await page.locator('#login-btn').click()
  13  | 
  14  |     // Confirm Browse Events link is visible
  15  |     await page.getByRole('link', { name: 'Browse Events →' }).waitFor()
  16  | 
  17  |     await expect(
  18  |         page.getByRole('link', {
  19  |             name: 'Browse Events →'
  20  |         })
  21  |     ).toBeVisible();
  22  | }
  23  | test('Single ticket booking is eligible for refund', async ({ page }) => {
  24  | 
  25  |     await loginAndGoToBooking(page);
  26  | 
  27  |     //Step 2 — Book first event with 1 ticket (default)
  28  | 
  29  |     await page.getByRole('link', { name: 'Browse Events →' }).click()
  30  | 
  31  |     await page.locator('[data-testid="event-card"]').first().locator('#book-now-btn').click()
  32  | 
  33  |     await page.getByLabel('Full Name').fill('Test User')
  34  |     await page.locator('#customer-email').fill('testUser@gmail.com')
  35  |     await page.getByLabel('phone').fill('+91 98765 43210')
  36  |     await page.locator('.confirm-booking-btn').click()
  37  | 
  38  |     //Step 3 — Navigate to booking detail
  39  | 
  40  |     await page.waitForLoadState('networkidle');
  41  | 
  42  |     await expect(
  43  |         page.getByRole('link', { name: 'View My Bookings' })
  44  |     ).toBeVisible({ timeout: 20000 });
  45  | 
  46  |     await page.getByRole('link', { name: 'View My Bookings' }).click();
  47  |     //await page.getByRole('link', { name: 'View My Bookings' }).click()
  48  |     await expect(page).toHaveURL('https://eventhub.rahulshettyacademy.com/bookings')
  49  | 
  50  |     await page.getByRole('button', { name: 'View Details' }).first().click()
  51  |     await expect(page.getByText('Booking Information')).toBeVisible()
  52  | 
  53  |     //Step 4 — Validate booking ref
  54  | 
  55  |     const bookingRef = (await page.locator('.flex span.font-mono').first().innerText()).trim()
  56  |     console.log(bookingRef)
  57  | 
  58  |     const eventTitle = await page.locator('h1').first().innerText()
  59  |     console.log(eventTitle)
  60  | 
  61  |     expect(bookingRef.charAt(0)).toBe(eventTitle.charAt(0))
  62  | 
  63  |     //Step 5 — Check refund eligibility
  64  | 
  65  |     await page.getByRole('button', { name: 'Check eligibility for refund?' }).click()
  66  | 
  67  |     // Immediately visible
  68  |     await expect(page.locator('#refund-spinner')).toBeVisible();
  69  | 
  70  |     // Gone within 6 seconds
  71  |     await expect(page.locator('#refund-spinner')).toBeHidden({
  72  |         timeout: 6000
  73  |     });
  74  | 
  75  |     //Step 6 — Validate result
  76  | 
  77  |     await expect(page.locator('#refund-result')).toBeVisible()
  78  |     await expect(page.locator('#refund-result')).toHaveText('Eligible for refund. Single-ticket bookings qualify for a full refund.')
  79  | 
  80  | })
  81  | 
  82  | test('Group ticket booking is NOT eligible for refund', async ({ page }) => {
  83  | 
  84  |     await loginAndGoToBooking(page)
  85  | 
  86  |     //Step 2 — Book first event with 1 ticket (default)
  87  | 
  88  |     await page.getByRole('link', { name: 'Browse Events →' }).click()
  89  | 
  90  |     await page.locator('[data-testid="event-card"]').first().locator('#book-now-btn').click()
  91  | 
  92  |     await page.getByRole('button', { name: '+' }).click({ clickCount: 2 });
  93  | 
  94  |     await page.getByLabel('Full Name').fill('Test User')
  95  |     await page.locator('#customer-email').fill('testUser@gmail.com')
  96  |     await page.getByLabel('phone').fill('+91 98765 43210')
  97  |     await page.locator('.confirm-booking-btn').click()
  98  | 
  99  |     //Step 3 — Navigate to booking detail
  100 | 
  101 |     await page.waitForLoadState('networkidle');
  102 | 
  103 |     await expect(
  104 |         page.getByRole('link', { name: 'View My Bookings' })
> 105 |     ).toBeVisible({ timeout: 20000 });
      |       ^ Error: expect(locator).toBeVisible() failed
  106 | 
  107 |     await page.getByRole('link', { name: 'View My Bookings' }).click();
  108 | 
  109 |     //await page.getByRole('link', { name: 'View My Bookings' }).click()
  110 |     await expect(page).toHaveURL('https://eventhub.rahulshettyacademy.com/bookings')
  111 | 
  112 |     await page.getByRole('button', { name: 'View Details' }).first().click()
  113 |     await expect(page.getByText('Booking Information')).toBeVisible()
  114 | 
  115 |     //Step 4 — Validate booking ref
  116 | 
  117 |     const bookingRef = (await page.locator('.flex span.font-mono').first().innerText()).trim()
  118 |     console.log(bookingRef)
  119 | 
  120 |     const eventTitle = await page.locator('h1').first().innerText()
  121 |     console.log(eventTitle)
  122 | 
  123 |     expect(bookingRef.charAt(0)).toBe(eventTitle.charAt(0))
  124 | 
  125 |     //Step 5 — Check refund eligibility
  126 | 
  127 |     await page.getByRole('button', { name: 'Check eligibility for refund?' }).click()
  128 | 
  129 |     // Immediately visible
  130 |     await expect(page.locator('#refund-spinner')).toBeVisible();
  131 | 
  132 |     // Gone within 6 seconds
  133 |     await expect(page.locator('#refund-spinner')).toBeHidden({
  134 |         timeout: 6000
  135 |     });
  136 | 
  137 |     //Step 6 — Validate result
  138 | 
  139 |     await expect(page.locator('#refund-result')).toBeVisible()
  140 |     await expect(page.locator('#refund-result')).toHaveText('Not eligible for refund. Group bookings (3 tickets) are non-refundable.')
  141 | 
  142 | })
```