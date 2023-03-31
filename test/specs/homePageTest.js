import { HomePage } from "../pageobjects/homePage.js";

describe('all test for home page', () => {
    it('get home page title and link', async() => {
        const homePage = new HomePage();
        homePage.open();
        await expect(homePage.homeTitle).toHaveTextContaining('UI Test Automation');
        await expect(homePage.loadDelayLink).toHaveTextContaining('Load Delay');
    });

    it('open LoadDelay page', async() => {
        const homePage = new HomePage();
        await homePage.open()
        await homePage.openLoadDelayLink();
    });
});