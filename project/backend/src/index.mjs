import express from "express";
import { deleteProductFilterController, getProductController, getProductsController, getProductsFilterController, postProductController, uploadImageController } from "./controllers/productControllers.mjs";
import { validatorFactory } from "./middleware/validatorFactory.mjs";
import { productSchema } from "./schemas/product.mjs";
import aws from "aws-sdk";
import { config } from 'dotenv'

//const PORT = 3001;
//crear la instancia de express y lanza el servidor
//crear la api con la instancia de express

if (process.env.NODE_ENV !== "production") config()

try {
    
    const s3client = new aws.S3({
        apiVersion: process.env.S3_API_VERSION,
        endpoint: process.env.S3_ENDPOINT,
        signatureVersion: process.env.S3_SIGNATURE_VERSION
    })
    
    const expressInstance = express();
    expressInstance.listen(process.env.PORT, () => {
        console.log("Express ejecutándose en puerto ...", process.env.PORT);
    })
    expressInstance.use(express.json());

    //"/images/" será la ruta para las peticiones get
    //"./uploads/" será la ruta de la carpeta física en el servidor
    //desde donde esté el package.json, se debe crear previamente
    expressInstance.use("/images/", express.static("./uploads/"));
    expressInstance.use("/", express.static("../../frontend/build/", {index: "index.html"}));

    //"/upload/" será la ruta para las peticiones post
    //este endpoint envía el fichero de imagen a s3
    expressInstance.post("/upload/:s3Key", uploadImageController(s3client));
    
    //este endpoint envía los datos del formulario a la base de datos
    expressInstance.post("/api/v0.1/product", validatorFactory(productSchema), postProductController);

    expressInstance.get("/api/v0.1/products", getProductsController);
    expressInstance.get("/api/v0.1/product/:id", getProductController);

    //endpoint para obtener un listado de productos, filtrado por 
    //categorías, precio mínimo y máximo y página

    expressInstance.get("/api/v0.1/productFilter/", getProductsFilterController);

    //endpoint para borrar un producto de la base de datos por su id

    expressInstance.delete("/api/v0.1/productFilter/:id", deleteProductFilterController);

} catch (error) {
    console.error(error);
}