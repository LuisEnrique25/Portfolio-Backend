const { getAll, create, getOne, remove, update } = require('../controllers/tech.controllers');
const {verifyJwt} = require("../utils/verifyJWT")
const express = require('express');

const routerTech = express.Router();

routerTech.route('/')
    .get(getAll)
    .post(verifyJwt, create);

routerTech.route('/:id')
    .get(getOne)
    .delete(verifyJwt, remove)
    .put(verifyJwt, update)

module.exports = routerTech;