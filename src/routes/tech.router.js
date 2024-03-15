const { getAll, create, getOne, remove, update } = require('../controllers/tech.controllers');
const express = require('express');

const routerTech = express.Router();

routerTech.route('/')
    .get(getAll)
    .post(create);

routerTech.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerTech;