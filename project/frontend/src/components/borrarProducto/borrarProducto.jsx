import { useState } from "react"
import { rutaHost } from "../rutaHost";
import styles from "./borrarProducto.module.css";

const urlborrado = rutaHost()+"api/v0.1/productFilter/";
const urlconsulta = rutaHost()+"api/v0.1/product/"

export function BorrarProducto() {

    const [id, setId] = useState("2");

    function IdHandler(event) {
        setId(event.target.value);

    }

    async function BorrarHandler() {

        //Enviamos petición de borrado
        const response = await fetch(
            urlborrado + id,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
        const contenido=await response.json();
        console.log("\nREGISTROS BORRADOS: "+contenido+"\n")
        
        if(contenido>0)
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