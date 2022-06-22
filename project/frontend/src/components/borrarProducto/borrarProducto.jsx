import { useState } from "react"
import styles from "./borrarProducto.module.css";
const urlborrado = "http://localhost:3001/api/v0.1/productFilter/";
const urlconsulta = "http://localhost:3001/api/v0.1/product/"

export function BorrarProducto() {

    const [id, setId] = useState("2");

    function IdHandler(event) {
        setId(event.target.value);

    }

    async function BorrarHandler() {

        /*//comprobamos si el producto está en la base de datos
        const filaid = await fetch(
            urlconsulta + id,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )

        console.log(await filaid.text());
        */
        
        //Enviamos petición de borrado
        const response = fetch(
            urlborrado + id,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
        console.log("REGISTROS BORRADOS: "+response.body)
        
        if(response.body>0)
            alert("Producto borrado");
        else{
            alert("Producto no encontrado")
        }
    }

    return (
        <>
            <form id="borradoForm" className={styles.datosProducto}>
                <label htmlFor="id">ID</label> <br />
                <input type="text"
                    name="id"
                    placeholder="Indica el ID del producto a borrar"
                    value={id}
                    onChange={IdHandler} />
                <br />
                <button type="button" onClick={BorrarHandler}> Borrar producto</button>
            </form>

        </>

    )


}