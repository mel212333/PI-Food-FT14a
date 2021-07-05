const { Router } = require('express');
// Importar todos los routers;
const recipes = require('./Recipe')
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/recipes", recipes)

module.exports = router;


//      var dietKetogenic = Diet.create({
//       name: "Ketogenic",
//     });
  
//     var dietGlutenFree = Diet.create({
//       name: "Gluten Free",
//     });
  
//     var dietVegetarian = Diet.create({
//       name: "Vegetarian",
//     });
  
//     var dietLactoVegetarian = Diet.create({
//       name: "Lacto Vegetarian",
//     });
  
//     var dietVegan = Diet.create({
//       name: "Vegan",
//     });
  
//     var dietPescetarian = Diet.create({
//       name: "Pescetarian",
//     });
//     var dietPaleo = Diet.create({
//       name: "Paleo",
//     });
//     var dietPrimal = Diet.create({
//       name: "Primal",
//     });
  
//     var dietWhole30 = Diet.create({
//       name: "Whole30",
//     });