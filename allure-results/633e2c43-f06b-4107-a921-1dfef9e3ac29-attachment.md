# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: assignment2.spec.ts >> Group ticket booking is NOT eligible for refund
- Location: tests\assignment2.spec.ts:75:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'View My Bookings' })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e4]:
      - link "EventHub" [ref=e5] [cursor=pointer]:
        - /url: /
        - img [ref=e7]
        - generic [ref=e9]: EventHub
      - generic [ref=e10]:
        - link "Home" [ref=e11] [cursor=pointer]:
          - /url: /
        - link "Events" [ref=e12] [cursor=pointer]:
          - /url: /events
        - link "My Bookings" [ref=e13] [cursor=pointer]:
          - /url: /bookings
        - link "API Docs" [ref=e14] [cursor=pointer]:
          - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
        - button "Admin" [ref=e16] [cursor=pointer]:
          - text: Admin
          - img [ref=e17]
        - generic [ref=e19]:
          - generic "testuser267@gmail.com" [ref=e20]
          - button "Logout" [ref=e21] [cursor=pointer]
  - main [ref=e22]:
    - generic [ref=e23]:
      - navigation [ref=e24]:
        - link "Events" [ref=e25] [cursor=pointer]:
          - /url: /events
        - generic [ref=e26]: /
        - generic [ref=e27]: Dilli Diwali Mela
      - generic [ref=e28]:
        - generic [ref=e29]:
          - img "Dilli Diwali Mela" [ref=e31]
          - generic [ref=e32]:
            - generic [ref=e33]:
              - generic [ref=e34]: Festival
              - generic [ref=e35]: Featured
            - heading "Dilli Diwali Mela" [level=1] [ref=e36]
            - generic [ref=e37]:
              - img [ref=e38]
              - text: This is a featured event — always available for practice
            - generic [ref=e40]:
              - generic [ref=e41]:
                - generic [ref=e42]: 📅
                - generic [ref=e43]:
                  - paragraph [ref=e44]: Date
                  - paragraph [ref=e45]: Tuesday, 20 October
              - generic [ref=e46]:
                - generic [ref=e47]: 🕐
                - generic [ref=e48]:
                  - paragraph [ref=e49]: Time
                  - paragraph [ref=e50]: 10:30 pm
              - generic [ref=e51]:
                - generic [ref=e52]: 📍
                - generic [ref=e53]:
                  - paragraph [ref=e54]: Venue
                  - paragraph [ref=e55]: Pragati Maidan Exhibition Grounds
              - generic [ref=e56]:
                - generic [ref=e57]: 🌆
                - generic [ref=e58]:
                  - paragraph [ref=e59]: City
                  - paragraph [ref=e60]: Delhi
              - generic [ref=e61]:
                - generic [ref=e62]: 🎫
                - generic [ref=e63]:
                  - paragraph [ref=e64]: Available
                  - paragraph [ref=e65]: 9985 / 10000 seats
              - generic [ref=e66]:
                - generic [ref=e67]: 💰
                - generic [ref=e68]:
                  - paragraph [ref=e69]: Price per ticket
                  - paragraph [ref=e70]: $300
            - generic [ref=e71]:
              - heading "About this event" [level=2] [ref=e72]
              - paragraph [ref=e73]: Celebrate the Festival of Lights at the grandest Diwali Mela in North India. Enjoy 200+ stalls of artisanal crafts, street food, folk performances, fireworks, and cultural showcases spanning three vibrant evenings.
        - generic [ref=e75]:
          - generic [ref=e76]:
            - heading "Book Tickets" [level=2] [ref=e77]
            - generic [ref=e78]: $300
          - paragraph [ref=e79]: per ticket
          - generic [ref=e80]:
            - generic [ref=e81]:
              - generic [ref=e82]: Tickets
              - generic [ref=e83]:
                - button "−" [ref=e84] [cursor=pointer]
                - generic [ref=e85]: "3"
                - button "+" [ref=e86] [cursor=pointer]
                - generic [ref=e87]: (max 10)
            - generic [ref=e88]:
              - generic [ref=e89]: Full Name*
              - textbox "Full Name*" [ref=e90]:
                - /placeholder: Your full name
                - text: Test User
            - generic [ref=e91]:
              - generic [ref=e92]: Email*
              - textbox "Email*" [ref=e93]:
                - /placeholder: you@email.com
                - text: testUser@gmail.com
            - generic [ref=e94]:
              - generic [ref=e95]: Phone Number*
              - textbox "Phone Number*" [ref=e96]:
                - /placeholder: +91 98765 43210
                - text: +91 98765 43210
            - generic [ref=e97]:
              - generic [ref=e98]:
                - generic [ref=e99]: $300 × 3 tickets
                - generic [ref=e100]: $900
              - generic [ref=e101]:
                - generic [ref=e102]: Total
                - generic [ref=e103]: $900
            - button "Confirm Booking" [ref=e104] [cursor=pointer]
  - contentinfo [ref=e105]:
    - generic [ref=e106]:
      - generic [ref=e107]:
        - generic [ref=e108]:
          - heading "Rahul Shetty Academy" [level=3] [ref=e109]
          - paragraph [ref=e110]: India's leading QA automation training academy — empowering engineers to build real-world testing skills.
        - generic [ref=e111]:
          - heading "Popular Courses" [level=3] [ref=e112]
          - list [ref=e113]:
            - listitem [ref=e114]:
              - link "Selenium WebDriver with Java" [ref=e115] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e116]:
              - link "Playwright with JavaScript" [ref=e117] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e118]:
              - link "RestAssured API Testing" [ref=e119] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e120]:
              - link "Cypress End-to-End Testing" [ref=e121] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e122]:
              - link "Appium Mobile Testing" [ref=e123] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
        - generic [ref=e124]:
          - heading "QA Job Hiring Platform" [level=3] [ref=e125]
          - paragraph [ref=e126]: Get hired faster — take skill assessments trusted by top QA employers worldwide.
          - link "techsmarthire.com →" [ref=e127] [cursor=pointer]:
            - /url: https://techsmarthire.com
        - generic [ref=e128]:
          - heading "EventHub Practice App" [level=3] [ref=e129]
          - list [ref=e130]:
            - listitem [ref=e131]:
              - link "Browse Events" [ref=e132] [cursor=pointer]:
                - /url: /events
            - listitem [ref=e133]:
              - link "My Bookings" [ref=e134] [cursor=pointer]:
                - /url: /bookings
            - listitem [ref=e135]:
              - link "Manage Events" [ref=e136] [cursor=pointer]:
                - /url: /admin/events
            - listitem [ref=e137]:
              - link "API Documentation" [ref=e138] [cursor=pointer]:
                - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
      - generic [ref=e139]:
        - paragraph [ref=e140]: © 2026 Rahul Shetty Academy. All rights reserved.
        - generic [ref=e141]:
          - link "rahulshettyacademy.com →" [ref=e142] [cursor=pointer]:
            - /url: https://rahulshettyacademy.com
          - link "techsmarthire.com →" [ref=e143] [cursor=pointer]:
            - /url: https://techsmarthire.com
  - alert [ref=e144]
