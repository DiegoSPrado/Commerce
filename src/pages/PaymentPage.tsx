import { CartProductAmount } from "../components/BuyCartComponents/CartProductTotal";
import { FooterComponent } from "../components/HomeComp/FooterComponent";
import { HomeHeader } from "../components/HomeHeaderComponents/HomeHeader";
import { CardInfoComponent } from "../components/PaymentPageComp/CardInfo";
import { PaymentMethodComponent } from "../components/PaymentPageComp/PaymentMethod";

export function PaymentPage(){
    return(
        <div>
            <HomeHeader/>
            <section className='section-payment'>
                <div>
                    <CartProductAmount/>
                </div>
                <div className="divSlash-cartPage"></div>
                <div>
                    <h2>
                        Pagamento
                    </h2>
                    <p>Selecione a forma de pagamento</p>
                    <PaymentMethodComponent/>
                    <div>
                        <CardInfoComponent/>
                    </div>
                </div>
            </section>
            <FooterComponent/>
        </div>
    )
}