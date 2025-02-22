
import * as motion from "motion/react-client";
import { useState } from "react";

export function PaymentMethodComponent(){
    const [isOn, setIsOn] = useState<boolean>(false);

    const handleToggle = () => {
        setIsOn(!isOn);
    }
    
    return(
        <button
        className="toggle-container"
        style={{
            ...container,
            justifyContent: "flex-" + (isOn ? "start" : "end"),
        }}
        onClick={handleToggle}
    >
        <motion.div
            className="toggle-handle"
            style={handle}
            layout
            transition={{
                type: "spring",
                visualDuration: 0.2,
                bounce: 0.2,
            }}
        >Pix</motion.div>
    </button>
    )
};

const container = {
    width: 100,
    height: 50,
    backgroundColor: "var(--secondary-color)",
    borderRadius: 50,
    cursor: "pointer",
    display: "flex",
    
}

const handle = {
    width: 50,
    height: 50,
    backgroundColor: "black",
    borderRadius: "50%",
    color: 'white',
    textAlign: 'center'
}