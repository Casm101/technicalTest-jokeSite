import express 	from 'express';
import path 	from 'path';
import fetch 	from 'node-fetch';
import sqlite3 	from 'sqlite3';

const db = new sqlite3.Database('./jokes.db', sqlite3.OPEN_READWRITE, error => {

 	if (error) return console.log('Failed DB Connection!');

 	console.log('Conected to DB!');

	// Populate database on connection
	populateDB();
});

const populateDB = () => {

	fetch('https://raw.githubusercontent.com/15Dkatz/official_joke_api/master/jokes/index.json')
	.then((response) => response.json())
	.then((data) => {
		data.forEach(async (joke) => {
			db.run('INSERT INTO jokes (type, setup, punchline) VALUES (?, ?, ?);', joke.type, joke.setup, joke.punchline);
		});
	});

	console.log('Database populated!');
};


// Create new server
const app = express();

// Connect to SQL database
db.run('CREATE TABLE if not exists jokes(id INTEGER PRIMARY KEY, type STRING, setup STRING, punchline STRING)');


app.use('/styles', express.static(path.resolve('frontend', 'styles')));
app.use('/scripts', express.static(path.resolve('frontend', 'scripts')));
app.use('/views', express.static(path.resolve('frontend', 'views')));
app.use('/components', express.static(path.resolve('frontend', 'components')));

app.get('/api/random-joke', (req, res) => {

	const joke = db.all("SELECT * FROM jokes ORDER BY RANDOM() LIMIT 1;", (err, row) => {  res.json(row[0]); });
});

app.get('/api/joke/:id', (req, res) => {

	const joke = db.all("SELECT * FROM jokes WHERE id = " + req.params.id + " LIMIT 1;", (err, row) => {  res.json(row[0]); });
});

app.get('/api/joke-categories/:type', (req, res) => {

	const joke = db.all("SELECT * FROM jokes WHERE type = '" + req.params.type + "' ORDER BY RANDOM() LIMIT 1;", (err, row) => {  res.json(row[0]); });
});

app.get('/api/joke-categories', (req, res) => {

	const joke = db.all("SELECT DISTINCT type FROM jokes", (err, row) => {  res.json(row); });
});



app.get('/*', (req, res) => { res.sendFile(path.resolve('frontend', 'index.html')); });

app.listen( 80, () => console.log('Server is running!'));
