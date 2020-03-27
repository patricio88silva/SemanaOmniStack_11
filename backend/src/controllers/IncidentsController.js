const connection = require ("../database/connections");

module.exports = {
    async index(request, response){
        const {page = 1} = request.query;

        const [count] = await connection("incidentes").count();
       // console.log(count);

        const incidentes =  await connection("incidentes")
        .join("ongs", "ongs.id", "=", "incidentes.ong_id")
        .limit(5)
        .offset((page - 1) * 5)
        .select([
            "incidentes.*",
            "ongs.nome",
            "ongs.email",
            "ongs.whattsapp",
            "ongs.city",
            "ongs.uf"]);

        response.header("X-Total-Count", count["count(*)"]);

        return response.json(incidentes);
    },

    async create (request, response){
        const {titulo, descricao, valor} = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection ("incidentes").insert({
            titulo,
            descricao,
            valor,
            ong_id,
        });
        return response.json({id})
    },
    async delete (request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incidentes = await connection("incidentes")
        .where("id", id)
        .select("ong_id")
        .first();

        if(incidentes.ong_id != ong_id){
            return response.status(401).json({error: "Operacao nao permitida" });
        
        }
        await connection("incidentes").where("id", id).delete();
        return response.status(204).send();

    }
};