import styles from "./fichaProducto.css";

export function FichaProducto() {
    return (
        <main>
            <section className={styles.foto} >
                <img src="shoes.jpg" alt="zapatos de muestra" />
            </section>
            <section className={styles.datosProducto}>
                <form action="">
                    <label htmlFor=""></label>
                    <input type="text" />

                    <label htmlFor=""></label>
                    <input type="text" />

                    <label htmlFor=""></label>
                    <input type="text" />

                    <label htmlFor=""></label>
                    <input type="text" />

                    <label htmlFor=""></label>
                    <input type="text" />

                    <label htmlFor=""></label>
                    <input type="text" />

                    <button id="desbloquear" onClick={desbloquearHandler}></button>
                    <button id="grabar" onClick={grabarHandler}></button>

                </form>

            </section>

        </main>



    )


}
