import React from "react";
import "../../styles/login.css";


interface InputsProps {
    type: string,
    id: string,
    placeholder: string,
    value?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
 };

function InputsForm(props:InputsProps){
    

    
    return(
        <>
        <input type={props.type} id={props.id} placeholder={props.placeholder} required className="inputs"
        onChange={props.onChange}
        value={props.value}/>
        </>
    );
};

export default InputsForm;