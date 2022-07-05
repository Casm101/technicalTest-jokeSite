import abstractView from './_abstractView.js';

export default class extends abstractView {

    constructor(params) {
        super(params);
        this.setTitle('Joke Site - Error 404');
        this.setDescription('Looks like you found a broken link or page.');
    }

    async getHtml() {


        return `
			${await new NavigationBar().getHtml()}

			<div class="errorContainer">
				<p class="errorNum">404</p>
				<p class="errorTitle">Page not found</p>
				<p class="errorDescription">Looks like you've run into a broken link or page... Sorry about that, click the button below, and you'll be on you way again!</p>
				<button href="/" class="errorButton" router-link>return</button>
			</div>
        `;
    }
}
