const express = require('express');
const routerUser = require('./user.router');
const routerArea = require('./area.router');
const routerProyect = require('./proyect.router');
const routerTech = require('./tech.router');
const routerMedia = require('./media.router');

const router = express.Router();

// colocar las rutas aquí
router.use("/user", routerUser)
router.use("/areas", routerArea)
router.use("/proyects", routerProyect)
router.use("/techs", routerTech)
router.use("/medias", routerMedia)


module.exports = router;
