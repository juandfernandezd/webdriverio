import { LoadDelayPage } from "../pageobjects/loadDelayPage.js";

describe('all test for loadDelay page', () => {
    it('get loadDelay page text and button', async() => {
        const delayPage = new LoadDelayPage();
        await delayPage.open();
        await expect(delayPage.loadText).toHaveTextContaining('Load Delays');
        await expect(await delayPage.delayButton.getText()).toBe('Button Appearing After Delay');
        await delayPage.clickDelayButton();
    });

});