import { test, expect } from '@playwright/test';

test('has check', async ({ page }) => {
  await page.goto('https://www.youtube.com/watch?v=Rl1yzNK9YPU');

  // Expect a title "to contain" a substring.
});

test('has check 2', async ({ page }) => {
  await page.goto('https://www.google.com');

  // Expect a title "to contain" a substring.
});
