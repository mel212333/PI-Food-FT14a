const { DataTypes, UUIDV4 } = require('sequelize');
//const {typeDiet} = require ("../constante.js");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id :{
      type : DataTypes.INTEGER,
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
    type: DataTypes.TEXT(),
  },
  summary: {
    type: DataTypes.TEXT(),
    allowNull: false
  },
  aggregateLikes: {
    type: DataTypes.INTEGER,
    defaultValue : 0
  },
  healthScore: {
    type: DataTypes.INTEGER,
    defaultValue : 0

  },
  instructions: {
    type: DataTypes.TEXT
  }
  });
};
