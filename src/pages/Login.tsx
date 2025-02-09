
import  "../styles/login.css";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function Login(){
    const [ showDiv, setShowDiv] = useState<boolean>(false);

    useEffect(() => {
        const root = document.getElementById("root");
        if (root) root.classList.add("root-login");
    
        return () => {
          if (root) root.classList.remove("root-login");
        };
      }, []);
    

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 800px)");

        const handleMediaQueryChange = (event: MediaQueryListEvent) => {
        setShowDiv(event.matches);
        
    };
        setShowDiv(mediaQuery.matches);
        mediaQuery.addEventListener("change", handleMediaQueryChange);
        
        return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
    }, []);
    
   
    
    

    return(
           <> 
            <div className="container">
                <div className="login">
                    <Outlet/>
                </div>
        </div>
         <img src='/src/assets/imgs/WomenLogin.png' alt="Mulher Logo" className="imgLogin"/>
        { showDiv && <div className="container2"></div>}
        </>
    );
};

export default Login;