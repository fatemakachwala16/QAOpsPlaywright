// @ts-check
import {defineConfig, devices} from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
  
    timeout: 5000
  },
  retries: 1,
  workers: 3,
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  projects: [
    {
      name:'chrome',
  use: {

    browserName : 'chromium',
    headless : false,
    //viewport : {width: 720, height: 720},
    //...devices['Galaxy S5'],
    video : 'retain-on-failure',
    ignoreHTTPSErrors : true,
    permissions:['geolocation'],
    screenshot : 'on',
    trace : 'on',//off,on
    },
  },
  {
    name:'webkitprofile',
use: {

  browserName : 'webkit',
  headless : false,
  screenshot : 'on',
  trace : 'on',//off,on
  ...devices['iPhone 11']
  },
}
]


});

