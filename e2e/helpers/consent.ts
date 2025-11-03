// e2e/helpers/consent.ts
import { type Locator, type Page } from '@playwright/test';

export async function dismissConsent(page: Page) {
  const tryClick = async (loc: Locator, timeout = 800) => {
    try { await loc.click({ timeout }); return true; } catch { return false; }
  };

  // 1) Buttons on the main page
  const mainCandidates = [
    page.getByRole('button', { name: /Autoriser|Consent/i }),
    //page.getByRole('link',   { name: /accept|agree|continue/i }),
  ];
  for (const c of mainCandidates) if (await tryClick(c)) return;

  // 2) Common consent iframes
  for (const frame of page.frames()) {
    const btns = [
      frame.getByRole('button', { name: /Consent|Autoriser/i }),
      //frame.getByRole('link',   { name: /accept|agree|Consent|continue/i }),
    ];
    for (const b of btns) if (await tryClick(b)) return;
  }
}
