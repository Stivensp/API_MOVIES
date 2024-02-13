const catchError = require('../utils/catchError');
const Actors = require('../models/Actor');
const Movies = require('../models/Movie');

const getAll = catchError(async(req, res) => {
    const actors = await Actors.findAll({include: Movies})
    return res.json(actors)
});

const create = catchError(async(req, res) => {
    console.log(req.body);
    const { firstName, lastName, nationality, image, birthday } = req.body
    const newBody = {firstName, lastName, nationality, image, birthday}
    const actors = await Actors.create(newBody)
    return res.status(201).json(actors)
})

const getOne = catchError(async(req, res) => {
    const { id } = req.params
    const actors = await Actors.findByPk(id, {include: Movies})
    if(!actors) return res.sendStatus(404)
    return res.json(actors)
})

const destroy = catchError(async(req, res) => {
    const { id } = req.params
    const actors = await Actors.destroy({ where: { id: id } })
    if(!actors) return res.sendStatus(404)
    return res.send("User Deleted").status(204)
})

const update= catchError(async(req, res) => {
    const { id } = req.params
    const { firstName, lastName, nationality, image, birthday } = req.body
    const newBody = { firstName, lastName, nationality, image, birthday }
    const actors = await Actors.findByPk(id)
    if(!actors) return res.sendStatus(404)

    const ActorsUpdate = await Actors.update(
        newBody,
        {
            where: { id }, returning: true
        }
    )
        return res.json(ActorsUpdate[1][0]);


        //
}) 

module.exports = {
    getAll,
    create,
    getOne,
    destroy,
    update
}