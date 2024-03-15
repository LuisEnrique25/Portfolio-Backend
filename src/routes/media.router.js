const { getAll, create, getOne, remove, update } = require('../controllers/media.controllers');
const express = require('express');

const routerMedia = express.Router();

routerMedia.route('/')
    .get(getAll)
    .post(create);

routerMedia.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerMedia;