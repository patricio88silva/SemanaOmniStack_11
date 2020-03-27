const express = require ("express");
const cors = require("cors");

const routers = require ("./routers");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routers);

app.listen(3333);

/**
 * 
 * Pedir a aplicação para express ir a requisição e tranformar o jSON em JavaScript
 */
/**
 * Rota / Recursos
 * 
 * Metodo HTTP:
 * GET: Buscar uma informação no Back-end
 * POST: Criar uma informação do Back-end
 * PUT: Alterar uma informação do Back-end
 * DELETE: Apagar uma informação do Back-end
 * 
 */



