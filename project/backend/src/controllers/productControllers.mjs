import { client } from "../db.mjs";

export function postProductController(req, res) {
    try {
        client.query(`
        INSERT INTO productos (rutaFoto, descripcion,nombre,
        precio, categorias, stock)
        VALUES($1,$2,$3,$4,$5,$6)
        `, [req.body.rutaFoto, req.body.descripcion, req.body.nombre,
        req.body.precio, req.body.categorias, req.body.stock],
            (error, data) => {
                if (error) {
                    console.error(error.stack);
                    res.sendStatus(500);
                }
                else {
                    console.log(data.rows[0]);
                    res.sendStatus(201);
                }
            })

    } catch (error) {
        console.error(error);
        res.send("No fue posible añadir el producto a la base de datos");
    }

}

/*export function postImageController(req, res){
    //registramos la imagen en el servidor con un nombre distinto
    try {
        const imgId = Date.now();
        const file = createWriteStream("./uploads/" + imgId + ".jpg");
        req.pipe(file);
        res.send("fichero subido");
    } catch (error) {
        console.log(error);
        res.send("Error al intentar subir el archivo de imagen")
    }
}*/

export function uploadImageController(s3client) {
    return async function (req, res) {
        try {
            const s3ObjectKey = req.params.s3Key;

            const s3Response = s3client.upload({
                Bucket: process.env.S3_BUCKET,
                Key: s3ObjectKey,
                Body: req,
                ContentType: req.headers['content-type']
            })
            const result = await s3Response.promise()

            res.sendStatus(201);


        } catch (error) {
            res.send("Error al enviar imagen a s3");
        }
    }


}

export function getProductsController(req, res) {
    try {
        client.query(`
        SELECT * FROM productos`,
            (error, data) => {
                if (error) {
                    console.error(error);
                    res.sendStatus(500);
                }
                else {
                    res.json(data.rows);
                }
            })

    } catch (error) {
        console.error(error);
        res.send("No fue posible listar productos de la base de datos");
    }
}

export function getProductController(req, res) {
    try {
        client.query(`
            SELECT * FROM productos WHERE idProducto=
            `+ parseInt(req.params.id),

            (error, data) => {
                if (error) {
                    console.error(error);
                    res.send("Hubo un error al intentar listar");
                }
                else res.json(data.rows[0]);
            }
        )
    } catch (error) {
        console.error(error);
        res.send("No fue posible listar el producto de la base de datos");
    }

}