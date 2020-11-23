const movies = require('../consts/movies');
const axios = require('axios');
const url = 'https://api.themoviedb.org/3/';
const apiKey = 'ac505a02032a33d65dd28b41f72182e1';
let cache = {}; //use local cache instead of Redis or other caching solution

module.exports = {
  getMoviesByActorsName,
};

/**
 * get the actors name, find its id, populate its relevant marvel movies list and characters
 * @param {*} actorsName the query that we get from the user
 * returns an array with all the movies that the actors played in, along with the characters and total number of characters played
 */
async function getMoviesByActorsName(actorsName) {
  //check if we already cached the actors data
  if (actorsName in cache) {
    return Object.values(cache[actorsName]);
  } else {
    const actorId = await getActorsID(actorsName);
    const actorsMoviesList = await getActorsMoviesList(actorId);
    const actorsRelevantMovies = filterMovies(actorsMoviesList);
    const numberOfCharacters = actorsNumberOfCharacters(
      actorsRelevantMovies,
    );
    let actorsUniqueCharacters = {
      numberOfCharacters: numberOfCharacters[1],
      characters: numberOfCharacters[0],
    };
    cache[actorsName] = [
      actorsRelevantMovies,
      actorsUniqueCharacters,
    ];
    return [actorsRelevantMovies, actorsUniqueCharacters];
  }
}

/**
 * get the actors id using the actors name
 * @param {*} actorsName
 * returns actorID
 */
async function getActorsID(actorsName) {
  return axios
    .get(url + `search/person?api_key=${apiKey}&query=${actorsName}`)
    .then((data) => data.data.results[0].id)
    .catch((err) => err);
}

/**
 * get the actors movies list using the actors id
 * @param {*} actorId
 * returns movies data from the api
 */
async function getActorsMoviesList(actorId) {
  return axios
    .get(
      url +
        `person/${actorId}/movie_credits?api_key=${apiKey}&language=en-US`,
    )
    .then((data) => data.data.cast);
}

/**
 * filter the actors relevant movies (given in the assignments PDF)
 * @param {*} actorsMoviesList
 * returns a filtered list with only relevant movies
 */

function filterMovies(actorsMoviesList) {
  return (
    actorsMoviesList
      .filter((movie) => movies.moviesArray.includes(movie.id))
      //character, title
      .map((movie) => {
        return {
          title: movie.title,
          character: movie.character
            .replace(/\"/g, '')
            .replace(/ *\([^)]*\) */g, '')
            .trim(),
        };
      })
  );
}

/**
 * find unique characters played by the actor
 * @param {*} actorsData
 * returns []: the characters and how many characters
 */
function actorsNumberOfCharacters(actorsData) {
  let map = new Map();

  //trying to get a unique read on the actors character, not the best / efficient way
  actorsData.map((item) => {
    let character = item.character
      .split('/')
      [item.character.split('/').length - 1].trim();
    if (
      map.get(character) ||
      map.get(character.replace('The', '').trim()) ||
      map.size === 0
    ) {
      map.set(
        character.replace('The', '').trim(),
        (map.get(character) || '') + ' ' + item.character + ' ',
      );
    } else {
      for (let characterOption of map.values()) {
        if (!(characterOption.indexOf(character) > -1)) {
          map.set(character.trim(), item.character.trim());
        }
      }
    }
  });
  return [[...map.keys()], map.size];
}
