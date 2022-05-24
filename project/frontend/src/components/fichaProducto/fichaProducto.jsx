import { useEffect, useState } from "react";
import styles from "./fichaProducto.module.css";
//import img from "./shoes.jpg"

export function FichaProducto(props) {
    //(ver ejemplo del chat) 
    //useEffect con fetch para recibir la inf del producto, la respuesta se guarda en el state
    //conectar los state con los values de los input del formulario
    //si recibimos un id se llenan los campos del formulario

    //crear endpoint para consulta de un solo producto para ver su ficha
    //warning de "A component is changing an uncontrolled input..."" en consola del navegador:
    //consultar página de ayuda que indica o ir quitando y probando los inputs para ver el que falla 
    
    const [foto, setFoto] = useState("");
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [categorias, setCategorias] = useState("");
    const [precio, setPrecio] = useState("");
    const [stock, setStock] = useState("");
    const [encodedFile, setEncodedFile] = useState("");

    const[disableForm, setDisableForm] = useState(true);

    const url = "http://localhost:3001/api/v0.1/product/1";
    const urlPostProduct = "http://localhost:3001/api/v0.1/product";
    const urlPostImage = "http://localhost:3001/upload/";

    const data= {
        foto: "",
        descripcion:"",
        nombre:"",
        precio:0,
        categorias:"",
        stock:0,
        fechaAlta: undefined
    };

    function desbloquearHandler(){
       setDisableForm(!disableForm);
    }
    
    function grabarHandler(event){
        
        data.foto = foto;
        data.nombre = nombre;
        data.descripcion = descripcion;
        data.categorias = categorias; 
        data.precio = parseFloat(precio);
        data.stock = parseInt(stock);
        fetch(
            urlPostProduct,
             {
                 method: "POST",
                 body: JSON.stringify(data) ,
                 headers: {
                     "Content-Type": "application/json"
                 }
             }

         )
         alert("Producto añadido a la base de datos")
    }
    
    function FotoHandler(event){
        //setFoto(event.target.value);
        //setEncodedFile(URL.createObjectURL(event.target.files[0]));
        fetch(
            urlPostImage,
             {
                 method: "POST",
                 body: event.target.files[0] 
             }

         )
         //TODO: debemos guardar el nombre del fichero en la base de datos
         //para referenciarlo cuando lo vayamos a descargar para mostrarlo
         //Llamamos al endpoint que obtiene el id de la base de datos
    
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
        
         ()=> {
           fetch(
                url,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }

            ).then(
                (response) => {
                    response.json().then(
                        (data) => {
                            setFoto(data.foto);
                            console.log(data.nombre);
                            setNombre(data.nombre);
                            setDescripcion(data.descripcion);
                            setCategorias(data.categorias); 
                            setPrecio(data.precio);
                            setStock(data.stock);
                        }
                    )

                }
            )
        },
        []
        

    )
    
    return (
        <main className={styles.main}>
            <section className = {styles.foto} >
                {/*<img className = {styles.tamanoFoto} src={img} alt="zapatos de muestra" />
                <input type="file" name="ficheroNombre" id="ficheroId"></input>*/}
                <img src={encodedFile} className={styles.tamanoFoto} alt="Imagen cargada"></img>
            </section>
            <section className={styles.datosProducto}>
                <form id="formulario">
                    <label htmlFor="Foto">Enviar imagen: </label><br />
                    <input disabled = {disableForm}
                           type="file"
                           name="Foto"
                           id="foto"
                           placeholder="Escribe la ruta de la foto" 
                           onChange={FotoHandler}
                           value={foto}
                           /><br />

                    <label htmlFor="Nombre">Nombre: </label><br />
                    <input disabled = {disableForm}
                           type="text" 
                           name="Nombre"
                           id="nombre"
                           placeholder="Escribe el nombre del producto"
                           onChange={NombreHandler}
                           value={nombre}/>
                           <br />

                    <label htmlFor="Descripcion">Descripción: </label><br />
                    <textarea disabled = {disableForm}
                              name="Descripcion"
                              id="descripcion"
                              placeholder=" Describe el producto"
                              onChange={DescripcionHandler}
                              value={descripcion}>
                    </textarea>
                    <br />

                    <label htmlFor="Categorias">Categorías: </label><br />
                    <input disabled = {disableForm}
                           type="text" 
                           name="Categorias"
                           id="categorias"
                           placeholder="categ. separadas por comas"
                           onChange={CategoriasHandler}
                           value={categorias}/>
                           <br />

                    <label htmlFor="Precio">Precio: </label><br />
                    <input disabled = {disableForm}
                           type="text"
                           name="Precio"
                           id="precio" 
                           placeholder="Escribe precio de venta"
                           onChange={PrecioHandler}
                           value={precio}/>
                           <br />

                    <label htmlFor="Stock">Stock: </label><br />
                    <input disabled = {disableForm}
                           type="text" 
                           name="Stock"
                           id="stock"
                           placeholder="Indica unidades disponibles"
                           onChange={StockHandler}
                           value={stock}/>
                           <br />

                    <button type="button" id="desbloquear" onClick={desbloquearHandler}>Modificar/Bloquear</button>
                    <button type="button" id="grabar" onClick={grabarHandler}>Grabar</button>

                </form>

            </section>

        </main>



    )


}
