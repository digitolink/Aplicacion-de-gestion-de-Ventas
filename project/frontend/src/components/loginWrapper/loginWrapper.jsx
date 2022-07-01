import { useState } from "react";
import styles from "./loginWrapper.module.css";

export function LoginWrapper({children}){

    return(
        <>
            <main className={styles.container}>
                <div className={styles.contenido}>
                    <div className={styles.izquierda}>
                    </div>
                    <div className={styles.derecha}>
                        {children}
                    </div>
                </div>

            </main>
        
        </>

    )
}

