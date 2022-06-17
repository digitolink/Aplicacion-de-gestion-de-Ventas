import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./consultas.module.css";

export function Consultas(){

    const [nombre, setNombre] = useState("");
    const [preciomin, setPreciomin] = useState(0);
    const [preciomax, setPreciomax] = useState(0);  
    const [categoria, setCategoria] = useState("");
    const [id, setId] = useState(0);
    const navigate = useNavigate();

    function VerListaHandler(){

        navigate(`/busquedaproducto/?nombre=${nombre}&cat=${categoria}&pmin=${preciomin}&pmax=${preciomax}`);
    }
    function NombreHandler(event){
            setNombre(event.target.value);
    }
    function PrecioMinHandler(event){
            setPreciomin(event.target.value);
    }
    function PrecioMaxHandler(event){
            setPreciomax(event.target.value);
    }
    function CategoriaHandler(event){
            setCategoria(event.target.value);
    }
    function IdHandler(event){
            setId(event.target.value);
    }
    
    return(
        <>
            <form id="busqueda" className={styles.datosProducto}>
                <label htmlFor="nombrelabel">Nombre: </label><br />
                <input  type="text" 
                        name="nombrelabel"
                        id="nombre"
                        placeholder="Indica nombre"
                        value={nombre}
                        onChange={NombreHandler}
                        />
                        <br />

                      
                <label htmlFor="preciominlabel">Rango de precio: </label><br />
                <input  type="text" 
                        name="preciominlabel"
                        id="preciomin"
                        placeholder="Indica precio minimo"
                        value={preciomin}
                        onChange={PrecioMinHandler}
                        />
                -
                  
                <label htmlFor="preciomaxlabel"></label><br />
                <input  type="text" 
                        name="preciomaxlabel"
                        id="preciomax"
                        placeholder="Indica precio máximo"
                        value={preciomax}
                        onChange={PrecioMaxHandler}/>
                        <br />

                 
                <label htmlFor="categorialabel">Categoría: </label><br />
                <input  type="text" 
                        name="categorialabel"
                        id="categoria"
                        placeholder="Indica categoría"
                        value={categoria}
                        onChange={CategoriaHandler}/>
                        <br />

                   
                <label htmlFor="idlabel">ID: </label><br />
                <input  type="text" 
                        name="idlabel"
                        id="id"
                        placeholder="Indica identificador"
                        value={id}
                        onChange={IdHandler}/>
                        <br />

                <button type="button" onClick={VerListaHandler}>Buscar </button>


            </form>
        
        </>

    )
}