import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
    // Define selectors
    readonly page: Page;
    readonly logo : Locator;
    readonly homeMenu : Locator;

    constructor(page: Page) {
        this.page = page;
        this.logo = page.getByRole('img', { name: 'Website for automation practice' });
        this.homeMenu = page.getByRole('link', { name: 'Home' });
    }
    // rely on baseURL from config
    async navigate() {
        await this.page.goto('/',{ waitUntil: 'domcontentloaded' }); 
        await expect (this.page).toHaveTitle('Automation Exercise');
        await expect (this.logo).toBeVisible();

    }
}