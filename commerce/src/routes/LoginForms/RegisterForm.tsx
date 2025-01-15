/* eslint-disable @typescript-eslint/no-unused-vars */
import InputsForm from "../../components/Form/InputsForm";
import ButtonInputs from "../../components/Form/ButtonInputs";
import { useState } from "react";
import { BrowserRouter as  Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import LoginHeader from "../../components/Form/LoginHeader";

function RegisterForm(){
    const [ name, setName] = useState("");
    const [ surname, setSurname] = useState("");
    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");
    const [ repeatPassword, setRepeatPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    
    const handleRegister = async (evt: React.FormEvent) => {
        evt.preventDefault();
        console.log("formulario enviado");

        console.log(name, surname, email, password)

        try{
            const response = await axios.post('http://localhost:4000/api/v1/login/token', 
                JSON.stringify({ name, surname, email, password, repeatPassword}),
                {
                    headers: { 'Content-Type': 'application/json'}
                }
            );
            console.log(response);
            const token = ""
            const newUser = [{name, surname, email, password, repeatPassword, token}]
            
            setMessage("Registro realizado com sucesso!");
            localStorage.setItem("user", JSON.stringify(newUser));
            navigate("/login/token");
        } catch{
            setMessage("Falha no registro. Por favor, tente novamente.");
        }   
    }

    return(
        <>
            <LoginHeader
                title="Criar conta"  
                parag="Preencha seus dados para criar a sua conta"
                    />
            <form action="" onSubmit={handleRegister}>
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
                    onChange={(evt) => setRepeatPassword(evt.target.value)}
                    value={repeatPassword}
                    type="password"
                    id="repeatPassword"
                    placeholder="Senha"
                />
                <InputsForm
                    onChange={(evt) => setPassword(evt.target.value)}
                    value={password}
                    type="password"
                    id="password"
                    placeholder="Repita a senha"
                />
                <ButtonInputs  text="Cadastrar" />
                <Link to={"/login"} className="divWhite">Já tenho uma conta</Link>
            </form>
        </>
    )
};

export default RegisterForm;