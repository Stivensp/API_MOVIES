const Actors = require('./Actor');
const Movies = require('./Movie');
const Directors = require('./Director');
const Genres = require('./Genre');

Movies.belongsToMany(Genres,{through:'movie_genres'});
Genres.belongsToMany(Movies,{through:'movie_genres'});


Movies.belongsToMany(Directors,{through:'movie_directors'});
Directors.belongsToMany(Movies,{through:'movie_directors'});


Movies.belongsToMany(Actors,{through:'movie_actors'});
Actors.belongsToMany(Movies,{through:'movie_actors'});