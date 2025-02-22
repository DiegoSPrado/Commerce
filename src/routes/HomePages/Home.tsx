import { CardProduct } from "../../components/HomeComp/CardProducts";
import { CategoryComponent } from "../../components/HomeComp/CategoryComponent";

import { HomeCarousel } from "../../components/HomeComp/HomeCarousel";
import { ArrowSideComp } from "../../components/HomeHeaderComponents/ArrowSideComp";
import "../../styles/App.css";

export function Home() {
    return(
        <div>
            <div>
                <HomeCarousel/>
            </div>
            <div >
                <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>
                    <h2 className="titleHome">Mais vendidos em <span style={{color: 'var(--primary-color)'}}>Smartphones</span> </h2>
                    <ArrowSideComp/>
                </div>
                <div className="carouselContainer">
                    <CardProduct/>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>
                    <h2 className="titleHome">Nossas<span style={{color: 'var(--primary-color)'}}> categorias</span> </h2>
                    <ArrowSideComp/>
                </div>
                <div className="carouselContainer">
                    <CategoryComponent/>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>
                    <h2 className="titleHome">Compre mais em <span style={{color: 'var(--primary-color)'}}>categorias</span></h2>
                    <ArrowSideComp/>
                </div>
                <div className="carouselContainer">
                    <CardProduct/>
                </div>
                
            </div>
        </div>
    )
}