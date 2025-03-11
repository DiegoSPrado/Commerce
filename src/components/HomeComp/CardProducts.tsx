import '../../styles/homeComponents.css';
import dataFrame from '../../data/products';
import { useNavigate } from 'react-router-dom';

export function CardProduct(){
    
    const navigate = useNavigate();
    
    return(
        <div className='carouselFrameDiv'>
            {dataFrame.map((e) => {
                return(
                    <div className="card" onClick={() => navigate(`/product/${e.id}`)}>
                        <div style={{display: 'flex', justifyContent: 'center', padding: '5px', }}>
                            <img src={e.image} alt="Smartphone Samsung" width={''}/>
                            <div className='divPromo'><p>{e.discount}</p>% off
                            </div>
                        </div>
                        <div className='cardPrice' >
                                <p>{e.name}</p>
                                <p>R$ {e.price}</p>
                        <div></div>
                            <p style={{color: 'rgba(36, 155, 62, 1)'}}>Economize R$ - </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}