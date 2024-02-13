const catchError = require('../utils/catchError');
const Directors = require('../models/Director');
const Movies = require('../models/Movie');

const getAll = catchError(async(req, res) => {
    const directors = await Directors.findAll({include: Movies})
    return res.json(directors)
});

const create = catchError(async(req, res) => {
    console.log(req.body);
    const { firstName, lastName, nationality, image, birthday } = req.body
    const newBody = {firstName, lastName, nationality, image, birthday}
    const directors = await Directors.create(newBody)
    return res.status(201).json(directors)
})

const getOne = catchError(async(req, res) => {
    const { id } = req.params
    const directors = await Directors.findByPk(id,{include: Movies})
    if(!directors) return res.sendStatus(404)
    return res.json(directors)
})

const destroy = catchError(async(req, res) => {
    const { id } = req.params
    const directors = await Directors.destroy({ where: { id: id } })
    if(!directors) return res.sendStatus(404)
    return res.send("User Deleted").status(204)
})

const update= catchError(async(req, res) => {
    const { id } = req.params
    const { firstName, lastName, nationality, image, birthday } = req.body
    const newBody = { firstName, lastName, nationality, image, birthday }
    const directors = await Directors.findByPk(id)
    if(!directors) return res.sendStatus(404)

    const DirectorsUpdate = await Directors.update(
        newBody,
        {
            where: { id }, returning: true
        }
    )
        return res.json(DirectorsUpdate[1][0]);


        //
}) 

module.exports = {
    getAll,
    create,
    getOne,
    destroy,
    update
}