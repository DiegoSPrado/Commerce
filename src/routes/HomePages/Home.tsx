import { CardProduct } from "../../components/HomeComp/CardProducts";

import { HomeCarousel } from "../../components/HomeComp/HomeCarousel";
import "../../styles/App.css";

export function Home() {
    return(
        <>
            <div>
                <HomeCarousel/>
            </div>
            <div className="containerPoducts">
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <h2 className="titleHome">Mais vendidos em <span style={{color: 'var(--primary-color)'}}>Smartphones</span> </h2>
                    <div>Ver todos </div>
                </div>
                <div className="divProducts">
                    <CardProduct/>
                </div>
                <div>
                    <h2 className="titleHome">Compre mais em <span style={{color: 'var(--primary-color)'}}>categorias</span></h2>
                </div>
               
            </div>
        </>
    )
}