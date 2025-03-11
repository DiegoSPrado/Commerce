

import { useCart } from "../../context/UseCart"


export function CartProductAmount(){
    
    const {getTotalItens, getTotalPrice} = useCart();

    return(
        <div >  
            <h2>Resumo</h2>
            <div className="amountDiv">
                <p>Produtos</p>
                <p className="lstP">{getTotalItens()}</p>
            </div>
            <div className="amountDiv">
                <p>Subtotal</p>
                <p className="lstP">R$ {getTotalPrice()}</p>
            </div>
            <div className="amountDiv">
                <p>Total</p>
                <p className="lstP">R$ {getTotalPrice()}</p>
            </div>
        </div>
    )
}