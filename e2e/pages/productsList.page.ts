import { expect, type Locator, Page } from '@playwright/test';

export class ProductsPage {
    // Define selectors
    readonly page: Page;
    readonly productsMenu: Locator;
    readonly productsHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productsMenu = page.getByRole('link', { name: 'Products' });
        this.productsHeader = page.getByRole('heading', { name: 'ALL PRODUCTS' });
    }

    async navigate() {
        await this.page.goto('/products', { waitUntil: 'domcontentloaded' });
        await expect(this.page).toHaveTitle('Automation Exercise - All Products');
        await expect(this.page).toHaveURL(/\/products$/);
        await expect(this.productsHeader).toBeVisible();
    }

    async checkProductList() {
        const list = await this.page.locator('.features_items').count();
        expect(list).toBeGreaterThan(0);
    }
}