import pg from "pg";
import { config } from "dotenv";

/**
 * Initilize environment
 */
// Uses .env file environment if service not in production environment
if (process.env.NODE_ENV !== 'production') config();


export const client = new pg.Client(process.env.PGURL);
client.connect();

const creaTablaProductos=
`CREATE TABLE
IF NOT EXISTS
productos(
    rutaFoto VARCHAR(1000),
    descripcion VARCHAR(1000),
    nombre VARCHAR(100) NOT NULL,
    precio INTEGER,
    categorias VARCHAR(1000),
    stock INTEGER,
    fechaAlta TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    idProducto SERIAL PRIMARY KEY
)`

client.query(creaTablaProductos, (err, res) => {
    console.log(err, res);
    //client.end();
})
