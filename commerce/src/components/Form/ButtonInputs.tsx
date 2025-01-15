import "../../styles/login.css";

interface ButtonsProps {
    text: string,
    
};
function ButtonInputs(props:ButtonsProps) {
    return(
        <button className="buttons1" type="submit" >{props.text}</button>
 );
};

export default ButtonInputs;