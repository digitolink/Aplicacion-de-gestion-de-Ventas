import { usuarios } from "../dbMongo.mjs";
import bcrypt from "bcrypt";

export async function postUserController(req, res) {
    //encriptamos req.body.password
    const hashedPassword =
        bcrypt.hash(req.body.password + process.env.BCRYPT_SECRET,
            parseInt(process.env.BCRYPT_ROUNDS));

    try {
        const result = await usuarios.insertOne({
            rol: req.body.rol,
            nombre: req.body.nombre,
            password: (await hashedPassword),
            email: req.body.email
        })
        res.json(result);

    } catch (error) {
        console.error(error);
        res.send("No fue posible crear el nuevo usuario");
    }
}

export async function getUsersController(req, res) {
    try {
        const result = await usuarios.find().toArray();
        res.json(result);

    } catch (error) {
        console.error(error);
        res.send("No fue posible listar los usuarios de la base de datos");
    }

}

export async function findUserController(req, res) {
    try {
        //buscamos en la bd el email indicado
        const result = await usuarios.findOne({email: req.body.email});
        let pass;
        //si se encuentra el email comprobamos el password 
        if (result) {
            pass = await bcrypt.compare(req.body.password + process.env.BCRYPT_SECRET, result.password);
        }
        else{
            res.json("No se ha encontrado el email indicado en la base de datos")
            return;
        }
        
        //si el password coincide devolvemos el objeto con los datos del usuario
        if (pass) {
            console.log(result);
            res.json(result);
        }
        else res.json("El password proporcionado es incorrecto");

    } catch (error) {
        console.error(error);
        res.json("Error al buscar el usuario en la base de datos");
    }

}
