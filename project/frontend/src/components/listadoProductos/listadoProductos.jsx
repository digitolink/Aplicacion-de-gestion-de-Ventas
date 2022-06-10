//se debe hacer un fetch con una URL que contenga la query para 
//filtrar los resultados por cat, pmin, pmax y page. La otra 
//alternativa es mandar los parámetros en un fichero JSON con POST
import styles from "./listadoProductos.module.css";

export function ListadoProductos() {


    return (
        <table className={styles.estilotabla}>
            <th>
                <td>Agente</td>
                <td>IDProducto</td>
                <td>Nombre</td>
                <td>Precio</td>
                <td>Categoría</td>
            </th>
            
            




        </table>
    )

}