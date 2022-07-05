export default class {

    constructor(params) {
        this.params = params;
    }

    setTitle(title) {
        document.title = title;
    }

    setDescription(description) {
        document.querySelector('.siteDescription').setAttribute('content', description);
    }

    async getHtml() {
        return '';
    }
}
