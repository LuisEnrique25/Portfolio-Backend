const express = require('express');
const routerUser = require('./user.router');
const routerArea = require('./area.router');
const routerProyect = require('./proyect.router');
const router = express.Router();

// colocar las rutas aquí
router.use("/user", routerUser)
router.use("/areas", routerArea)
router.use("/proyects", routerProyect)

module.exports = router;
