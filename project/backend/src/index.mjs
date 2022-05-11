import express from "express";
const PORT = 3000;
//crear la instancia de express y lanza el servidor
//crear la api con la instancia de express

try {
    const expressInstance = express();
    expressInstance.listen(PORT, () => {
        console.log("Express ejecutándose...");
    })
    expressInstance.use(express.json());
    expressInstance.post("/api/v0.1/product",validatorFactory(productSchema), postProductController);


}catch(error){
    console.error(error);
}