

import { Swiper, SwiperSlide } from "swiper/react";

const data = [
    {
        id: 1,
        image: "src/assets/imgs/CarouselImg.png",
        title: "Slide 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    
]
export function HomeCarousel(){
    return(
        <div style={{marginTop: '80px'}}>
            <Swiper
            pagination={{clickable: true}}
            slidesPerView={1}
            navigation
            >
               {data.map((e) => {
                return(
                    <SwiperSlide key={e.id}>
                        <img src={e.image} alt={e.title} />
                    </SwiperSlide>
                )
               })}
            </Swiper>
        </div>
    )
}