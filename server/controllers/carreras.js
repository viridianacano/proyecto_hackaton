const models=require("../../database/models");

const addCarrera=async(req,res)=>{
    try{
        const {body} = req;
        console.log(body);
        const carrera=await models.carrera.create({
            nombre:body.nombre,
            grado: body.grado,

        }) //SQL INSERTO INTO
        return res.status(201).send(carrera);
    }catch(error){
        console.log(error);
        return res.status(500).send("Lo sentimos ha ocurrido un error interno en el servidor");
    }
};

module.exports={addCarrera};