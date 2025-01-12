import { useState } from "react";
import ButtonInputs from "../components/Form/ButtonInputs";
import InputsForm from "../components/Form/InputsForm";
import LoginHeader from "../components/Form/LoginHeader";

function TokenConfirm(){
    const [ token, setToken] = useState("")
    
    return(
        <div>
            <LoginHeader
                title="Confirme seu Email"
                parag="O token foi enviado para o seu email"
            />
            <InputsForm
               onChange={(evt)=> setToken(evt.target.value)}
               value={token}
               type="text"
               id="token"
               placeholder="Token" 
            />
            <ButtonInputs
            text="Confirmar"
            />
        </div>
    );
};

export default TokenConfirm;