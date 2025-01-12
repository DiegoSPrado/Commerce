import { Link } from "react-router-dom";
import LoginHeader from "../components/Form/LoginHeader";
import RegisterForm from "../components/Register/RegisterForm";
import "../styles/login.css"

function Register(){
    return(
        <>
            <div className="container">
                <div className="login">
                    <LoginHeader
                      title="Criar conta"  
                      parag="Preencha seus dados para criar a sua conta"
                    />
                    <RegisterForm/>
                    <Link to={"/login"} className="divWhite">Já tenho uma conta</Link>
                </div>
            </div>
            <div className="container2"></div>
        </>
    )
}

export default Register;