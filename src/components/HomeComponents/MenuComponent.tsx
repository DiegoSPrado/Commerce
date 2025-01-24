import { useState } from "react";
import "../../styles/homeheader.css"
import { Menu, X } from "lucide-react";

export function MenuComponent () {
    const [openMenu, setOpenMenu] = useState(false);

      const changeMenu = () => {
        setOpenMenu(!openMenu);
      }
    
    return(
        <div className="menu-container">
            <button className="ham-button" onClick={changeMenu}>
                {openMenu ? <X size={35}/> : <Menu size={35}/>}
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