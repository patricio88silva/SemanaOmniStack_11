const express = require("express");

const OngController = require("./controllers/OngController")
const IncidentsController = require("./controllers/IncidentsController")
const ProfilleController = require("./controllers/ProfilleController")
const SessionController = require("./controllers/SessionController")

//const connection = require("./database/connections");

const routers = express.Router();

//routers.get("/ongs", async (request, response) => {
  //  const ongs = await connection ("ongs").select("*");

    //return response.json(ongs);
//})

routers.post("/sessions", SessionController.create);

routers.get("/ongs", OngController.index);
routers.post("/ongs", OngController.create);

routers.get("/profille", ProfilleController.index);

routers.get("/incidentes", IncidentsController.index);
routers.post("/incidentes", IncidentsController.create);

routers.delete("/incidentes/:id", IncidentsController.delete);

 module.exports = routers;