let numberOfFilms=+prompt(`Сколько фильмов вы уже посмотрели?`);
let personalMovieDB = {
	
	count: numberOfFilms,
	movies: {},
	actors:{},
	genders: [],
	private: false
};
let a=prompt(`Один из последных просмотрренных фильмов ?`),
      b=prompt(`На сколько оцените его ?`);
	  
	  personalMovieDB.movies[a]=b;
	  
	  console.log(personalMovieDB);