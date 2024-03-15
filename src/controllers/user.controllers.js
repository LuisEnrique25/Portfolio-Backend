const catchError = require('../utils/catchError');
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {user} = require('../models');

const getAll = catchError(async(req, res) => {
    const results = await user.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const result = await user.create({...req.body, password:hashedPassword});
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await user.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await user.destroy({ where: {id} });
    if(!result) return res.sendStatus(404);
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await user.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

const login = catchError(async(req, res) => {
    const { email, password } = req.body;
    //verifcamos si el usuario/email existe
    const user = await user.findOne({where: email})
    if(!user) return res.status(401).json( {error: "Invalid credentials"});

    const isValid = await bcrypt.compare(password, user.password)
    if(!isValid) return res.status(401).json( {error: "Invalid credentials"});

    return res.status(201).json(user);


});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}