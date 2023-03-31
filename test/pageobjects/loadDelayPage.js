import { default as Page } from "./Page.js";


export class LoadDelayPage extends Page {
    
    get loadText() { return $('body > section > div > h3');}
    get delayButton() {return $('body > section > div > button');}

    async open() {
        await super.open('loadDelay');
    }

    async clickDelayButton() {
        await this.delayButton.click();
    }

}
