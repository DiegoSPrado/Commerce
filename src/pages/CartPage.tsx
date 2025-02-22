import { FooterComponent } from "../components/HomeComp/FooterComponent";
import { HomeHeader } from "../components/HomeHeaderComponents/HomeHeader";
import { CartProductAmount } from "../components/BuyCartComponents/CartProductTotal";
import { useCart } from "../context/UseCart";
import '../styles/ProductStyles/cartStyles.css'
import { CounpomComponent } from "../components/BuyCartComponents/CounpomComponent";
import ButtonInputs from "../components/Form/ButtonInputs";

import { Link } from "react-router-dom";
import {  ToastContainer } from "react-toastify";
import CartButtons from "../components/BuyCartComponents/CartButtons";

export function CartPage(){
    
    const { carrinho} = useCart();

   

    return(
        <div>
            <ToastContainer/>
            <HomeHeader/>
            <section  className="section-cartpage">
                <h1>Produtos</h1>
                <div>
                    {carrinho.length === 0 ? (
                        <p>Carrinho Vazio</p>
                    ): (
                        carrinho.map((item, index) =>   (
                            <div key={index} className="cartProductDiv">
                                <div style={{backgroundColor: 'var(--secondary-color)',  width: '50px'}} className="cartDivs">
                                    <img src={item.image} alt={item.name} width={'40px'}/>
                                </div>
                                <div className="cartDivs">
                                    <p>{item.name}</p>
                                    <div style={{display: 'flex'}}>
                                        <div className="productSpecificationsCart">Preto Espacial</div>
                                        <div className="productSpecificationsCart">512GB</div>
                                    </div>
                                </div>
                                <div className="cartDivs">
                                    <CartButtons id={item.id} quantity={item.quantidade}/>
                                    <p>{item.price}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className="divSlash-cartPage"></div>
                <div>
                    <CartProductAmount quantidade={2} subtotal={4893} total={4893}/>
                    <CounpomComponent/>
                    <Link to={'/payment'} style={{textDecoration: 'none'}}>
                        <ButtonInputs text="Continuar para pagamento"/>
                    </Link>
                </div>
            </section>
            <FooterComponent/>
        </div>
    )
}