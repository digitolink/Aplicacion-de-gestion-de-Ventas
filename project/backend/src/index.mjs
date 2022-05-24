import { resolveAny } from "dns";
import express from "express";
import { createWriteStream } from "fs";

import { getProductController, getProductsController, postProductController } from "./controllers/productControllers.mjs";
import { validatorFactory } from "./middleware/validatorFactory.mjs";
import { productSchema } from "./schemas/product.mjs";
const PORT = 3001;
//crear la instancia de express y lanza el servidor
//crear la api con la instancia de express

try {
    const expressInstance = express();
    expressInstance.listen(PORT, () => {
        console.log("Express ejecutándose...");
    })
    expressInstance.use(express.json());

    //"/images/" será la ruta para las peticiones get
    //"./uploads/" será la ruta de la carpeta física en el servidor
    //desde donde esté el package.json, se debe crear previamente
    expressInstance.use("/images/", express.static("./uploads/"));

    //"/upload/" será la ruta para las peticiones post
    expressInstance.post("/upload", (req, res) => {
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
    })

    expressInstance.post("/api/v0.1/product", validatorFactory(productSchema), postProductController);
    expressInstance.get("/api/v0.1/products", getProductsController);
    expressInstance.get("/api/v0.1/product/:id", getProductController);


} catch (error) {
    console.error(error);
}