console.log('exo 1 \n');

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
const years = movies => movies.map(movie => movie.year);

const filterMovies = (movies, func) => movies.filter(func);

const byNolan = movie => movie.director === "Christopher Nolan";
const byBestRates = movie => movie.imdbRating >= 7.5;
const before2000 = movie => movie.year < 2000;

const averageRate = ratings => ratings.reduce((acc, rate) => acc + rate, 0) / ratings.length;

const nolanMovies = filterMovies(movieList, byNolan);
const bestRating = filterMovies(movieList, byBestRates);
const moviesBefore2000 = filterMovies(movieList, before2000);

console.log(`best ratings: ${titles(bestRating)}`);
console.log(`nolan has directed ${nolanMovies.length} batman movies: ${titles(nolanMovies)}`);
console.log(`batman movies average ratings: ${averageRate(ratings(movieList)).toFixed(1)}`);
console.log(`batman movies before 2000: ${titles(moviesBefore2000)}`);



console.log('\nexo 2 \n');

const governmentForms = [
  {
    name: "Plutocracy",
    definition: "Rule by the wealthy"
  },
  {
    name: "Oligarchy",
    definition: "Rule by a small number of people"
  },
  {
    name: "Kleptocracy",
    definition: "Rule by the thieves"
  },
  {
    name: "Theocracy",
    definition: "Rule by a religious elite"
  },
  {
    name: "Democracy",
    definition: "Rule by the people"
  },
  {
    name: "Autocracy",
    definition: "Rule by a single person"
  }
];

const namesOf = governments => governments.map(government => government.name);
const endingWithCy = name => name.endsWith('cy');
const filterGovernments = (names, func) => names.filter(func);

const formsEndingWithCy = filterGovernments(namesOf(governmentForms), endingWithCy);
console.log(formsEndingWithCy);