import {usuarios} from "../dbMongo.mjs";
import bcrypt from "bcrypt";

export async function postUserController(req,res){
    //encriptamos req.body.password
    const hashedPassword = 
    bcrypt.hash(req.body.password + process.env.BCRYPT_SECRET,
        parseInt(process.env.BCRYPT_ROUNDS));

    try{
        const result = await usuarios.insertOne({
            rol: req.body.rol,
            nombre: req.body.nombre,
            password: (await hashedPassword),
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

export async function getUserController(req,res){
    try{
        const result = await usuarios.findOne();
        console.log(result);
        res.json(result);

    }catch(error){
        console.error(error);
        res.send("No fue posible encontrar el usuario en la base de datos");
    }

}
