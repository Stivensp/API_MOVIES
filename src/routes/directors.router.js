const { getAll,create, destroy, getOne, update} = require('../controllers/directors.controllers');
const express = require('express');

const DirectorsRouter = express.Router();

DirectorsRouter.route("/")
		.get(getAll)
		.post(create)
		
		DirectorsRouter.route("/:id")
		.get(getOne)
		.delete(destroy)
		.put(update)
module.exports = DirectorsRouter;