const movies = {
  'Fantastic Four (2005)': 9738,
  'Fantastic Four: Rise of the Silver Surfer': 1979,
  'Iron Man': 1726,
  'The Incredible Hulk': 1724,
  'Iron Man 2': 10138,
  Thor: 10195,
  'Captain America: The First Avenger': 1771,
  'The Avengers': 24428,
  'Iron Man 3': 68721,
  'Thor: The Dark World': 76338,
  'Captain America: The Winter Soldier': 100402,
  'Guardians of the Galaxy': 118340,
  'Avengers: Age of Ultron': 99861,
  'Ant-Man': 102899,
  'Fantastic Four (2015)': 166424,
  'Captain America: Civil War': 271110,
  'Doctor Strange': 284052,
  'Guardians of the Galaxy Vol. 2': 283995,
  'Spider-Man: Homecoming': 315635,
  'Thor: Ragnarok': 284053,
  'Black Panther': 284054,
  'Avengers: Infinity War': 299536,
  'Ant-Man and the Wasp': 363088,
  'Captain Marvel': 299537,
  'Avengers: Endgame': 299534,
  'Spider-Man: Far From Home': 429617,
};

//we need the movie id, not name
const moviesArray = Object.values(movies);

module.exports = {
  moviesArray,
};
