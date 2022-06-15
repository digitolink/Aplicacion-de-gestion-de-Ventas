//se debe hacer un fetch con una URL que contenga la query para 
//filtrar los resultados por cat, pmin, pmax y page. La otra 
//alternativa es mandar los parámetros en un fichero JSON con POST
import { useEffect, useState } from "react";
import styles from "./listadoProductos.module.css";
import { TdComponent } from "./tdComponent/tdComponent";

export function ListadoProductos() {

    const [filas, setFilas] = useState([]);

    const url = "http://localhost:3001/api/v0.1/productFilter/";

    async function getData() {
        const response = await fetch(
            url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
        )
        const data = await response.json()
        setFilas(data)
    }

    useEffect(
        () => {
            getData()
        },
        []
    )




    return (
        <table className={styles.estilotabla}>
            <thead>
                <tr>
                    <th>IDProducto</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Categoría</th>
                </tr>
            </thead>
            <tbody>
          
                {filas.map((fila) => {
                    return <TdComponent key={fila.IdProducto} datarow={fila} />
                })}

           
            </tbody>
        </table>
    )

}