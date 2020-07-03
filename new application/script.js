"use strict";

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('How many films did you watch?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('How many films did you watch?', '');
	}

}

//start();

const personalMoviaDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};



function rememberMyFilms() {
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
}


//rememberMyFilms();



function detectPersonalLevel() {
	if (personalMoviaDB.count < 10) {
	console.log("You are whtaching a lot of films");
} else if (personalMoviaDB.count >= 10 && personalMoviaDB.count < 30) {
	console.log("You are good guy");
} else if (personalMoviaDB.count >= 30) {
	console.log("You are crazy");
	} else {
		console.log("False");
	}
}

//detectPersonalLevel();


function showMyDB (hidden) {
	if (!hidden) {
		console.log(personalMoviaDB);
	}
}
 showMyDB(personalMoviaDB.privat);

 function writeYourGeners() {
 	for (let i = 1; i <= 3; i++) {
 	personalMoviaDB.genres[i - 1] = prompt(`Which film is your favorite ${i}`);
 	}
 }

 writeYourGeners();

