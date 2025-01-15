/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import ButtonInputs from "../../components/Form/ButtonInputs";
import InputsForm from "../../components/Form/InputsForm";
import LoginHeader from "../../components/Form/LoginHeader";
import { BrowserRouter as  Navigate, useNavigate } from "react-router-dom";
import "../../styles/login.css";
import axios from "axios";


function TokenConfirm(){
    const [ token, setToken] = useState("");

    const navigate = useNavigate();
    
    const handleRegister = async (evt: React.FormEvent) => {
        evt.preventDefault();
        const user = localStorage.getItem("user");

        console.log(user)
            
        

        try {
            const response = await axios.post('http://localhost:4000/api/v1/login/register', { newUser },
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );
            console.log(response);
            console.log(newUser);
        } catch (error) {
            console.error(error);
        };  
        
    };


    
    
    return(
        <>
            <LoginHeader
                title="Confirme seu Email"
                parag="O token foi enviado para o seu email"
            />
            <form action="" onSubmit={handleRegister}>
                <InputsForm
                    onChange={(evt)=> setToken(evt.target.value)}
                     value={token}
                     type="text"
                     id="token"
                     placeholder="Token"
                 />
                <ButtonInputs text="Confirmar"/>
                    <button className="divWhite">Não recebi, enviar novamente</button>
                    
            </form>
                
        </>
    );
};

export default TokenConfirm;