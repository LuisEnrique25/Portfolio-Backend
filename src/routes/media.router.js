const { getAll, create, getOne, remove, update } = require('../controllers/media.controllers');
const { verifyJwt } = require('../utils/verifyJWT');
const express = require('express');

const routerMedia = express.Router();

routerMedia.route('/')
    .get(getAll)
    .post(verifyJwt, create);

routerMedia.route('/:id')
    .get(getOne)
    .delete(verifyJwt, remove)
    .put(verifyJwt, update);

module.exports = routerMedia;