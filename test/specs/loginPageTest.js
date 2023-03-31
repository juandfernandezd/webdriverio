import { getLoginData } from "../data/dataTest.js";
import { LoginPage } from "../pageobjects/loginPage.js";

describe(' description suite', ()=>{

    getLoginData.forEach(({username, password}) => {
        it('incorrect credentials', async()=>{
            const loginPage = new LoginPage();
            loginPage.openLogin();
            loginPage.loginWith(username,password);
            await expect(loginPage.message).toHaveTextContaining('Incorrect');
            await expect(await loginPage.message.getText()).toBe('Incorrect username/password.');
            await (await loginPage.message).waitForDisplayed({reverse: true});
            await expect(loginPage.message).not.toBeDisplayed();    
        });
    });   

});