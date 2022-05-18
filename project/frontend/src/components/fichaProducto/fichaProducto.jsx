import { useEffect, useState } from "react";
import styles from "./fichaProducto.module.css";
import img from "./shoes.jpg"

export function FichaProducto(props) {
    //(ver ejemplo del chat) 
    //useEffect con fetch para recibir la inf del producto, la respuesta se guarda en el state
    //conectar los state con los values de los input del formulario
    //si recibimos un id se llenan los campos del formulario
    
    const [rutaFoto, setRutaFoto] = useState("");
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [categorias, setCategorias] = useState("");
    const [precio, setPrecio] = useState("");
    const [stock, setStock] = useState("");

    const[disableForm, setDisableForm] = useState(true);

    const url = "postgres://fallofxq:NQJ73FFaUz0OqB3V932GUJAskV9bItaE@tyke.db.elephantsql.com/fallofxq"

    function desbloquearHandler(event){
       setDisableForm(false);
    }
    
    function grabarHandler(event){
    
    }
    
    function RutaFotoHandler(event){
        setRutaFoto(event.target.value);
    }
    function NombreHandler(event){
        setNombre(event.target.value);
    }
    function DescripcionHandler(event){
        setDescripcion(event.target.value);
    }
    function CategoriasHandler(event){
        setCategorias(event.target.value);
    }
    function PrecioHandler(event){
        setPrecio(event.target.value);
    }
    function StockHandler(event){
        setStock(event.target.value);
    }
    


    useEffect(
        
        async function InfProducto (){

            const response = await fetch(
                url,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }

            )

        },
        []
        

    )
    
    return (
        <main className={styles.main}>
            <section className = {styles.foto} >
                <img className = {styles.tamanoFoto} src={img} alt="zapatos de muestra" />
            </section>
            <section className={styles.datosProducto}>
                <form id="formulario">
                    <label htmlFor="RutaFoto">Ruta foto: </label><br />
                    <input disabled = {disableForm}
                           type="text"
                           name="RutaFoto"
                           id="rutafoto"
                           placeholder="Escribe la ruta de la foto" 
                           onChange={RutaFotoHandler}
                           /><br />

                    <label htmlFor="Nombre">Nombre: </label><br />
                    <input disabled = {disableForm}
                           type="text" 
                           name="Nombre"
                           id="nombre"
                           placeholder="Escribe el nombre del producto"
                           onChange={NombreHandler}/><br />

                    <label htmlFor="Descripcion">Descripción: </label><br />
                    <textarea disabled = {disableForm}
                              name="Descripcion"
                              id="descripcion"
                              placeholder=" Describe el producto"
                              onChange={DescripcionHandler}>
                    </textarea>
                    <br />

                    <label htmlFor="Categorias">Categorías: </label><br />
                    <input disabled = {disableForm}
                           type="text" 
                           name="Categorias"
                           id="categorias"
                           placeholder="categ. separadas por comas"
                           onChange={CategoriasHandler}/><br />

                    <label htmlFor="Precio">Precio: </label><br />
                    <input disabled = {disableForm}
                           type="text"
                           name="Precio"
                           id="precio" 
                           placeholder="Escribe precio de venta"
                           onChange={PrecioHandler}/><br />

                    <label htmlFor="Stock">Stock: </label><br />
                    <input disabled = {disableForm}
                           type="text" 
                           name="Stock"
                           id="stock"
                           placeholder="Indica unidades disponibles"
                           onChange={StockHandler}/><br />

                    <button type="button" id="desbloquear" onClick={desbloquearHandler}>Desbloquear</button>
                    <button type="button" id="grabar" onClick={grabarHandler}>Grabar</button>

                </form>

            </section>

        </main>



    )


}
