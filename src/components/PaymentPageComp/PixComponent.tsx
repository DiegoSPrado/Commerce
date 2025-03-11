import InputsForm from "../Form/InputsForm";
import { useState } from "react";

export function PixInfoComponent(){
    
    const [ email, setEmail ] = useState<string>('');
    const [cardNumber ,setCardNumber] = useState<string>('');
    const [ validade, setValidade] = useState<string>('');
    const [ cvc, setCvc] = useState<string>('');
    const [ cardName, setCardName] = useState<string>('');
    
    return(
        <div>
             <h2>Dados do cartão</h2>
            <InputsForm
            onChange={(evt) => setEmail(evt.target.value)}
                    value={email}
                    type="email"
                    id="email"
                    placeholder="E-mail"
            />
            <InputsForm
            onChange={(evt) => setCardNumber(evt.target.value)}
                    value={cardNumber}
                    type="text"
                    id="cdNumber"
                    placeholder="Número do cartão"
            />
            <div style={{display: 'flex', gap: '10px'}}>
                <InputsForm
                onChange={(evt) => setValidade(evt.target.value)}
                        value={validade}
                        type="text"
                        id="text"
                        placeholder="Validade"
                />
                <InputsForm
                onChange={(evt) => setCvc(evt.target.value)}
                        value={cvc}
                        type="text"
                        id="text"
                        placeholder="Cvv"
                />
            </div>
            <InputsForm
            onChange={(evt) => setCardName(evt.target.value)}
                    value={cardName}
                    type="text"
                    id="text"
                    placeholder="Nome do cartão"
            />
            <InputsForm
            onChange={(evt) => setCvc(evt.target.value)}
                    value={cvc}
                    type="select"
                    id="parcelaCard"
                    placeholder=""
            />
        </div>
    )
}