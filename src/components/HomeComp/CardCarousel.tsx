
import { ReactNode, useEffect, useRef } from "react";
import { ArrowSideComp } from "../HomeHeaderComponents/ArrowSideComp";
import "../../styles/App.css";

interface CardCarouselProps {
    children: ReactNode,
   
}

export function CardCarouselComponent(props: CardCarouselProps){
    
        const carouselRef = useRef<HTMLDivElement>(null);
        const scrollBarRef = useRef<HTMLDivElement>(null);
    
            useEffect(() => {
                const carousel = carouselRef.current;
                const scrollBar = scrollBarRef.current;
    
                if (carousel && scrollBar) {
                    const syncScroll = () => {
                       const scrollRatio = carousel.scrollLeft / (carousel.scrollWidth - scrollBar.clientWidth);
                       scrollBar.scrollLeft = scrollRatio * (scrollBar.scrollWidth - scrollBar.clientWidth) 
                    };
    
                    carousel.addEventListener("scroll", syncScroll);
                    return () => carousel.removeEventListener("scroll", syncScroll);
                }
            }, [])
    
    return(
        <div className="">
            <div>
                <h2 className="titleHome">Mais vendidos em <span style={{color: 'var(--primary-color)'}}>Smartphones</span> </h2>
                <ArrowSideComp/>
            </div>
            <div  className="customScrollBar">
                <div className="scrollThumb"></div>
            </div>
            <div className="carouselFrameDiv">
                {props.children}
            </div>
        </div>
    )
}