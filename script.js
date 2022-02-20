'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres: [],
    privat: false
};


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


if (personalMovieDB.count < 10) {
    prompt('Просмотренно довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    prompt('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    prompt('Вы киноман');
} else {
    prompt('Произошла ошибка');
}

console.log(personalMovieDB);