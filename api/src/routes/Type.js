const {Router, query} = require("express");
const {default: axios} = require("axios");
const router = Router();
const{Op} = require("sequelize");
const {Recipe, Type, intermedia} = require('../db')
require ("dotenv").config();
const{API_KEY}= process.env;
const {DIETS_TYPE} = require('../constante');

//>>>>>>>>> BUSQUEDA POR NAME Y GET GENERAL <<<<<<<<<//
 router.get("/", async (req, res) => {
        const diets = await Type.findAll()
        return res.status(200).json(diets);
 });


module.exports = router;