import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginWrapper } from "../../components/loginWrapper/loginWrapper";
import { rutaHost } from "../../components/rutaHost.js";

export function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const urlFindUser = rutaHost() + "api/v0.1/finduser";

    function emailHandler(event) {
        setEmail(event.target.value);
    }

    function passwordHandler(event) {
        setPassword(event.target.value);
    }

    async function LoginHandler() {
        //fetch de password y email   

        const data = {email,password};

        if (email !== "" && password !== "") {
            const response = await fetch(
                urlFindUser,
                {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }

            )
            const responseJson = await response.json();
            console.log(responseJson);

            if (responseJson.email===email)
                alert("Usuario y password encontrado");
            else
                alert("Usuario o password no encontrado");
            

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