const {Router, query} = require("express");
const {default: axios} = require("axios");
const router = Router();
const{Op} = require("sequelize");
const {Recipe, Type, intermedia} = require('../db')
require ("dotenv").config();
const{API_KEY}= process.env;

//>>>>>>>>> BUSQUEDA POR NAME Y GET GENERAL <<<<<<<<<//

router.get("/", async (req, res) => {
    let {name} = req.query;

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
   
    let recipesApi = await axios(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&apiKey=${API_KEY}&query=${name}&number=100`)
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
        let recipesApi = await axios(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&apiKey=${API_KEY}&number=100`)
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
}catch(error){
     console.log("No existe el nombre de la receta")
}
})


//>>>>>>>>> BUSQUEDA POR ID <<<<<<<<<//

 router.get("/:id", async (req,res) => {
    let { id } = req.params;
    try {
      if (id.includes("-")) {
          const recipeDB = await Recipe.findOne({ where: {id},
          include: {model: Type, attributes: ['diets'],
          through: {attributes: []}}});
          const details = {
              id: recipeDB.id,
              title: recipeDB.title,
              summary: recipeDB.summary,
              spoonacularScore: recipeDB.spoonacularScore,
              healthScore: recipeDB.healthScore,
              analyzedInstructions: recipeDB.analyzedInstructions,
              diets: recipeDB.diets.map((e)=>e.diets).join(', '),
              image: recipeDB.image,
          } 
          res.send(recipe)
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

  router.post("/recipes", async(req,res)=>{     
   
       const {
           
              title,
              image,
              summary,
              spoonacularScore,
              healthScore,
              analyzedInstructions,
              diets,
              
            } = req.body;
            try{
                let newRecipe = await Recipe.create({
                    title,
                    image,
                    summary,
                    spoonacularScore,
                    healthScore,
                    analyzedInstructions,
                });
                await newRecipe.setType(diets);
                res.json(newRecipe);
       
       
    }catch(error){
        res.status(500).json(err);
    }
})

module.exports = router;