import sqlite3 from "sqlite3";
const creaTablaProductos=
`CREATE TABLE productos 
IF NOT EXISTS
PRODUCTOS(
    rutaFoto VARCHAR(1000),
    descripcion VARCHAR(1000),
    nombre VARCHAR(100) NOT NULL,
    precio INTEGER,
    categorias VARCHAR(1000),
    stock INTEGER,
    fechaAlta TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    idProducto AUTOINCREMENT PRIMARY KEY
) `

const db = new sqlite3.Database("./ventas.db", error => {
    if(error) throw "Error de creación de base de datos"
    console.log("Conectado a la base de datos...");
})
