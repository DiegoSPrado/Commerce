import { useState } from "react";
import InputsForm from "../../components/Form/InputsForm";
import LoginHeader from "../../components/Form/LoginHeader";
import "../../styles/login.css"
import ButtonInputs from "../../components/Form/ButtonInputs";


function RecoveryPassword(){
    const [ email, setEmail] = useState("")   

    return(
        <>
            <LoginHeader
                title="Recuperar senha"
                parag="Informe seu email para recuperar sua senha"
            />
            <form action="">       
                <InputsForm
                    onChange={(evt) => setEmail(evt.target.value)}
                    value={email}
                    type="email"
                    placeholder="Email"
                     id="email"
                />
                <ButtonInputs
                    text="Enviar"
                />
            </form>
        </>
    );
};

export default RecoveryPassword;