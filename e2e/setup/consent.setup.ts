import { chromium } from '@playwright/test';
import { dismissConsent } from '../helpers/consent';

async function setupConsent() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(process.env.BASE_URL || 'https://automationexercise.com', { waitUntil: 'domcontentloaded' });
  await dismissConsent(page);                    // accept once
  await page.context().storageState({ path: 'consent.json' });  // save state
  await browser.close();
}
export default setupConsent;
