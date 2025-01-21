import { Link } from "react-router-dom";
import InputsForm from "../InputsForm";
import LoginHeader from "../LoginHeader";

import React from "react";
import ButtonInputs from "../ButtonInputs";


export function RegisterFormComponent(
  name: string,
  surname: string,
  email: string,
  password: string,
  repeatPassword: string,
  setName: (name: string) => void,
  setSurname: (surname: string) => void,
  setEmail: (email: string) => void,
  setPassword: (password: string) => void,
  setRepeatPassword: (repeatPassword: string) => void,
  handleRegister: (evt: React.FormEvent) => void,

)
{
  return (
    
    
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
                <ButtonInputs text="Cadastrar"/>
                <Link to={"/login"} className="divWhite">Já tenho uma conta</Link>
            </form>
        </>
  );
}