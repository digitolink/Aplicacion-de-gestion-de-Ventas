import { db } from "../db.mjs";

export function postProductController(req, res){
    try{
        db.run(`
        INSERT INTO productos (rutaFoto, descripcion,nombre,
        precio, categorias, stock)
        VALUES(?,?,?,?,?,?)
        `,[req.body.rutaFoto, req.body.descripcion,req.body.nombre,
        req.body.precio, req.body.categorias, req.body.stock],
        (error) =>{
            if (error){
                console.error(error);
                res.sendStatus(500);
            }
            else res.sendStatus(201);
        } )

    }catch(error){
        console.error(error);
        res.send("No fue posible añadir el producto a la base de datos");
    }
}