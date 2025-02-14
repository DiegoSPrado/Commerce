import { FooterComponent } from "../components/HomeComp/FooterComponent";
import { HomeHeader } from "../components/HomeHeaderComponents/HomeHeader";
import { useCart } from "../context/UseCart";
import '../styles/ProductStyles/cartStyles.css'

export function CartPage(){
    
    const { carrinho } = useCart();

    return(
        <div>
            <HomeHeader/>
            <section>
                <h1>Produtos</h1>
                {carrinho.length === 0 ? (
                    <p>Carrinho Vazio</p>
                ): (
                    carrinho.map((item, index) =>   (
                        <div key={index} className="cartProductDiv">
                            <img src={item.image} alt={item.name} />
                            <p>{item.name}</p>
                            <div>
                                <div>
                                    <button className="btnCartQuant">+</button>
                                    <div>1</div>
                                    <button className="btnCartQuant">-</button>
                                </div>
                                <p>{item.price}</p>
                            </div>
                        </div>
                    ))
                )}
                
            </section>
            <FooterComponent/>
        </div>
    )
}