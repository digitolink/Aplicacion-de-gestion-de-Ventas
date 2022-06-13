//se debe hacer un fetch con una URL que contenga la query para 
//filtrar los resultados por cat, pmin, pmax y page. La otra 
//alternativa es mandar los parámetros en un fichero JSON con POST
import styles from "./listadoProductos.module.css";
import { TdComponent } from "./tdComponent/tdComponent";

export async function ListadoProductos() {

    const url = "http://localhost:3001/api/v0.1/productFilter/";

    const response = await fetch(
        url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }
    )
    //TODO: filas debe estar en un state para sincronizar

    const filas = await response.json();


    return (
        <table className={styles.estilotabla}>
            <th>
                <td>Agente</td>
                <td>IDProducto</td>
                <td>Nombre</td>
                <td>Precio</td>
                <td>Categoría</td>
            </th>
            <tbody>
                {filas.map((fila) => {
                    return <TdComponent key={fila.IDProducto} datarow={filas.fila}/>
            })}
            
            </tbody>
        </table>
    )

}