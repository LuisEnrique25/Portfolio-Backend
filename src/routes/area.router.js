const { getAll, create, getOne, remove, update } = require('../controllers/area.controllers');
const express = require('express');

const routerArea = express.Router();

routerArea.route('/')
    .get(getAll)
    .post(create);

routerArea.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerArea;