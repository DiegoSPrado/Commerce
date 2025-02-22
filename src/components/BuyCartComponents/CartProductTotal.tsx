interface CartProductAmountProps {
    quantidade: number,
    subtotal: number,
    total: number
}


export function CartProductAmount(props: CartProductAmountProps){
    return(
        <div >  
            <h2>Resumo</h2>
            <div className="amountDiv">
                <p>Produtos</p>
                <p>{props.quantidade}</p>
            </div>
            <div className="amountDiv">
                <p>Subtotal</p>
                <p>R$ {props.subtotal}</p>
            </div>
            <div className="amountDiv">
                <p>Total</p>
                <p>R$ {props.total}</p>
            </div>
        </div>
    )
}