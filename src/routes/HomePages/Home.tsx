
import { CardCarouselComponent } from "../../components/HomeComp/CardCarousel";
import { CardProduct } from "../../components/HomeComp/CardProducts";
import { CategoryComponent } from "../../components/HomeComp/CategoryComponent";

import { HomeCarousel } from "../../components/HomeComp/HomeCarousel";

import "../../styles/App.css";

export function Home() {
    
    
        
    return(
        <div>
            <div>
                <HomeCarousel/>
            </div>
            <div className="carouselContainer">
                <CardCarouselComponent>
                    <CardProduct/>
                </CardCarouselComponent>
            </div>
            <div className="carouselContainer">
                <CardCarouselComponent>
                    <CategoryComponent/>
                </CardCarouselComponent>
            </div>
            <div className="carouselContainer">
                <CardCarouselComponent>
                    <CardProduct/>
                </CardCarouselComponent>
            </div>
        </div>
    )
}