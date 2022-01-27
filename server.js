
// -------------------------------------- PREPARATIVOS ------------------------------------------

const express = require("express")
const cors = require("cors");
require("./app/config/initial.config")

const app = express();

app.use(cors({origin: '*'}))
app.use(express.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// ---------------------------------------- EJERCICIO #1 ---------------------------------------------

// ------------- Ruta simple por GET accesible desde el navegador:
app.get("/", (req, res) => {

  let mensaje = generarMensaje("kathe's") // cableado

  res.json({ message:  mensaje}) 
  // res = respuesta al cliente o frontend
  // {"message":"Welcome to kathe's first CRUD."}
})

// ----------- Ruta por POST accesible desde frontend o cliente (Postman):
app.post("/dinamico", (req, res) => {

  console.log('req.body :>> ', req.body) // req = datos de la peticion

  let autorRequest = req.body.autor
  let mensaje = generarMensaje(autorRequest) // dinamico desde el request
  res.json({ message:  mensaje})

})

// ----------- Ruta por POST accesible desde frontend o cliente (Postman):
app.post("/abstracto", mensajeAbstracto) // funcion ubicada en cualquier otro archivo


// ----------- Funciones reutilizables del Ejercicio #1:

function mensajeAbstracto (req, res) { // recibe el req y res como parametros

  console.log('req.body :>> ', req.body)
  
  let mensaje = generarMensaje(req.body.autor)
  res.json({ message:  mensaje})

}

function generarMensaje (autor) {

  console.log('Ejecutando generarMensaje() ...');

  let mensaje = "Welcome to "+ autor + " first CRUD."
  return mensaje

}


// ---------------------------------------- EJERCICIO #2 ---------------------------------------------
const deudas = require("./app/controllers/deuda.controller.js")
app.post("/creardeuda", deudas.create)

// require("./app/routes/deuda.routes")(app);

//Se inicia la app en el puerto 3000
const puerto = 3000
app.listen(puerto, () => {
  console.log('Se inicio el servidor en el puerto:' + puerto)
})
