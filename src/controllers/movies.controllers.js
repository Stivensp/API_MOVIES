const catchError = require('../utils/catchError');
const Movies = require('../models/Movie');
const Genres = require('../models/Genre');

const getAll = catchError(async(req, res) => {
    const Movie = await Movies.findAll({include: Genres})
    return res.json(Movie)
});

const create = catchError(async(req, res) => {
    console.log(req.body);
    const { name, image, synopsis, releaseYear } = req.body
    const newBody = {name, image, synopsis, releaseYear}
    const Movie = await Movies.create(newBody)
    return res.status(201).json(Movie)
})

const getOne = catchError(async(req, res) => {
    const { id } = req.params
    const Movie = await Movies.findByPk(id,{include: Genres})
    if(!Movie) return res.sendStatus(404)
    return res.json(Movie)
})

const destroy = catchError(async(req, res) => {
    const { id } = req.params
    const Movie = await Movies.destroy({ where: { id: id } })
    if(!Movie) return res.sendStatus(404)
    return res.send("User Deleted").status(204)
})

const update= catchError(async(req, res) => {
    const { id } = req.params
    const {name, image, synopsis, releaseYear } = req.body
    const newBody = { name, image, synopsis, releaseYear }
    const Movie = await Movies.findByPk(id)
    if(!Movie) return res.sendStatus(404)

    const MoviesUpdate = await Movies.update(
        newBody,
        {
            where: { id }, returning: true
        }
    )
        return res.json(MoviesUpdate[1][0]);


        //
}) 

const setGenres= catchError(async(req, res) => {
    const { id } = req.params
    const movies = await Movies.findByPk(id)

    if(!movies) return res.sendStatus(404)

    await movies.setGenres(req.body)

    const genres = await movies.getGenres()

    return res.json(genres)

})

module.exports = {
    getAll,
    create,
    getOne,
    destroy,
    update,
    setGenres
}