```

# Test source

```ts
  1   | import { test, expect, Page } from '@playwright/test'
  2   | 
  3   | async function loginAndGoToBooking(page: Page) {
  4   | 
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
  40  |     await page.getByRole('link', { name: 'View My Bookings' }).click()
  41  |     await expect(page).toHaveURL('https://eventhub.rahulshettyacademy.com/bookings')
  42  | 
  43  |     await page.getByRole('button', { name: 'View Details' }).first().click()
  44  |     await expect(page.getByText('Booking Information')).toBeVisible()
  45  | 
  46  |     //Step 4 — Validate booking ref
  47  | 
  48  |     const bookingRef = (await page.locator('.flex span.font-mono').first().innerText()).trim()
  49  |     console.log(bookingRef)
  50  | 
  51  |     const eventTitle = await page.locator('h1').first().innerText()
  52  |     console.log(eventTitle)
  53  | 
  54  |     expect(bookingRef.charAt(0)).toBe(eventTitle.charAt(0))
  55  | 
  56  |     //Step 5 — Check refund eligibility
  57  | 
  58  |     await page.getByRole('button', { name: 'Check eligibility for refund?' }).click()
  59  | 
  60  |     // Immediately visible
  61  |     await expect(page.locator('#refund-spinner')).toBeVisible();
  62  | 
  63  |     // Gone within 6 seconds
  64  |     await expect(page.locator('#refund-spinner')).toBeHidden({
  65  |         timeout: 6000
  66  |     });
  67  | 
  68  |     //Step 6 — Validate result
  69  | 
  70  |     await expect(page.locator('#refund-result')).toBeVisible()
  71  |     await expect(page.locator('#refund-result')).toHaveText('Eligible for refund. Single-ticket bookings qualify for a full refund.')
  72  | 
  73  | })
  74  | 
  75  | test('Group ticket booking is NOT eligible for refund', async ({ page }) => {
  76  | 
  77  |     await loginAndGoToBooking(page)
  78  | 
  79  |     //Step 2 — Book first event with 1 ticket (default)
  80  | 
  81  |     await page.getByRole('link', { name: 'Browse Events →' }).click()
  82  | 
  83  |     await page.locator('[data-testid="event-card"]').first().locator('#book-now-btn').click()
  84  | 
  85  |     await page.getByRole('button', {name: '+'}).click({clickCount: 2});
  86  | 
  87  |     await page.getByLabel('Full Name').fill('Test User')
  88  |     await page.locator('#customer-email').fill('testUser@gmail.com')
  89  |     await page.getByLabel('phone').fill('+91 98765 43210')
  90  |     await page.locator('.confirm-booking-btn').click()
  91  | 
  92  |     //Step 3 — Navigate to booking detail
  93  | 
> 94  |     await page.getByRole('link', { name: 'View My Bookings' }).click()
      |                                                                ^ Error: locator.click: Test timeout of 30000ms exceeded.
  95  |     await expect(page).toHaveURL('https://eventhub.rahulshettyacademy.com/bookings')
  96  | 
  97  |     await page.getByRole('button', { name: 'View Details' }).first().click()
  98  |     await expect(page.getByText('Booking Information')).toBeVisible()
  99  | 
  100 |     //Step 4 — Validate booking ref
  101 | 
  102 |     const bookingRef = (await page.locator('.flex span.font-mono').first().innerText()).trim()
  103 |     console.log(bookingRef)
  104 | 
  105 |     const eventTitle = await page.locator('h1').first().innerText()
  106 |     console.log(eventTitle)
  107 | 
  108 |     expect(bookingRef.charAt(0)).toBe(eventTitle.charAt(0))
  109 | 
  110 |     //Step 5 — Check refund eligibility
  111 | 
  112 |     await page.getByRole('button', { name: 'Check eligibility for refund?' }).click()
  113 | 
  114 |     // Immediately visible
  115 |     await expect(page.locator('#refund-spinner')).toBeVisible();
  116 | 
  117 |     // Gone within 6 seconds
  118 |     await expect(page.locator('#refund-spinner')).toBeHidden({
  119 |         timeout: 6000
  120 |     });
  121 | 
  122 |     //Step 6 — Validate result
  123 | 
  124 |     await expect(page.locator('#refund-result')).toBeVisible()
  125 |     await expect(page.locator('#refund-result')).toHaveText('Not eligible for refund. Group bookings (3 tickets) are non-refundable.')
  126 | 
  127 | })
```