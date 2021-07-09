
const server = require('./src/app.js');
const { conn , Type} = require('./src/db.js');

  
// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  //   var dietKetogenic = Type.create({
  //     name: "Ketogenic",
  //   });

  //   var dietGlutenFree = Type.create({
  //     name: "Gluten Free",
  //   });

  //   var dietVegetarian = Type.create({
  //     name: "Vegetarian",
  //   });
 
  //   var dietLactoVegetarian = Type.create({
  //     name: "Lacto Vegetarian",
  //   });
 
  //   var dietVegan = Type.create({
  //     name: "Vegan",
  //   });

  //   var dietPescetarian = Type.create({
  //     name: "Pescetarian",
  //   });
  //   var dietPaleo = Type.create({
  //     name: "Paleo",
  //   });
  //   var dietPrimal = Type.create({
  //     name: "Primal",
  //   });
 
  //   var dietWhole30 = Type.create({
  //     name: "Whole30",
  //   });
   });
});
