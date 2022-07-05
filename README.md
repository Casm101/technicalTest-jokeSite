# 🃏 technicalTest-jokeSite
A simple joke site that displays a random joke from an SQL database imported from the 15Dkatz
[official_joke_api](https://github.com/15Dkatz/official_joke_api) repo, in a vanilla UI with custom client side routing.


## Tech Stack

**Client:** Vanilla JS, SCSS (CSS preprocessor), HTML

**Server:** Node, Express, SQLite3 Database


## Run Locally

Clone the project

```bash
  git clone https://github.com/Casm101/technicalTest-jokeSite.git
```

Go to the project directory

```bash
  cd technicalTest-jokeSite
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

The site will now be availible at the `localhost` url: http://localhost/ using port 80 by default.




## Usage/Examples

On the initial load of the site, you are greeted by a random joke, to view the punchline, simply click / tap on the joke card. To generate a new joke you can click on the button below the card!

![Logo](https://i.postimg.cc/wB6m3NTv/Screenshot-2022-07-06-at-00-30-56.png)

You also have the option to filter the jokes availible by checking out the categories in the navbar, or by selecting the current category on the card's header.

![Logo](https://i.postimg.cc/N0prX05x/Screenshot-2022-07-06-at-00-34-17.png)

If you find a joke you like, feel free to share it with a friend by clicking on the jokes unique identifier, this will give you a permanent link to your desired joke.

![Logo](https://i.postimg.cc/7b8C4GWq/Screenshot-2022-07-06-at-00-41-58.png)

Check out the punchline to my fav joke here: http://christiansmithmantas.com:88/joke/268
## API Reference

#### Get a specific joke

```http
  GET /api/joke/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int`    | **Required**. Id of item to fetch |


#### Get all joke categories

```http
  GET /api/joke-categories
```

#### Get a random joke by category

```http
  GET /api/joke-categories/${type}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `type`    | `string` | **Required**. Type of item to fetch |


#### Get a random joke

```http
  GET /api/random-joke
```






## Roadmap (planned / upcoming)

- Improoved responsive design

- Added endpoints to API

- Search by text feature
