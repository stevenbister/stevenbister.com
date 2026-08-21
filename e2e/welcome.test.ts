import { expect, test } from '@playwright/test';

test.describe('Welcome', { tag: '@smoke' }, () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('home page has expected h1', async ({ page }) => {
		await expect(page.getByRole('heading', { level: 1 })).toHaveText('Welcome to SvelteKit');
	});
});
