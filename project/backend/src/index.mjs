import express from "express";
import { getProductController, getProductsController, postProductController } from "./controllers/productControllers.mjs";
import { validatorFactory } from "./middleware/validatorFactory.mjs";
import { productSchema } from "./schemas/product.mjs";
import aws from "aws-sdk";
import { busboyParserFactory } from "./middleware/busboyParserFactory.mjs";
import { s3uploaderFactory } from "./controllers/s3uploaderFactory.mjs";

const PORT = 3001;
//crear la instancia de express y lanza el servidor
//crear la api con la instancia de express

try {
    
    const s3client = new aws.S3({
        apiVersion: process.env.S3_API_VERSION,
        endpoint: process.env.S3_ENDPOINT,
        signatureVersion: process.env.S3_SIGNATURE_VERSION
    })
    const s3Uploader = s3uploaderFactory(s3client, process.env.s3_BUCKET);
    const busboyParser = busboyParserFactory(s3Uploader);
    
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
    expressInstance.post("/upload", busboyParser)

    expressInstance.post("/api/v0.1/product", validatorFactory(productSchema), postProductController);
    expressInstance.get("/api/v0.1/products", getProductsController);
    expressInstance.get("/api/v0.1/product/:id", getProductController);


} catch (error) {
    console.error(error);
}