import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { ProductsPage } from '../pages/productsList.page';


test.describe('Product list test', () => {
    let homePage: HomePage;
    let productsPage: ProductsPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        productsPage = new ProductsPage(page);
        await homePage.navigate();
    });

    test('shows logo and highlights Home as active @smoke @ui', async () => {
        await expect(homePage.logo).toBeVisible();
        await expect (homePage.homeMenu).toBeVisible();
        await expect(homePage.homeMenu).toHaveCSS('color', 'rgb(255, 165, 0)');
    });

    test('navigate to Product list and check products visibility @smoke @ui', async () => {
        await productsPage.navigate();
        await productsPage.checkProductList();
    }); 
});