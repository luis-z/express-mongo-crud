module.exports = app => {
  const deudas = require("../controllers/deuda.controller.js");

  // Create a new Tutorial
  app.post("/creardeuda", deudas.create);

  // Retrieve all deudas
  // router.get("/", deudas.findAll);

  // // Retrieve all published deudas
  // router.get("/published", deudas.findAllPublished);

  // // Retrieve a single Tutorial with id
  // router.get("/:id", deudas.findOne);

  // // Update a Tutorial with id
  // router.put("/:id", deudas.update);

  // // Delete a Tutorial with id
  // router.delete("/:id", deudas.delete);

  // // Create a new Tutorial
  // router.delete("/", deudas.deleteAll);

};
