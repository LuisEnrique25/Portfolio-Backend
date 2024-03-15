const { getAll, create, getOne, remove, update } = require('../controllers/area.controllers');
const {verifyJWT, verifyJwt} = require("../utils/verifyJWT")
const express = require('express');

const routerArea = express.Router();

routerArea.route('/')
    .get(getAll)
    .post(verifyJwt, create);

routerArea.route('/:id')
    .get(getOne)
    .delete(verifyJwt, remove)
    .put(verifyJwt, update);

module.exports = routerArea;