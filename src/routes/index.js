const express = require('express');
const router = express.Router();
const genreRouter = require('./genres.router');
const ActorsRouter = require('./actors.router');
const DirectorsRouter = require('./directors.router');
const MovieRouter = require('./movies.router');
// colocar las rutas aquí
router.use('/genres', genreRouter);
router.use('/actors', ActorsRouter);
router.use('/directors', DirectorsRouter);
router.use('/movies', MovieRouter);
module.exports = router;