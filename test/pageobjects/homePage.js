import { default as Page } from "./Page.js";


export class HomePage extends Page {
    
    get homeTitle() { return $('#title')}
    get loadDelayLink() { return $('#overview > div > div:nth-child(1) > div:nth-child(4) > h3 > a');}

    async open() {
        await super.open('home');
    }

    async openLoadDelayLink() {
        await this.loadDelayLink.click();
    }

}
