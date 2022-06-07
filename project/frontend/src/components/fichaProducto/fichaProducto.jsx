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
    
    const [nombre, setNombre] = useState(null);
    const [descripcion, setDescripcion] = useState(null);
    const [categorias, setCategorias] = useState(null);
    const [precio, setPrecio] = useState(null);
    const [stock, setStock] = useState(null);
    const [encodedFile, setEncodedFile] = useState("");
    const [newFoto, setNewFoto] = useState();
    const [rutaFoto, setRutaFoto] = useState();

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
    
    /**
     * Envía el formulario y la foto
     * @param {*} event 
     */
    function grabarHandler(event){
        
        //si hemos seleccionado una foto en el formulario, 
        //le asiganmos un nombre basado en el timestamp y su nombre físico 
        if (newFoto) data.foto = Date.now().toString()+newFoto.name;
        if (nombre!=null) data.nombre = nombre;
        if (descripcion!=null) data.descripcion = descripcion;
        if (categorias!=null) data.categorias = categorias; 
        if (precio!=null) data.precio = parseFloat(precio);
        if (stock!=null) data.stock = parseInt(stock);
        
        //este fetch envía los datos del formulario a la base de datos
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
         sendFoto(data.foto, newFoto)
         alert("Producto añadido a la base de datos")

    }
    
    //este fetch envía la imagen a s3
    function sendFoto(fotoName, fotoBlob) {
        fetch(
            urlPostImage+fotoName,
             {
                 method: "POST",
                 body: fotoBlob
             }

         )

    }

    function FotoHandler(event){
        //setFoto(event.target.value);
        //setEncodedFile(URL.createObjectURL(event.target.files[0]));
        console.log(event.target.files);


        setNewFoto(event.target.files[0]);

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
               //TODO: esta url esta hardcodeada, hay que obtenerla del props
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
                            console.log(data.nombre);
                            setNombre(data.nombre);
                            setDescripcion(data.descripcion);
                            setCategorias(data.categorias); 
                            setPrecio(data.precio);
                            setStock(data.stock);
                            setRutaFoto(data.rutafoto);
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
                <img src={rutaFoto} className={styles.tamanoFoto} alt="Imagen cargada"></img>
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
                           multiple
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
