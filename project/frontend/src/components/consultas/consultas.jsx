import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./consultas.module.css";

function notNull(string) {
        return !!string
}

export function Consultas() {

        const [nombre, setNombre] = useState();
        const [preciomin, setPreciomin] = useState();
        const [preciomax, setPreciomax] = useState();
        const [categoria, setCategoria] = useState();
        const [id, setId] = useState();
        const navigate = useNavigate();


        function VerListaHandler() {
                //let url = new URL("/listadoProductos/");
                let params = new URLSearchParams();
                if (nombre) params.append("nombre", nombre);
                if (preciomin) params.append("pmin", preciomin);
                if (preciomax) params.append("pmax", preciomax);
                if (categoria) params.append("cat", categoria);
                if (id) params.append("idProducto", id);
                navigate("/listadoProductos/?" + params.toString());
        }
        function NombreHandler(event) {
                setNombre(event.target.value);
        }
        function PrecioMinHandler(event) {
                setPreciomin(event.target.value);
        }
        function PrecioMaxHandler(event) {
                setPreciomax(event.target.value);
        }
        function CategoriaHandler(event) {
                setCategoria(event.target.value);
        }
        function IdHandler(event) {
                setId(event.target.value);
        }

        return (
                <>
                        <div className={styles.datosProducto}>
                                <form id="busqueda" className={styles.datosForm}>
                                        <label htmlFor="nombrelabel">Nombre: </label><br />
                                        <input type="text"
                                                name="nombrelabel"
                                                id="nombre"
                                                placeholder="Indica nombre"
                                                value={nombre}
                                                onChange={NombreHandler}
                                        />
                                        <br />

                                        <label htmlFor="preciominlabel">Rango de precio: </label><br />
                                        <div className={styles.enlinea}>

                                                <input type="text"
                                                        name="preciominlabel"
                                                        id="preciomin"
                                                        placeholder="Indica precio minimo"
                                                        value={preciomin}
                                                        onChange={PrecioMinHandler}
                                                />

                                                <label htmlFor="preciomaxlabel"></label><br />
                                                <input type="text"
                                                        name="preciomaxlabel"
                                                        id="preciomax"
                                                        placeholder="Indica precio máximo"
                                                        value={preciomax}
                                                        className={styles.margen}
                                                        onChange={PrecioMaxHandler} />
                                                <br />
                                        </div>

                                        <label htmlFor="categorialabel">Categoría: </label><br />
                                        <input type="text"
                                                name="categorialabel"
                                                id="categoria"
                                                placeholder="Indica categoría"
                                                value={categoria}
                                                onChange={CategoriaHandler} />
                                        <br />


                                        <label htmlFor="idlabel">ID: </label><br />
                                        <input type="text"
                                                name="idlabel"
                                                id="id"
                                                placeholder="Indica identificador"
                                                value={id}
                                                onChange={IdHandler} />
                                        <br />

                                        <button type="button" onClick={VerListaHandler}>Buscar </button>



                                </form>
                        </div>
                </>

        )
}