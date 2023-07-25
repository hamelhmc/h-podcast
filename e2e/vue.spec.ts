import { expect, test } from '@playwright/test'

// See here how to get started:
// https://playwright.dev/docs/intro
test('Found header', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('header > a > h1')).toHaveText('Podcaster')
})
