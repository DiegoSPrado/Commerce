import { useParams } from "react-router-dom";
import dataFrame from "../data/products";
import { HomeHeader } from "../components/HomeHeaderComponents/HomeHeader";
import { FooterComponent } from "../components/HomeComp/FooterComponent";
import { MiniCardProductComponent } from "../components/ProductsPageComponents/MiniCardProduct";
import "../styles/ProductStyles/productsPage.css"

export function ProductPage(){
    
    const { id } = useParams();
    const produto = dataFrame.find((p) => p.id === Number(id));
   
    if(!produto) return <h1>Product not found.</h1>;

    return(
        <div>
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
                <div>
                    <div style={{textAlign: 'center'}}>
                        <h1 style={{fontWeight: '600'}}>{produto.name}</h1>
                        
                    </div>
                    <div>
                        <p>R$ {produto.price}</p>
                    </div>
                </div>
                
            </article>
            <FooterComponent/>
        </div>
    )
}