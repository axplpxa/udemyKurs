let numberOffilms ;



function start(){
    numberOffilms = +prompt("Сколько фильмов вы уже посмотрели?",'');

    while (numberOffilms =='' || numberOffilms == null || isNaN(numberOffilms )){
        numberOffilms = +prompt("Сколько фильмов вы уже посмотрели?",'');
    }
}

start(); 

let personalMovieDB = {
    count : numberOffilms ,
    movies : { },
    actors : { },
    genres : [ ],
    privat : false 
}

let quest1;
let quest2;

function rememberQuestion(){
    for(let i = 0; i < 2 ; i++){
        firstquest: while(true){
            quest1 = prompt("Один из последних просмотренных фильмов?", '');
    
            if(quest1 != null &&quest1 != "" && quest1.length < 50){
                break;
            }
            else{
                continue firstquest;
            }
        }
        secondquest: while(true){
            quest2 = prompt("Насколько его оцените?",'');
            
            if(quest2 != null && quest2 != "" && quest2.length < 50 ){
                break;
            }
            else{
                continue secondquest;
            }
        }
            personalMovieDB.movies[quest1] = quest2;           
    }
}
rememberQuestion();

function detectPersonLevel(){

    if(personalMovieDB.count < 10){
        console.log("Просмотрено довольно мало фильмов");
    }
    else if (personalMovieDB.count <= 30){
        console.log("Вы классический зритель");
    }
    else if (personalMovieDB.count > 30){
        console.log("Вы киноман");
    }
    else {
        console.log("Произошла ошибка");
    }

}
detectPersonLevel();

function showMyDB (obj){
    if (obj.privat == false) {
        console.log(obj)
    }
}
showMyDB(personalMovieDB);


function writeYourGenres (obj) {
    for(let i = 0;i < 3;){
        
        obj.genres[i] = prompt(`Ваш любимый жанр ${i+1}`,'');
        i++;
    }
}
writeYourGenres(personalMovieDB);

showMyDB(personalMovieDB);

// personalMovieDB.movies[quest1[0]] = quest2[0];
// personalMovieDB.movies[quest1[1]] = quest2[1];

// console.log(personalMovieDB);