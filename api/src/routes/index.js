const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;

// router.get("/recipes", async (req, res) => {
//     try {
//       const { score } = req.query;
  
//       let recipesAPI = await axios.get(
//         `https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&apiKey=${API_KEY}&number=10`
//       );
//       let recipesDB = await Recipe.findAll();
  
//       let recipes = 
//   recipesAPI.data.results.map
//   ((obj) => {
//         return {
//           id: 
//   obj.id
//   ,
//           title: obj.title,
//           image: obj.image,
//           score: obj.spoonacularScore,
//           healthScore: obj.healthScore,
//           diets: obj.diets,
//           mine: false,
//         };
//       });
//       let arrayRecipes = recipesDB.concat(recipes);
  
//       let array = [];
  
//       if (!score) {
//         res.json(arrayRecipes);
//       } else {
//         for (j in arrayRecipes) {
//           result = arrayRecipes[j].title
//             .toLowerCase()
//             .match(name.toLocaleLowerCase());
//           if (result) {
//             array.push(arrayRecipes[j]);
//             res.json(array);
//           }
          
//           console.log(array);
//           // console.log(arrayRecipes);
//         }
//       }
//     } catch (err) {
//       console.error(err.message);
//     }
//   });
//   Facundo Maksud says://carga manual de las dietas
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