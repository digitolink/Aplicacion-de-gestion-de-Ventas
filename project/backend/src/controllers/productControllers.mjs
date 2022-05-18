import { client } from "../db.mjs";

export function postProductController(req, res){
    try{
        client.query(`
        INSERT INTO productos (rutaFoto, descripcion,nombre,
        precio, categorias, stock)
        VALUES($1,$2,$3,$4,$5,$6)
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

export function getProductsController(req, res){
    try{
        client.query(`
        SELECT * FROM productos`,
        (error, data) =>{
            if (error){
                console.error(error);
                res.sendStatus(500);
            }
            else {
                res.json(data);
            }
        } )

    }catch(error){
        console.error(error);
        res.send("No fue posible listar productos de la base de datos");
    }
}