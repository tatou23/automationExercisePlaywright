import { expect , Locator, Page } from '@playwright/test';

export class ProductDetailsPage {
    // Define selectors
    readonly page: Page;
    readonly viewProductButton: Locator;
    readonly productPicture: Locator;
    readonly productName: Locator;
    readonly productCategory: Locator;
    readonly productPrice: Locator;
    readonly productAvailability: Locator;
    readonly productCondition: Locator;
    readonly productBrand: Locator;
    readonly addToCartButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.viewProductButton = page.getByRole('link', { name: 'View Product' }).first();
        this.productPicture = page.getByRole('img', { name: 'ecommerce website products'}).first();
        this.productName = page.locator('.product-information h2');
        this.productCategory = page.locator('.product-information p').first();
        this.productPrice = page.locator('.product-information span span');
        this.productAvailability = page.locator('.product-information p').nth(1);
        this.productCondition = page.locator('.product-information p').nth(2);
        this.productBrand = page.locator('.product-information p').nth(3);
        this.addToCartButton = page.getByRole('button', { name: 'Add to cart' });
    }
    async navigateToProductDetails() {
        await this.viewProductButton.click();
        await expect (this.page).toHaveURL(/\/product_details\/\d+$/);
    }

    async checkProductDetails() {
        await expect(this.productPicture).toBeVisible();
        await expect(this.productName).toBeVisible();
        await expect(this.productCategory).toBeVisible();
        await expect(this.productPrice).toBeVisible();
        await expect(this.productAvailability).toBeVisible();
        await expect(this.productCondition).toBeVisible();
        await expect(this.productBrand).toBeVisible();
        await expect(this.addToCartButton).toBeVisible();
    }

    async verifyProductDetails(expected: { name: string; category: string; price: string; availability: string; condition: string; brand: string; }) {
        await expect(this.productName).toHaveText(expected.name);
        await expect(this.productCategory).toHaveText(`Category: ${expected.category}`);
        await expect(this.productPrice).toHaveText(expected.price);
        await expect(this.productAvailability).toHaveText(`Availability: ${expected.availability}`);
        await expect(this.productCondition).toHaveText(`Condition: ${expected.condition}`);
        await expect(this.productBrand).toHaveText(`Brand: ${expected.brand}`);
        await expect(this.addToCartButton).toHaveText('Add to cart');
    }
}