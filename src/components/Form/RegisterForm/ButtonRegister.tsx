import React from "react";
import "../../../styles/login.css";

interface ButtonsProps {
    text: string,
    onclick: React.MouseEventHandler
};
function ButtonRegister(props:ButtonsProps) {
    return(
        <button className="buttons1" type="submit" onClick={props.onclick}>{props.text}</button>
 );
};

export default ButtonRegister;