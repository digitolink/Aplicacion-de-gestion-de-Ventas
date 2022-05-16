import styles from "./fichaProducto.module.css";
import img from "./shoes.jpg"

function desbloquearHandler(){

}

function grabarHandler(){

}

export function FichaProducto(props) {
    //(ver ejemplo del chat) 
    //useEffect con fetch para recibir la inf del producto, la respuesta se guarda en el state
    //conectar los state con los values de los input del formulario
    //si recibimos un id se llenan los campos del formulario
    return (
        <main className={styles.main}>
            <section className = {styles.foto} >
                <img className = {styles.tamanoFoto} src={img} alt="zapatos de muestra" />
            </section>
            <section className={styles.datosProducto}>
                <form action="">
                    <label htmlFor="">Ruta foto: </label><br />
                    <input type="text" /><br />

                    <label htmlFor="">Nombre: </label><br />
                    <input type="text" /><br />

                    <label htmlFor="">Descripción: </label><br />
                    <textarea placeholder=" Describe el producto">
                    </textarea>
                    <br />

                    <label htmlFor="">Categorías: </label><br />
                    <input type="text" /><br />

                    <label htmlFor="">Precio: </label><br />
                    <input type="text" /><br />

                    <label htmlFor="">Stock: </label><br />
                    <input type="text" /><br />

                    <button type="button" id="desbloquear" onClick={desbloquearHandler}>Desbloquear</button>
                    <button type="button" id="grabar" onClick={grabarHandler}>Grabar</button>

                </form>

            </section>

        </main>



    )


}
