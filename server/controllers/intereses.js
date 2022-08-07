const models=require("../../database/models");

const addInteres=async(req,res)=>{
    try{
        const {body} = req;
        console.log(body);
        const interes=await models.intereses.create({
            nombre:body.nombre,
            descripcion: body.descripcion,

        }) //SQL INSERTO INTO
        return res.status(201).send(interes);
    }catch(error){
        console.log(error);
        return res.status(500).send("Lo sentimos ha ocurrido un error interno en el servidor");
    }
};

module.exports={addInteres};