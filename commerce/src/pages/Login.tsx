import { Link } from "react-router-dom";
import LoginHeader from "../components/Form/LoginHeader";
import "../styles/login.css";
import LoginForm from "../components/Form/LoginForm";

function Login(){
    return(
           <> 
            <div className="container">
                <div className="login">
                    <LoginHeader
                    title="Entrar"
                                parag="Informe seus dados para acessar"
                    />
                    <LoginForm/>
                    <Link to={"/Register"} className="divWhite">Não tenho uma conta</Link>
                    <Link to={"/Register"} className="forgot">Esqueci a minha senha</Link>
                </div>
           
            
        </div>
        <div className="container2"></div>
        </>
    );
};

export default Login;