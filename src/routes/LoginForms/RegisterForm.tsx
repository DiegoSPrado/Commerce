/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";

import axios from "axios";
import { RegisterFormComponent } from "../../components/Form/RegisterForm/registerForm";
import { toast, ToastContainer } from "react-toastify";
import { ConfirmTokenFormComponent } from "../../components/Form/RegisterForm/confirmTokenForm";
import { Navigate, useNavigate } from "react-router-dom";

function RegisterForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [token, setToken] = useState("");
  const [confirmTokenPage, setConfirmTokenPage] = useState(false);
  useEffect(() => {
    console.log("confirm token atualizado", confirmTokenPage);
  }, [confirmTokenPage])

  const navigate = useNavigate()
  const handleRegister = async () => {
    if(password === repeatPassword) {
      try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/login/token",
        JSON.stringify({ email }),
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("Resposta do servidor:", response);
      console.log("Estado atualizado para página de confirmação");
      changePage()
    } catch (error) {
      console.error("Erro ao enviar token:", error);
      
    }
    
    } else {
      toast.error("Senhas não conferem");
    }
    
  };

  const changePage = () => {
    setConfirmTokenPage(true);
    console.log("Página atual:", confirmTokenPage);
    toast.success("Um token foi enviado para seu email");
    
  }
    
  const handleConfirmToken = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/login/register",
        JSON.stringify({
          name,
          surname,
          email,
          password,
          repeatPassword,
          token,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
        
      );
      console.log(response)
      toast.success("Cadastro realizado com sucesso");
      navigate("/login");
    } catch {
      toast.error("Erro ao confirmar token");
    }
  };

  return (
    <>
      <ToastContainer  />
      {confirmTokenPage
        ? ConfirmTokenFormComponent(token, setToken, handleConfirmToken)
        : RegisterFormComponent(
            name,
            surname,
            email,
            password,
            repeatPassword,
            setName,
            setSurname,
            setEmail,
            setPassword,
            setRepeatPassword,
            handleRegister,
            
          )}
    </>
  );
}

export default RegisterForm;
