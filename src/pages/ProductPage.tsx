import { useParams } from "react-router-dom";
import dataFrame from "../data/products";
import { HomeHeader } from "../components/HomeHeaderComponents/HomeHeader";
import { FooterComponent } from "../components/HomeComp/FooterComponent";
import { MiniCardProductComponent } from "../components/ProductsPageComponents/MiniCardProduct";
import "../styles/ProductStyles/productsPage.css"
import ButtonInputs from "../components/Form/ButtonInputs";
import ButtonRegister from "../components/Form/RegisterForm/ButtonRegister";
import { ProductInformation } from "../components/ProductsPageComponents/ProductInformation";
import InputsForm from "../components/Form/InputsForm";
import { useState } from "react";
import { CardProduct } from "../components/HomeComp/CardProducts";
import { useCart } from "../context/UseCart";


export function ProductPage(){
    
    const [ cep, setCep] = useState<string>("")

    const { id } = useParams();
    const produto = dataFrame.find((p) => p.id === Number(id));
    const { addToCart } = useCart();

    if(!produto) return <h1>Product not found.</h1>;

    const priceWdiscount = produto.price - produto.discount;

    
    return(
        <div >
            <HomeHeader/>
            <article>
                <div style={{width: '80%', height: '382px', backgroundColor: 'var(--secondary-color)', display: 'flex', justifyContent: 'center', margin: 'auto', padding: '40px', borderRadius: '11px'}}>
                    <img src={produto.image} alt={produto.name}/>
                </div>
                <div className="miniCardDiv">
                    <MiniCardProductComponent image={produto.image} alt={produto.name}/>
                    <MiniCardProductComponent image={produto.image} alt={produto.name}/>
                    <MiniCardProductComponent image={produto.image} alt={produto.name}/>
                    <MiniCardProductComponent image={produto.image} alt={produto.name}/>
                </div>
                <div style={{textAlign: 'left', margin: '20px'}}>
                    <div >
                        <h1 style={{fontWeight: '600'}}>{produto.name}</h1>
                        
                    </div>
                    <div>
                        <p style={{textDecorationLine: 'line-through'}} className="aaaa">R$ {produto.price}</p>
                        <p className="priceDiscount"> R$ {priceWdiscount} <span style={{color: 'rgba(36, 155, 62, 1)'}}>5% Off</span></p>
                        <p>Em até 12 vezes no cartão de crédito</p>
                    </div>
                    <div >
                        <p>Memória</p>
                        <div className="divMemory">
                            <div>256GB</div>
                            <div>512GB</div>
                            <div>1TB</div>
                        </div>
                    </div>
                    <div>
                        <p>Informe o seu CEP para calcular o frete:</p>
                        <div className="divCep" >
                            <InputsForm 
                            onChange={(e) => setCep(e.target.value)}
                            type="text"
                            value={cep}
                            id="CEP"
                            placeholder="CEP"

                            />
                            <ButtonInputs text="Calcular"/>
                        </div>
                    </div>
                    <ButtonRegister text="Adicionar ao carrinho" onclick={() => {addToCart(produto)}}/>
                    <div>
                        <ProductInformation/>
                    </div>
                </div>
                <div >
                    <h3>Produtos <span style={{color: 'var(--primary-color)'}}>relacionados</span></h3>
                    <div style={{display: 'flex'}}>
                        <CardProduct/>
                    </div>
                </div>
                
            </article>
            <FooterComponent/>
        </div>
    )
}