import {usuarios} from "../dbMongo.mjs";

export async function postUserController(req,res){

    try{
        const result = await usuarios.insertOne({
            rol: req.body.rol,
            nombre: req.body.nombre,
            password: req.body.password,
            email: req.body.email
        })
        res.json(result);

    }catch(error){
        console.error(error);
        res.send("No fue posible crear el nuevo usuario");
    }
}

export async function getUsersController(req,res){
    try{
        const result = await usuarios.find().toArray();
        res.json(result);

    }catch(error){
        console.error(error);
        res.send("No fue posible listar los usuarios de la base de datos");
    }

}