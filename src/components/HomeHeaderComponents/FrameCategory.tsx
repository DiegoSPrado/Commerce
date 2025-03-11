import { useState } from 'react';
import '../../styles/App.css'

export function FrameCategory(){
   
  const [ selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const frameArray = [
        {
          id: 1,
          category: 'Eletrodomésticos'
        },
        {
          id: 2,
          category: 'Celulares'
        },
        {
          id: 3,
          category: 'Cozinha'
        },
        {
          id: 4,
          category: 'Beleza'
        },
        {
          id: 5,
          category: 'Brinquedos'
        },
        {
          id: 6,
          category: 'Livros'
        }, 
        {
          id: 7,
          category: 'Esporte'
        },
    
  ];

  const changeClass = (index: number) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

    return(
       <div className='carouselFrameDiv'>
       {
        frameArray.map((e, index) => {
            return(
              <div className={selectedIndex === index  ? "frameDivSelected" : "frameDiv"} onClick={() => changeClass(index)}>
                <p>{e.category}</p>
                <span className='arrow'>
                  {selectedIndex === index ?  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.25 6.375L9 11.625L3.75 6.375" stroke="#F5F5F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg> : 
                  <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.1786 6.375L9.92857 11.625L4.67857 6.375" stroke="#FF653F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
    }
                </span>
              </div>
            )
        })
       }
       </div>
    )
}