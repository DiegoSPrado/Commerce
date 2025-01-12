import InputsForm from "./InputsForm";
import ButtonInputs from "./ButtonInputs";
import { useState } from "react";


function LoginForm(){
    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");
    
    return(
        <>
            <form action="">
                <InputsForm
                    onChange={(evt) => setEmail(evt.target.value)}
                    value={email}
                    type="email"
                    id="email"
                    placeholder="E-mail"
                />
                <InputsForm
                    onChange={(evt) => setPassword(evt.target.value)}
                    value={password}
                    type="password"
                    id="password"
                    placeholder="Senha"
                />
                <ButtonInputs text="Entrar" />
            </form>
        </>
    );
};

export default LoginForm;