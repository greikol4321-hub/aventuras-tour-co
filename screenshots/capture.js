const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  
  // Scroll down slowly to trigger all ScrollReveal animations
  const height = await page.evaluate(() => document.body.scrollHeight);
  for (let i = 0; i < height; i += 300) {
    await page.evaluate((y) => window.scrollTo(0, y), i);
    await page.waitForTimeout(200);
  }
  
  // Scroll back to top
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  
  await page.screenshot({ path: 'screenshots/home-full.png', fullPage: true });
  
  // Tours page
  await page.goto('http://localhost:3000/tours', { waitUntil: 'networkidle' });
  const toursHeight = await page.evaluate(() => document.body.scrollHeight);
  for (let i = 0; i < toursHeight; i += 300) {
    await page.evaluate((y) => window.scrollTo(0, y), i);
    await page.waitForTimeout(200);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshots/tours.png', fullPage: true });
  
  // Contacto page
  await page.goto('http://localhost:3000/contacto', { waitUntil: 'networkidle' });
  const contactHeight = await page.evaluate(() => document.body.scrollHeight);
  for (let i = 0; i < contactHeight; i += 300) {
    await page.evaluate((y) => window.scrollTo(0, y), i);
    await page.waitForTimeout(200);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshots/contacto.png', fullPage: true });
  
  // Tour detail - find first tour slug
  await page.goto('http://localhost:3000/tours', { waitUntil: 'networkidle' });
  const firstTour = await page.$('a[href^="/tours/"]');
  if (firstTour) {
    const href = await firstTour.getAttribute('href');
    await page.goto(`http://localhost:3000${href}`, { waitUntil: 'networkidle' });
    const detailHeight = await page.evaluate(() => document.body.scrollHeight);
    for (let i = 0; i < detailHeight; i += 300) {
      await page.evaluate((y) => window.scrollTo(0, y), i);
      await page.waitForTimeout(200);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'screenshots/tour-detail.png', fullPage: true });
  }
  
  // Mobile view
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  const mobileHeight = await page.evaluate(() => document.body.scrollHeight);
  for (let i = 0; i < mobileHeight; i += 300) {
    await page.evaluate((y) => window.scrollTo(0, y), i);
    await page.waitForTimeout(200);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshots/home-mobile.png', fullPage: true });
  
  await browser.close();
  console.log('Screenshots done!');
})();
