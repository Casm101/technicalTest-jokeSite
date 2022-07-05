import abstractView from './_abstractView.js';

export default class extends abstractView {

    constructor(params) {
        super(params);
        this.setTitle('Joke Site - Christian A. Smith Mantas');
        this.setDescription('A simple joke site that displays a random joke from an SQL database in a vanilla UI');
    }

    async getHtml() {

		const fetchData = await fetch(`/api/joke-by-category/${this.params.cat}`, { method: 'GET' });
        const resData = await fetchData.json();
        this.jokeData = resData;

        return `
            ${await new NavigationBar().getHtml()}

			${new CardComponent(this.jokeData).getHtml()}

			<button href="/category/${this.params.cat}" style="margin-top: 3rem;" router-link>Random Joke</button>
        `;
    }
}
