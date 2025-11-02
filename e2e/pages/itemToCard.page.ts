import { expect, type Locator, type Page } from '@playwright/test';

export class ItemToCardPage {
    readonly page: Page;
    readonly productCards: Locator;
    readonly continueShoppingBtn: Locator;
    readonly viewCartLink: Locator
    //readonly addToCartBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productCards = page.locator('.product-image-wrapper');
        this.continueShoppingBtn = page.getByRole('button', { name: /continue shopping/i });
        this.viewCartLink = page.getByRole('link', { name: /view cart/i });
    } 

    async goto() {
        await this.page.goto('/products', { waitUntil: 'domcontentloaded' });
    }

    // Add nth item to cart from product list overlay
    async addNthItemToCart(n = 0) {
        const card = this.productCards.nth(n);
        const viewProduct = card.getByRole('link', { name: /view product/i });

        // 1) Ensure card is in view and hover it to reveal overlay
        await card.scrollIntoViewIfNeeded();
        await viewProduct.waitFor({ state: 'visible', timeout: 1200 });
        await card.hover(); // triggers CSS :hover

        // 2) Find the overlay button *inside the same card*
        const overlayAddBtn = card.getByRole('link', { name: /add to cart/i });

        // 3) Test the overlay path first
    
        await overlayAddBtn.waitFor({ state: 'visible', timeout: 1200 });
        await overlayAddBtn.click();

        // 4) Handle the confirmation modal
        await expect(this.continueShoppingBtn).toBeVisible({ timeout: 5000 });
        //await expect(this.viewCartLink).toBeVisible();
    }

    // Add nth item to cart from product details page

    async addItemToCardPDPDetail(n = 0) {

        const card = this.productCards.nth(n);
        
        // Open the PDP and add there
        const viewProduct = card.getByRole('link', { name: /view product/i });
        await viewProduct.click();

        const pdpAddBtn = this.page.getByRole('button', { name: /add to cart/i }).or(
            this.page.getByRole('link', { name: /add to cart/i })
        );
        await pdpAddBtn.waitFor({ state: 'visible' });
        await pdpAddBtn.click();

        // 4) Handle the confirmation modal
        await expect(this.continueShoppingBtn).toBeVisible({ timeout: 5000 });
        //await expect(this.viewCartLink).toBeVisible();
    }
}