import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { ProductsPage } from '../pages/productsList.page';
import { ProductDetailsPage } from '../pages/productDetails.page';

test.describe('Product details test', () => {
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
    test('navigate to Product details and check product details visibility @smoke @ui', async ({ page }) => {
        const productsPage = new ProductsPage(page);
        const productDetailsPage = new ProductDetailsPage(page);
        await productsPage.navigate();
        await productsPage.checkProductList();
        await productDetailsPage.navigateToProductDetails();
        await productDetailsPage.checkProductDetails();
        await productDetailsPage.verifyProductDetails({
            name: 'Blue Top',
            category: 'Women > Tops',
            price: 'Rs. 500',
            availability: 'In Stock',
            condition: 'New',
            brand: 'Polo'
        }); 
    });

});