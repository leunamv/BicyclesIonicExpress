module.exports = app => {
    const bicycle = require("../controllers/bicycle.controller.js");
  //EL ERROR ESTABA AQUI ARRIBA TENIA COMICS Y DEBIA TENER BICYCLES
    var router = require("express").Router();
  
    // Create a new Bicycle
    router.post("/", bicycle.create);
  //AQUI ARRIBA Y EN OTROS ...es bicycles o bicycle en singular??
    // Retrieve all Bicycle
    router.get("/", bicycle.findAll);
    // Retrieve a single Bicycle with id
    router.get("/:id", bicycle.findOne);
  
    // Update a Bicycle with id
    router.put("/:id", bicycle.update);
  
    // Delete a Bicycle with id
    router.delete("/:id", bicycle.delete);
  
    app.use('/api/bicycles', router);
  };