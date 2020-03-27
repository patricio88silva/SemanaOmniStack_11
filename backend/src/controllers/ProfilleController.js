const connection = require ("../database/connections");

module.exports = {
    async index(request, response){
        const ong_id = request.headers.authorization;

        const incidentes = await connection("incidentes")
        .where("ong_id", ong_id)
        .select("*");

        return response.json(incidentes);

        } 
    }

    