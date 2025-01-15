/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import axios from "axios";
import { RegisterFormComponent } from "../../components/Form/RegisterForm/registerForm";
import { toast, ToastContainer } from "react-toastify";
import { ConfirmTokenFormComponent } from "../../components/Form/RegisterForm/confirmTokenForm";

function RegisterForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [token, setToken] = useState("");
  const [confirmTokenPage, setConfirmTokenPage] = useState(false);

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/login/token",
        JSON.stringify({ email }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setConfirmTokenPage(true);
    } catch {
      toast.error("Erro ao enviar token");
    }
  };

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

      toast.success("Cadastro realizado com sucesso");
    } catch {
      toast.error("Erro ao confirmar token");
    }
  };

  return (
    <>
      <ToastContainer />
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
            handleRegister
          )}
    </>
  );
}

export default RegisterForm;
