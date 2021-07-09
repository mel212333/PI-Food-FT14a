const { DataTypes, UUIDV4 } = require('sequelize');
//const {typeDiet} = require ("../constante.js");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id :{
      type : DataTypes.UUID,
      defaultValue : UUIDV4,
      primaryKey : true,
      allowNull: false, 
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    image:{
      type: DataTypes.STRING,
    },
    // diets: {
    //   type: DataTypes.ARRAY(DataTypes.ENUM(typeDiet)),
    // },
  //   diets: {
  //     type: DataTypes.ENUM(
  //       "gluten free",
  //       "ketogenic",
  //       "vegetarian",
  //       "lacto ovo vegetarian",
  //       "vegan",
  //       "pescetarian",
  //       "paleo",
  //       "primal",
  //       "whole30"
  // )
  //   },
  diets:{
   type: DataTypes.ARRAY(DataTypes.INTEGER)
  },
  summary: {
    type: DataTypes.TEXT(),
    allowNull: false
  },
  spoonacularScore: {
    type: DataTypes.INTEGER,
    defaultValue : 0
  },
  healthScore: {
    type: DataTypes.INTEGER,
    defaultValue : 0

  },
  analyzedInstructions: {
    type: DataTypes.TEXT
  }
  });
};
