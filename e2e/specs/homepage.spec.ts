import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test.describe('Homepage tests', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigate();
    });

    test('shows logo and highlights Home as active @smoke @ui', async () => {
        await expect(homePage.logo).toBeVisible();
        await expect (homePage.homeMenu).toBeVisible();
        await expect(homePage.homeMenu).toHaveCSS('color', 'rgb(255, 165, 0)');
    });
});