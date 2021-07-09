const { Router } = require('express');
// Importar todos los routers;
const recipes = require('./Recipe');
const type = require ('./Type');
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/recipes", recipes);
router.use("/type",type);

module.exports = router;


