import { chromium, FullConfig } from '@playwright/test';
import { login } from './helpers';

const username = process.env.MEETUP_USERNAME ?? '';
const password = process.env.MEETUP_PASSWORD ?? '';

async function globalSetup(config: FullConfig): Promise<void> {
  const { storageState } = config.projects[0].use;
  // TODO: Remove headless after this has been tested
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await login(page, username, password);
  await page.context().storageState({
    path: storageState,
  });
  await browser.close();
}

export default globalSetup;