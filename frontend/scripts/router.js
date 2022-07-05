// Site Pages
import Home from '../views/home.js';
import Category from '../views/category.js';
//import Error404 from '../views/error404.js';


const pathToRegex = path => new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

const getParams = match => {

    const values = match.result.slice(1);
    const keys = Array.from(String(match.route.path).matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};


const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};


const router = async () => {

    // List of views to serve to client
    const routes = [

        { path: '/', view: Home },
		{ path: '/category/:cat', view: Category },

		//{ path: '/error404', view: Error404 },

    ];

    // Test each map for potantial match
    const potentialMatches = routes.map(route => {

        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    // Re-route for 404 error (page not found)
    if (!match) {

        match = {
            route: routes.find(x => x.path == '/error-404'),
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

    // Render page view and scroll to top
    document.querySelector('.routerRender').innerHTML = await view.getHtml();
    window.scrollTo(0, 0);

	// Load eventlisteners if availible
	loadEventListeners(match.route);
};

// Make the router function availible globaly
window.router = router;


// Navigate to page in history
window.addEventListener('popstate', router);


// Add event listener to router links once content is loaded
document.addEventListener('DOMContentLoaded', () => {

    document.body.addEventListener('click', e => {

        // Router links
        if (e.target.matches('[router-link]')) {
            e.preventDefault();
            navigateTo(e.target.href);
		}
    });

    router();
});
