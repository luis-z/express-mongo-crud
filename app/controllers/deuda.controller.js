const db = require("../models");
const Deuda = db.deudas;

// Create and Save a new deuda
exports.create = async (req, res) => {

  return res.send(req.body)
  // Se guarda en la variable "deuda" el objeto que se almacenara en la DB.
  const nuevaDeuda = new Deuda({
    descripcion: req.body.descripcion,
    monto: req.body.monto
  })

  await nuevaDeuda.save()

  return res.send('deuda almacenada con exito')
}
