import { Link } from "react-router-dom";
import styles from "./barranav.module.css";
import logotipo from "./logopeq.jpg"
import sesion from "./iniciar sesion.png"


export function BarraNav() {

    return (
        <>
            <nav className={styles.barra}>
                <div>
                    <Link to={"/busquedaproducto"}>
                        <img src={logotipo} 
                             alt="ejemplo logotipo" 
                             className={styles.logotipo} 
                             title="Ir al inicio"/>
                    </Link>
                </div>

                <div className={styles.menu} >
                    <ul className={styles.lista}>
                        <li id="elemento"><Link to={"/fichaproducto"} alt="alta de producto">Altas</Link></li>
                        <li><Link to={"/bajaproducto"} alt="baja de producto">Bajas</Link></li>
                        <li><Link to={"/busquedaproducto"} alt="busqueda de productos">Buscar</Link></li>
                    </ul>
                </div>
                <div>
                    <Link to={"/signup"}>
                        <img src={sesion} alt="iniciar sesion" className={styles.login} />
                    </Link>
                </div>

            </nav>


        </>


    )

}