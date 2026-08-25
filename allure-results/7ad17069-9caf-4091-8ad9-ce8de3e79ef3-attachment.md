# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: OrangeHRM.spec.js >> OrangeHRM login
- Location: tests\OrangeHRM.spec.js:4:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { OrangeHRMLogin} from '../pages/OrangeHRMLogin';
  3  | 
  4  | test('OrangeHRM login', async ({ page }) => {
  5  |     const orangeHRM = new OrangeHRMLogin(page);
  6  | 
  7  |     await orangeHRM.gotoLoginPage();
  8  |     await page.waitForTimeout(5000);
> 9  |     expect(await orangeHRM.isLogoVisible()).toBe(true);
     |                                             ^ Error: expect(received).toBe(expected) // Object.is equality
  10 | 
  11 |     await orangeHRM.login('Admin', 'admin123');
  12 | });
```