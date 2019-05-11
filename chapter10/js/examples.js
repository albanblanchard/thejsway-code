const movieList = [
  {
    title: "Batman",
    year: 1989,
    director: "Tim Burton",
    imdbRating: 7.6
  },
  {
    title: "Batman Returns",
    year: 1992,
    director: "Tim Burton",
    imdbRating: 7.0
  },
  {
    title: "Batman Forever",
    year: 1995,
    director: "Joel Schumacher",
    imdbRating: 5.4
  },
  {
    title: "Batman & Robin",
    year: 1997,
    director: "Joel Schumacher",
    imdbRating: 3.7
  },
  {
    title: "Batman Begins",
    year: 2005,
    director: "Christopher Nolan",
    imdbRating: 8.3
  },
  {
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    imdbRating: 9.0
  },
  {
    title: "The Dark Knight Rises",
    year: 2012,
    director: "Christopher Nolan",
    imdbRating: 8.5
  }
];


const titles = movies => movies.map(movie => movie.title);
const ratings = movies => movies.map(movie => movie.imdbRating);
const filterMovies = (movies, func) => movies.filter(func);

const byNolan = movie => movie.director === "Christopher Nolan";
const byBestRates = movie => movie.imdbRating >= 7.5;

const averageRate = ratings => ratings.reduce((acc, rate) => acc + rate, 0) / ratings.length;

const nolanMovies = filterMovies(movieList, byNolan);
const bestRating = filterMovies(movieList, byBestRates);

console.log(`best ratings: ${titles(bestRating)}`);
console.log(`nolan has directed ${nolanMovies.length} batman movies: ${titles(nolanMovies)}`);
console.log( Number(averageRate(ratings(movieList)).toFixed(1)) );
