const { getAll,create, destroy, getOne, update, setGenres} = require('../controllers/movies.controllers');
const express = require('express');

const MovieRouter = express.Router();

MovieRouter.route("/")
		.get(getAll)
		.post(create)
		

		MovieRouter.route("/:id/genres")
		.post(setGenres)

		MovieRouter.route("/:id")
		.get(getOne)
		.delete(destroy)
		.put(update)
module.exports = MovieRouter;