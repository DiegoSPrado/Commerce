import '../../styles/App.css'

export function FrameCategory(){
    
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
    
      ]
   
    return(
       <div className='carouselDiv'>
       {
        frameArray.map((e) => {
            return(
              <div className='frameDiv' >
                <p>{e.category}</p>
                <span className='arrow'>
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.1786 6.375L9.92857 11.625L4.67857 6.375" stroke="#FF653F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
                </span>
              </div>
            )
        })
       }
       </div>
    )
}