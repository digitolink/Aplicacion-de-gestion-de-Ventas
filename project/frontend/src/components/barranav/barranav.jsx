import { Link } from "react-router-dom";
import styles from "./barranav.module.css";
import logotipo from "./logopeq.jpg"
import sesion from "./iniciar sesion.png"

export function BarraNav() {

    return (
        <>
            <nav className={styles.barra}>
                <div>
                    <Link to={"/fichaproducto"}>
                        <img src={logotipo} alt="ejemplo logotipo" className={styles.logotipo} />
                    </Link>
                </div>

                <div className={styles.menu} >
                    <ul className={styles.lista}>
                        <li><Link to={"/fichaproducto"} alt="alta de producto">Altas</Link></li>
                        <li><Link to={"/bajaproducto"} alt="baja de producto">Bajas</Link></li>
                        <li><Link to={"/busquedaproducto"} alt="busqueda de productos">Buscar productos</Link></li>
                    </ul>
                </div>
                <div>
                    <Link to={"/fichaproducto"}>
                        <img src={sesion} alt="iniciar sesion" className={styles.login} />
                    </Link>
                </div>

            </nav>


        </>


    )

}