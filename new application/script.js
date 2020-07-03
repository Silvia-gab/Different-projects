"use strict";



const personalMoviaDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function() {
	personalMoviaDB.count = +prompt('How many films did you watch?', '');

	while (personalMoviaDB.count == '' || personalMoviaDB.count == null || isNaN(personalMoviaDB.count)) {
		personalMoviaDB.count = +prompt('How many films did you watch?', '');
		}

	},
	rememberMyFilms: function() {
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
  },
  detectPersonalLevel: function() {
	if (personalMoviaDB.count < 10) {
	console.log("You are whtaching a lot of films");
} else if (personalMoviaDB.count >= 10 && personalMoviaDB.count < 30) {
	console.log("You are good guy");
} else if (personalMoviaDB.count >= 30) {
	console.log("You are crazy");
	} else {
		console.log("False");
	}
  },
  showMyDB: function(hidden) {
	if (!hidden) {
		console.log(personalMoviaDB);
	}
  },
  toggleVisibleMyDB: function() {
  	if (personalMoviaDB.privat) {
  		personalMoviaDB.privat = false;
  	} else {
  		personalMoviaDB.privat = true;
  	}
  },
  writeYourGeners: function() {
 	for (let i = 1; i <= 3; i++) {
 	let genre = prompt(`Which film is your favorite ${i}`);

 	if (genre === '' || genre === null) {
 		console.log('It is wrong answer');
 		i--;
 	} else {
  	personalMoviaDB.genres[i - 1] = genre;

 	  }
 	}

 	personalMoviaDB.genres.forEach((item, i) => {
 		console.log(`Which film is your favorite ${i + 1} - this is ${item}`);
 	});
  }
};





