const db = require("../models");
const Deuda = db.deudas;

// Crear y almacenar una deuda en la DB
exports.create = async (req, res) => {

  // Se preparan los datos provenientes del request
  // con los campo de la DB que les corresponde:
  const nuevaDeuda = new Deuda({
    descripcion: req.body.descripcion,
    monto: req.body.monto
  })

  await nuevaDeuda.save() // Se ejecuta el guardado del registro nuevo

  res.json({message: 'deuda almacenada con exito'}) // Mensaje retornado al frontend o cliente.
  
}
