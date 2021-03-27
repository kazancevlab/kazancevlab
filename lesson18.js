let numberOfFilms

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
    while (numberOfFilms == null || numberOfFilms == "" || isNaN(numberOfFilms) ) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
    }
}

start()

//Пока не вызвал функцию, не работало. Запомнить

personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function rememberMyFilms () {
//for это цикл! Не путать с функцией!!!
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '')
        if (a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies [a] = b
            console.log('done')
        } else {
            console.log('erorr')
            i--
        }
    }
}

// rememberMyFilms()


function detectPersonalLevel(){

    if (personalMovieDB.count < 10 )
        console.log('Просмотрено довольно мало фильмов')
    else if (personalMovieDB.count >=10 && personalMovieDB.count <= 30 ){
        console.log('Вы классический зритель')
    } else if (personalMovieDB.count < 30) {
        console.log('Вы киноман')
    } else {
        console.log('Произошла ошибка')
    }

}

// detectPersonalLevel()

function showMyDB (huy) {
if (!huy) {
    console.log(personalMovieDB)
}
}

showMyDB (personalMovieDB.privat)



function writeYourGenres () {
    for (let i = 0; i <= 3; i++ )
       personalMovieDB.genres [i-1] = prompt('Ваш любимый жанр под номером $ {i}')
}

// 3) Создать функцию writeYourGenres, в которой пользователь будет 3 раза отвечать на вопрос
// "Ваш любимый жанр под номером $ {номер по порядку}". Каждый ответ записывается в массив данных
// жанры