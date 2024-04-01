import { test, expect } from '@playwright/test';
let page;
//playwright 
test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('https://www.demoblaze.com/index.html')
    //Login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator('//button[normalize-space()="Log in"]').click()
}
)
test.afterEach(async () => {
    //Logout
    await page.locator('#logout2').click()

})
test('Home Page Test', async ({ page }) => {
    //Home Page
    const product = await page.$$('.hrefch')
    expect(product).toHaveLength(9)

})


test('Add to Product Cart', async ({ page }) => {


    //Add Product to cart
    await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click()
    await page.locator('//a[normalize-space()="Add to cart"]').click()
    ////a[normalize-space()='Add to cart']


    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
    })

})