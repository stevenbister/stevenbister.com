import { expect, test } from '@playwright/test';

test('homepage has title and h1', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/new remix app/i);

    // create a locator
    const heading = page.getByRole('heading', {
        level: 1,
        name: 'Hello world',
    });

    await expect(heading).toBeVisible();
});
