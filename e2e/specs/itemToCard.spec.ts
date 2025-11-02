import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { ProductsPage } from '../pages/productsList.page';
import { ItemToCardPage } from '../pages/itemToCard.page';

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

    test('add item to cart from product page overlay @smoke @ui', async ({ page }) => {
        const productsPage = new ProductsPage(page);
        const itemToCardPage = new ItemToCardPage(page);
        await productsPage.navigate();
        await productsPage.checkProductList();
        await itemToCardPage.addNthItemToCart(0);
    });  
    
    test('add item to cart from product details page @smoke @ui', async ({ page }) => {
        const productsPage = new ProductsPage(page);
        const itemToCardPage = new ItemToCardPage(page);
        await productsPage.navigate();
        await productsPage.checkProductList();
        await itemToCardPage.addItemToCardPDPDetail(0);
    }); 
});