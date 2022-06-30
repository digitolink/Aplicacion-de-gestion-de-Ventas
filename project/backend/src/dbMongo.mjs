import { config } from "dotenv";
import { MongoClient } from "mongodb";


if (process.env.NODE_ENV !== "production" ) config();

//conectamos con el cliente del servicio de MongoDB de nube 
const client = new MongoClient(process.env.MONGO_URL);
client.connect();

//creamos la base de datos
const database = client.db("UsuariosDB");

//creamos una colección dentro de la base de datos
export const usuarios = database.collection("usuariosCollection");

