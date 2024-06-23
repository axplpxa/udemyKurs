const numberOffilms = +prompt("Сколько фильмов вы уже посмотрели?",'');

let personalMovieDB = {
    count : numberOffilms ,
    movies : { },
    actors : { },
    genres : [ ],
    privat : false 
}

let ans1_1 = prompt("Один из последних просмотренных фильмов ?",'');
let ans1_2 = prompt("Насколько его оцените?",'');

let ans2_1 = prompt("Один из последних просмотренных фильмов ?",'');
let ans2_2 = prompt("Насколько его оцените?",'');

personalMovieDB.movies[ans1_1] = ans1_2;
personalMovieDB.movies[ans2_1] = ans2_2;

console.log(personalMovieDB);