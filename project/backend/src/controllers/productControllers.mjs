import { client } from "../db.mjs";

export function postProductController(req, res) {
    try {
        client.query(`
        INSERT INTO productos (rutaFoto, descripcion,nombre,
        precio, categorias, stock)
        VALUES($1,$2,$3,$4,$5,$6)
        `, [req.body.foto, req.body.descripcion, req.body.nombre,
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

            const headers = await s3client.headObject({
                Key: s3ObjectKey,
                Bucket: process.env.S3_BUCKET
            }).promise()

            // el proceso sería inverso, primero obtener el cid pero hemos subido la imagen primero
            // y sustituído el nombre por el cid al final del proceso 
            client.query(
                "UPDATE productos SET rutafoto=$1 WHERE rutafoto=$2",
                [headers.Metadata.cid, s3ObjectKey],
                (err, data) => {
                    if (err) throw err
                }
            )

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
                else {
                    const product = data.rows[0] || [];
                    product.rutafoto = "https://ipfs.filebase.io/ipfs/" + product.rutafoto;
                    res.json(product);
                }
            }
        )
    } catch (error) {
        console.error(error);
        res.send("No fue posible listar el producto de la base de datos");
    }

}

export function getProductsFilterController(req, res) {
    try {
        const cat = req.query.cat;
        const pmin = req.query.pmin;
        const pmax = req.query.pmax;
        const page = req.query.page;

        //construímos la query de SQL con los parámetros de la
        //query de la URL pasada al fetch
        let sqlQuery = "SELECT * FROM productos";
        
        /*let sqlQuery = "SELECT * FROM productos WHERE ";

        if (cat) {
            sqlQuery = sqlQuery + "categoria=" + cat;
        }
        if (page) {
            sqlQuery = sqlQuery + " AND page=" + page;
        }
        if (pmax && pmin) {
            sqlQuery = sqlQuery + " AND precio BETWEEN " + pmin +
                " AND " + pmax;
        }
        else {
            if (pmin && !pmax) {
                sqlQuery = sqlQuery + " AND precio>=" + pmin;

            }
            else {
                sqlQuery = sqlQuery + " AND precio<=" + pmax;
            }
        sqlQuery = sqlQuery + " ORDER BY nombre"+
                              " LIMIT 5 OFFSET " + (5*page).toString(); //Paginacion 
        }
        */
        //ejecutamos la query de SQL y enviamos el resultado de la petición
        client.query(sqlQuery, (error, data) => {
            if (error) {
                console.error(error);
                res.send("Hubo un error al listar el filtro de productos");
            }
            else {
                res.json(data); //convierte a json el array data
                //(en cambio en el fetch del frontend el método .json convertirá
                //este json en el formato original de data (array) para poder hacer 
                //.map sobre el resultado y mostrar las TableRow.
            }

        })

    } catch (error) {
        console.error(error);
        res.send("No fue posible listar los productos de la base de datos");
    }
}