const { getAll,create, destroy, getOne, update} = require('../controllers/actors.controllers');
const express = require('express');

const ActorsRouter = express.Router();

ActorsRouter.route("/")
		.get(getAll)
		.post(create)
		
		ActorsRouter.route("/:id")
		.get(getOne)
		.delete(destroy)
		.put(update)
module.exports = ActorsRouter;