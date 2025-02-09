import { useParams } from "react-router-dom";
import dataFrame from "../data/products";
import { HomeHeader } from "../components/HomeHeaderComponents/HomeHeader";
import { FooterComponent } from "../components/HomeComp/FooterComponent";

export function ProductPage(){
    
    const { id } = useParams();
    const produto = dataFrame.find((p) => p.id === Number(id));
   
    if(!produto) return <h1>Product not found.</h1>;

    return(
        <div>
            <HomeHeader/>
            <article>
                <h1>{produto.name}</h1>
                <p>{produto.price}</p>
                <img src={produto.image} alt={produto.name}/>
            </article>
            <FooterComponent/>
        </div>
    )
}