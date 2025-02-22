
import InputsForm from "../../components/Form/InputsForm";
import ButtonInputs from "../../components/Form/ButtonInputs";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import LoginHeader from "../../components/Form/LoginHeader";
import { InputPassword } from "../../components/Form/InputPassword";


function LoginForm(){
    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");
    const navigate = useNavigate();    


    const handleLogin = async (evt: React.FormEvent) => {
        evt.preventDefault();
        try{
            const response = await axios.post('http://localhost:4000/api/v1/login/', 
            JSON.stringify({ email, password}),
            {
                headers: { 'Content-Type': 'application/json'}
            }
           );
            console.log(response) 
            toast.success("Login Realizado com sucesso!")
            localStorage.setItem("token", response.data[0]);
            navigate("/");
        }
        catch {
         toast.error("Email ou senha inválidos.")  
        }  
    };
    
    return(
        <>
            <ToastContainer/>
            <LoginHeader
                title="Entrar"
                parag="Informe seus dados para acessar"
             />
            <form action="" onSubmit={handleLogin}>
                <InputsForm
                    onChange={(evt) => setEmail(evt.target.value)}
                    value={email}
                    type="email"
                    id="email"
                    placeholder="E-mail"
                />
                <div className="passwordDiv">
                    <InputPassword
                        onChange={(evt) => setPassword(evt.target.value)}
                        value={password}
                        id="password"
                        placeholder="Senha"
                    />

                </div>
                <ButtonInputs text="Entrar" />
                <Link to={"/login/register"} className="divWhite">Não tenho uma conta</Link>
                <Link to={"/login/recovery"} className="links">Esqueci a minha senha</Link>
            </form>
        </>
    );
};

export default LoginForm;