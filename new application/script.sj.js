"use strict";

const numberOfFilms = +prompt('How many films did you watch?', '');

const personalMoviaDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt('Which one your last film?', ''),
	  b = prompt('What do you think abaut this?', ''),
	  c = prompt('Which one your last film?', ''),
	  d = prompt('What do you think abaut this?', '');


personalMoviaDB.movies[a] = b;
personalMoviaDB.movies[c] = d;

console.log(personalMoviaDB);
