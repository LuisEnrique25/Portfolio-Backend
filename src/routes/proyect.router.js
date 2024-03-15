const { getAll, create, getOne, remove, update, setArea, setTech } = require('../controllers/proyect.controllers');
const express = require('express');
const { verifyJwt } = require('../utils/verifyJWT');

const routerProyect = express.Router();

routerProyect.route('/')
    .get(getAll)
    .post(verifyJwt, create);

routerProyect.route("/:id/areas")
    .post(verifyJwt, setArea)

routerProyect.route("/:id/techs")
    .post(verifyJwt, setTech)

routerProyect.route('/:id')
    .get(getOne)
    .delete(verifyJwt, remove)
    .put(verifyJwt, update)
    

module.exports = routerProyect;