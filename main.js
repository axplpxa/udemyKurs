
let quest1;
let quest2;

let personalMovieDB = {
    count : 0 ,
    movies : { },
    actors : { },
    genres : [ ],
    privat : true ,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberQuestion : function (){
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
    } ,
    detectPersonLevel : function (){

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
    
    },
    showMyDB : function (obj){
        if (obj.privat == false) {
            console.log(obj)
        }
    },
    writeYourGenres : function  (obj) {

        for(let i = 0;i < 3;){
        genrespoint :   while(true){  
            obj.genres[i] = prompt(`Ваш любимый жанр ${i+1}`,'');
            if(obj.genres[i] != null && obj.genres[i] !=""){
                i++;
                break;
            }
            else{
                continue genrespoint;
            }
        }
        }

        personalMovieDB.genres.forEach( function(item,i){
            console.log(`Любимый жанр #${i+1} - это ${item}`);
        }
        );
    },
    togobleVisibleMyDB : function (obj){
        if(obj.privat == false){
            obj.privat = true;
        }
        else if(obj.privat == true){
            obj.privat = false;
        }
    }
}


personalMovieDB.start();
personalMovieDB.togobleVisibleMyDB(personalMovieDB);
personalMovieDB.rememberQuestion();
personalMovieDB.detectPersonLevel();
personalMovieDB.writeYourGenres(personalMovieDB);
personalMovieDB.showMyDB(personalMovieDB);







