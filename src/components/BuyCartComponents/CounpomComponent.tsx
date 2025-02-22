import { useState } from "react";
import InputsForm from "../Form/InputsForm";

export function CounpomComponent(){
   
   const [counpom, setCounpoum] = useState<string>('')
   
    return(
        <div >
            <p>Possui um cupom promocional?</p>
            <div className="counpomContainer">
                <InputsForm
                onChange={(e) => setCounpoum(e.target.value)}
                type="text"
                value={counpom}
                id="counpom"
                placeholder="Cupom promocional"
                />
                <button className="divWhite" style={{width: '50%'}}> Adicionar</button>
            </div>
        </div>
    )
}