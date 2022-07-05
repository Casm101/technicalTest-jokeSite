import abstractView from './_abstractView.js';

export default class extends abstractView {

    constructor(params) {
        super(params);
        this.setTitle(`Joke Site - Joke #${this.params.id}`);
        this.setDescription('A simple joke site that displays a random joke from an SQL database in a vanilla UI');
    }

    async getHtml() {

		const fetchData = await fetch(`/api/joke/${this.params.id}`, { method: 'GET' });
        const resData = await fetchData.json();
        this.jokeData = resData;

        return `
            ${await new NavigationBar().getHtml()}

			${new CardComponent(this.jokeData).getHtml()}
        `;
    }
}
