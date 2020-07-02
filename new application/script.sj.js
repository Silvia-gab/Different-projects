"use strict";

const numberOfFilms = +prompt('How many films did you watch?', '');

const personalMoviaDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};





for (let i = 0; i < 2; i++) {
	const a = prompt('Which one your last film?', ''),
		  b = prompt('What do you think abaut this?', '');
	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		 personalMoviaDB.movies[a] = b;
		 console.log('done');
	} else {
		console.log('error');
		i--;
	}
}

if (personalMoviaDB.count < 10) {
	console.log("You are whtaching a lot of films");
} else if (personalMoviaDB.count >= 10 && personalMoviaDB.count < 30) {
	console.log("You are good guy");
} else if (personalMoviaDB.count >= 30) {
	console.log("You are crazy");
	} else {
		console.log("False");
	}



console.log(personalMoviaDB);

