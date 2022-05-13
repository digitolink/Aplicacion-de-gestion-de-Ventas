import styles from "./components/fichaProducto/fichaProducto.module.css";

function desbloquearHandler(){

}

function grabarHandler(){

}

export function FichaProducto() {
    return (
        <main>
            <section className={styles.foto} >
                <img src="./components/fichaProducto/shoes.jpg" alt="zapatos de muestra" />
            </section>
            <section className={styles.datosProducto}>
                <form action="">
                    <label htmlFor="">Ruta foto: </label>
                    <input type="text" /><br />

                    <label htmlFor="">Nombre: </label>
                    <input type="text" /><br />

                    <label htmlFor="">Descripción: </label>
                    <input type="text" /><br />

                    <label htmlFor="">Categorías: </label>
                    <input type="text" /><br />

                    <label htmlFor="">Precio: </label>
                    <input type="text" /><br />

                    <label htmlFor="">Stock: </label>
                    <input type="text" /><br />

                    <button id="desbloquear" onClick={desbloquearHandler}></button>
                    <button id="grabar" onClick={grabarHandler}></button>

                </form>

            </section>

        </main>



    )


}
