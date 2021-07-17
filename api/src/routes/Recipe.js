const {Router} = require("express");
const {default: axios} = require("axios");
const router = Router();
const{Op} = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const {Recipe, Type, intermedia} = require('../db')
require ("dotenv").config();
const{API_KEY}= process.env;

//>>>>>>>>> BUSQUEDA POR NAME Y GET GENERAL <<<<<<<<<//

router.get("/", async (req, res) => {
  let {name} = req.query;
  let {tipoDieta} = req.query;
  try{
 
      if(name){
         let traeNombre = await Recipe.findAll({
             where:{
                 title:{
                     [Op.like]: `%${name}%`,
                 }
             }, 
             include: [Type],
         })
    
     let recipesApi = await axios(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&apiKey=${API_KEY}&query=${name}&number=9`)
     //console.log("soy Api", recipesApi)
    // let recipesBd = Recipe.findAll();
     let recipes = await recipesApi.data.results.map((obj) =>{
         var re = {
             id: obj.id,
             title: obj.title,
             image: obj.image,
             summary: obj.summary,
             aggregateLikes: obj.aggregateLikes,
             healthScore: obj.healthScore,
             instructions: obj.analyzedInstructions.map((s)=>s.steps.map((p)=>p.step)),
             diets: obj.diets,
         };
         return re;
     });
         res.json(recipes.concat(traeNombre))
      
     }else{
         let recipesApi = await axios(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&apiKey=${API_KEY}&number=9`)
     //console.log("soy Api", recipesApi)
     let recipesBd = Recipe.findAll();
     let recipes = await recipesApi.data.results.map((obj) =>{
         var re = {
             id: obj.id,
             title: obj.title,
             image: obj.image,
             summary: obj.summary,
             aggregateLikes: obj.aggregateLikes,
             healthScore: obj.healthScore,
             instructions: obj.analyzedInstructions.map((s)=>s.steps.map((p)=>p.step)),
             diets: obj.diets,
         };
         return re;
     });
          res.json(recipes.concat(recipesBd))
     }
     ///////Tipo de dieta

     
 }catch(error){
      console.log("No existe el nombre de la receta")
 }
 })



//>>>>>>>>> BUSQUEDA POR ID <<<<<<<<<//

 router.get("/detalle/:id", async (req,res) => {
    let { id } = req.params;
    try {
      if (id.includes("-")) {
          const recipeDB = await Recipe.findOne({
               where: 
               {id},
                include: { model: Type, 
                    attributes: ['name'],
                    through: {
                        attributes: []
                    }}});
          const details = {
              id: recipeDB.id,
              title: recipeDB.title,
              summary: recipeDB.summary,
              spoonacularScore: recipeDB.spoonacularScore,
              healthScore: recipeDB.healthScore,
              analyzedInstructions: recipeDB.analyzedInstructions,
              diets: recipeDB.diets,
              image: recipeDB.image,
          } 
          console.log("soy Detalle", details)
         // console.log("doy recipeDB", recipeDB)
        
          res.send(details)
      } else {
          let recipeAPI = await axios.get(
              `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
            );
            var recipe = {
                id: recipeAPI.data.id,
                title: recipeAPI.data.title,
                summary: recipeAPI.data.summary,
                spoonacularScore: recipeAPI.data.spoonacularScore,
                healthScore: recipeAPI.data.healthScore,
                analyzedInstructions: recipeAPI.data.analyzedInstructions.map((s) =>
                  s.steps.map((p) => p.step)
                ),
                diets: recipeAPI.data.diets,
                image: recipeAPI.data.image,
              };
            res.send(recipe);
      }
    } catch (error) {
        console.log(error);
    }
    
  });

  router.post("/", async(req,res)=>{    
    const newRecipe = req.body;
    console.log(newRecipe);
    try { 
      let [recipe] = await Recipe.findOrCreate({
        where: {
          id: uuidv4(),
          title: newRecipe.title,
          summary: newRecipe.summary,
          spoonacularScore: newRecipe.spoonacularScore,
          healthScore: newRecipe.healthScore,
          analyzedInstructions: newRecipe.analyzedInstructions,
          image: newRecipe.image,
          diets: newRecipe.diets,
        }
    })        
      await recipe.addType(newRecipe.diets);
      return res.send(recipe);
    } catch (error) {
      console.log(error);
    }
  });
module.exports = router;