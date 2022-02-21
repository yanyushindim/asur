"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors:{},
    genres: [],
    privat: false,

    start: function(){
        personalMovieDB.count = +prompt('Сколько фильмов вы уже просмотрели?', '');
   
        while (personalMovieDB.count == ''|| personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже просмотрели?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectedPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            prompt('Просмотренно довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            prompt('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            prompt('Вы киноман');
        } else {
            prompt('Произошла ошибка');
        }
    },

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
     

    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++){
            const num = prompt(`Ваш любимый жанр под номером ${i}`);

            if (num === '' || num == null) {
                console.log('Ошибка');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = num;
            }                      
      }
    //     // let genres = prompt(`Введите Ваши любимые жанры через запятую`);       // Альтернативный способ

    //     // if (genres === '' || genres == null) {
    //     //     console.log('Ошибка');
    //     //     i--;
    //     // } else {
    //     //     personalMovieDB.genres = genres.split(', ');
    //     //     personalMovieDB.genres.sort();    
    //     // }                                                                    // Альтернативный способ

         personalMovieDB.genres.forEach((genr, i) => {
             console.log(`Любимый жанр ${i + 1} - это ${genr}`);
         });
    },

    
    toggleVisibleMyDB: function() {
         if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
         }else {
            personalMovieDB.privat = true;
         }
    }
    
};
