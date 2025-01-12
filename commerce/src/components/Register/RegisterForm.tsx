import InputsForm from "../Form/InputsForm";
import ButtonInputs from "../Form/ButtonInputs";
import { useState } from "react";

function RegisterForm(){
    const [ name, setName] = useState("");
    const [ surname, setSurname] = useState("");
    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");

    return(
        <>
            <form action="">
                <InputsForm
                    onChange={(evt) => setName(evt.target.value)}
                    value={name}
                    type="text"
                    id="name"
                    placeholder="Nome"
                />
                <InputsForm
                    onChange={(evt) => setSurname(evt.target.value)}
                    value={surname}
                    type="text"
                    id="surname"
                    placeholder="Sobrenome" 
                />
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
                <ButtonInputs  text="Cadastrar"/>
            </form>
        </>
    )
};

export default RegisterForm;