import {  useState } from "react";
import "../../styles/homeheader.css"


export function MenuComponent () {
    const [openMenu, setOpenMenu] = useState(false);
      const changeMenu = () => {
        setOpenMenu(!openMenu);
    };

    
    return(
        <div className="menu-container">
            <button className="ham-button" onClick={changeMenu}>
                <div className={`linha ${openMenu ? "aberto" : ""}`} />
                <div className={`linha ${openMenu ? "aberto" : ""}`} />
                <div className={`linha ${openMenu ? "aberto" : ""}`} />
            </button>
            { openMenu &&  (<nav className="menu">
                <ul>
                    <li>Home</li>
                    <li>Departamentos</li>
                    <li>Contato</li>
                </ul>
            </nav>)}
        </div>
    )
}