const { getAll, create, getOne, remove, update, login } = require('../controllers/user.controllers');
const { verifyJwt } = require("../utils/verifyJWT");

const express = require('express');

const routerUser = express.Router();

routerUser.route('/')
    .get(verifyJwt, getAll)
    .post(create);

routerUser.route('/login')
    .post(login)

routerUser.route('/:id')
    .delete(verifyJwt, remove)
    .put(verifyJwt, update);

module.exports = routerUser;