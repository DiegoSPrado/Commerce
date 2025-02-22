

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; 
import "swiper/css/pagination"; 
import "../../styles/homeStyles/carouselStyles.css";    

import { Navigation, Pagination } from "swiper/modules";

const data = [
    {
        id: 1,
        image: "src/assets/imgs/aaa.png",
        title: "Slide 1",
        
    },
    {
        id: 2,
        image: "src/assets/imgs/aaa.png",
        title: "Slide 2",
        
    },
    {
        id: 3,
        image: "src/assets/imgs/aaa.png",
        title: "Slide 3",
    },
    {
        id: 4,
        image: "src/assets/imgs/aaa.png",
        title: "Slide 4",
    }
    
]
export function HomeCarousel(){
    return(
        <div className='carouselHome'>
            <Swiper
               modules={[Navigation, Pagination]}
               slidesPerView={1} 
               navigation 
               pagination={{ clickable: true }} 
               
            >
               {data.map((e) => {
                return(
                    <SwiperSlide key={e.id}>
                        <div>
                            <img src={e.image} alt={e.title} style={{width: '100%'}}/>
                        </div>
                    </SwiperSlide>
                )
               })}
            </Swiper>
        </div>
    )
}