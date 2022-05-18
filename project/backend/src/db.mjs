import pg from "pg";

export const client = new pg.Client(
    {
        user: 'fallofxq',
        host: 'tyke.db.elephantsql.com',
        database: 'fallofxq',
        password: 'NQJ73FFaUz0OqB3V932GUJAskV9bItaE',
        port: 3211,
      }
)
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
    idProducto INTEGER PRIMARY KEY
)`

client.query(creaTablaProductos, (err, res) => {
    console.log(err, res);
    client.end();
})
