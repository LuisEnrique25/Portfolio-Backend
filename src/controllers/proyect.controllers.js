const catchError = require('../utils/catchError');
const {proyect, area} = require('../models');

const getAll = catchError(async(req, res) => {
    const results = await proyect.findAll({include: area});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await proyect.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await proyect.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await proyect.destroy({ where: {id} });
    if(!result) return res.sendStatus(404);
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await proyect.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

const setArea = catchError(async(req, res) => {
    const {id} = req.params;
    const pryct = await proyect.findByPk(id)
    if(!pryct) return res.sendStatus(404);

    await pryct.setAreas(req.body)

    const areas = await pryct.getAreas();

    return res.json(areas)

})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setArea
}