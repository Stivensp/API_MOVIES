const catchError = require('../utils/catchError');
const Genres = require('../models/Genre');

const getAll = catchError(async(req, res) => {
    const genres = await Genres.findAll()
    return res.json(genres)
});

const create = catchError(async(req, res) => {
    console.log(req.body);
    const { name } = req.body
    const newBody = {name}
    const genre = await Genres.create(newBody)
    return res.status(201).json(genre)
})

const getOne = catchError(async(req, res) => {
    const { id } = req.params
    const genre = await Genres.findByPk(id)
    if(!genre) return res.sendStatus(404)
    return res.json(genre)
})

const destroy = catchError(async(req, res) => {
    const { id } = req.params
    const genre = await Genres.destroy({ where: { id: id } })
    if(!genre) return res.sendStatus(404)
    return res.send("User Deleted").status(204)
})

const update= catchError(async(req, res) => {
    const { id } = req.params
    const { name } = req.body
    const newBody = { name }
    const genre = await Genres.findByPk(id)
    if(!genre) return res.sendStatus(404)

    const GenresUpdate = await Genres.update(
        newBody,
        {
            where: { id }, returning: true
        }
    )
        return res.json(GenresUpdate[1][0]);


        //
}) 

module.exports = {
    getAll,
    create,
    getOne,
    destroy,
    update
}