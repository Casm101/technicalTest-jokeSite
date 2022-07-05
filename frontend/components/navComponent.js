// Declaration of navigation bar component, render with care ♥
class NavigationBar {

    constructor(paramsObj) {

    }

	getCategories(data) {
		let catList = '';
		for (let filter in data) {
			catList += `
				<a href="/category/${this.types[filter].type}" class="dropdown_link" router-link>${this.types[filter].type}</a>
			`;
		}
		return catList;
	}

    async getHtml () {

		const fetchData = await fetch('/api/joke-categories', { method: 'GET' });
        const resData = await fetchData.json();
        this.types = resData;

        return `
			<nav>
				<p class="title"><a href="/" router-link>Jokes!</a></p>

				<ul class="navLinks">
					<li><a href="/" router-link>random</a></li>
					<li>
						<div class="dropdown">
							<button class="dropdown_button">categories +</button>
							<div class="dropdown_content">
								${this.getCategories(this.types)}
							</div>
						</div>
					</li>
				</ul>
			</nav>
        `;
    }
}
