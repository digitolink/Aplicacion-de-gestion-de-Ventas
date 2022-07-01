import { useState } from "react";
import { LoginWrapper } from "../../components/loginWrapper/loginWrapper";
import { rutaHost } from "../../components/rutaHost.js";

export function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nombre, setNombre] = useState("");
    const [rol, setRol] = useState("");

    const urlPostUser = rutaHost() + "api/v0.1/user";

    function nombreHandler(event) {
        setNombre(event.target.value);
    }

    function emailHandler(event) {
        setEmail(event.target.value);
    }

    function passwordHandler(event) {
        setPassword(event.target.value);
    }

    function registroHandler() {
        //fetch de rol, nombre , password y email para enviar a la base de datos 
        const datos = {rol, nombre, password, email};
        
        if (email!=="" && password!=="" && nombre!==""){
            fetch(
                urlPostUser,
                 {
                     method: "POST",
                     body: JSON.stringify(datos) ,
                     headers: {
                         "Content-Type": "application/json"
                     }
                 }
    
             )
             alert("Usuario añadido a la base de datos")
        }   
        else
            alert("Todos los campos son obligatorios");   

    }

    return (
        <LoginWrapper>

            <form>
                <label htmlFor="nombre">Nombre</label>
                <input type="text"
                    name="nombre"
                    placeholder="Introduce tu nombre"
                    onChange={nombreHandler}
                    value={nombre} />
                <br />
                <label htmlFor="email">Email</label>
                <input type="text"
                    name="email"
                    placeholder="Introduce tu email"
                    onChange={emailHandler}
                    value={email} />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password"
                    name="password"
                    placeholder="Introduce tu password"
                    onChange={passwordHandler}
                    value={password} />
                <br /><br />
                <button type="button" onClick={registroHandler}>Registro</button>

            </form>

        </LoginWrapper>

    )
}