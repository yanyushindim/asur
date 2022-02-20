"use strict";

let numberOfFilms;

function start(){
     numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

     while (numberOfFilms == ''|| numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
     }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres: [],
    privat: false
};





function rememberMyFilms() {
    for (let i = 0; i< 2; i++){
        const a = prompt('Один из последнгих просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("try"); 
        } else {
            console.log("Error"); 
            i--;
        }
        personalMovieDB.movies[a] = b;      
    }
}
rememberMyFilms();



function detectedPersonalLevel() {
    if (personalMovieDB.count < 10) {
        prompt('Просмотренно довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        prompt('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        prompt('Вы киноман');
    } else {
        prompt('Произошла ошибка');
    }
}
detectedPersonalLevel();



function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++){
        const num = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = num;
}

}
writeYourGenres();