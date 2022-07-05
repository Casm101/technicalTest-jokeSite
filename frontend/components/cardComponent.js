// Sample object to use || feel free to copy and paste
let cardComponentObj = {

};


// Declaration of navigation bar component, render with care ♥
class CardComponent {

    constructor(paramsObj) {

		this.jokeID = paramsObj.id;
		this.type = paramsObj.type;
		this.setup = paramsObj.setup;
		this.punchline = paramsObj.punchline;
    }

    getHtml() {

        return `
			<div class="card" onclick="this.classList.toggle('flip')">
				<div class="card_front">
					<div class="card_header">
						<p class="header_jokeData"> <span>${this.type}</span> joke <span>#${this.jokeID}</span></p>
					</div>
					<div class="card_body">
						<p class="joke">${this.setup}</p>
					</div>
					<div class="card_footer">
						<p># click the card to view the punchline #</p>
					</div>
				</div>
				<div class="card_back">
					<div class="card_body">
						<p class="punchline">${this.punchline}</p>
					</div>
				</div>
			</div>
        `;
    }
}
