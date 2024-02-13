const { getAll,create, destroy, getOne, update} = require('../controllers/genres.controllers');
const express = require('express');

const GenresRouter = express.Router();

GenresRouter.route("/")
		.get(getAll)
		.post(create)
		
		GenresRouter.route("/:id")
		.get(getOne)
		.delete(destroy)
		.put(update)
module.exports = GenresRouter;