import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginWrapper } from "../../components/loginWrapper/loginWrapper";
import { rutaHost } from "../../components/rutaHost.js";

export function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
   

    const urlGetUser = rutaHost() + "api/v0.1/user";

    function emailHandler(event) {
        setEmail(event.target.value);
    }

    function passwordHandler(event) {
        setPassword(event.target.value);
    }

    async function LoginHandler() {
        //fetch de password y email   
       
        
        if (email!=="" && password!==""){
        const response = fetch(
                urlGetUser,
                 {
                     method: "GET",
                     headers: {
                         "Content-Type": "application/json"
                     }
                 }
    
             )
             console.log(await response);
        }   
        else
            alert("Deben cubrirse todos los campos");   

    }

    return (
        <LoginWrapper>

            <form>

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
                <button type="button" onClick={LoginHandler}>Entrar</button>
                <br />
                <p>¿No tienes cuenta?</p>
                <Link to="/signup">Regístrate</Link>

            </form>

        </LoginWrapper>

    )
}