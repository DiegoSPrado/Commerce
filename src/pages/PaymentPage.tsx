import { CartProductAmount } from "../components/BuyCartComponents/CartProductTotal";
import { HomeHeader } from "../components/HomeHeaderComponents/HomeHeader";
import { PaymentMethodComponent } from "../components/PaymentPageComp/PaymentMethod";

export function PaymentPage(){
    return(
        <div>
            <HomeHeader/>
            <section>
                <div>
                    <CartProductAmount quantidade={2} subtotal={4893} total={4893}/>
                </div>
                <div>
                    <h2>
                        Pagamento
                    </h2>
                    <p>Selecione a forma de pagamento</p>
                    <PaymentMethodComponent/>
                </div>
            </section>
        </div>
    )
}