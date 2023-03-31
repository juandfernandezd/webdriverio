export default class Page {

    async open() {
        await browser.url('http://uitestingplayground.com/');
    }

    async open(path) {
        await browser.url(path)
    }

}