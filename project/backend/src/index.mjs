import express from "express";
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
    expressInstance.post("/api/v0.1/product",validatorFactory(productSchema), postProductController);
    expressInstance.get("/api/v0.1/products", getProductsController);
    expressInstance.get("/api/v0.1/product/:id", getProductController);

}catch(error){
    console.error(error);
}