import '../../styles/homeComponents.css'
import { Link } from 'react-router-dom'
export function CardProduct(){
    
    const dataFrame = [
        {
            id: 1,
            name: 'Samsung Galaxy S22 Ultra',
            price: 4400.00,
            image: 'src/assets/imgs/smartphones/celular.png',
            discount: 56
        },
        {
            id: 2,
            name: 'Galaxy M13 (4GB | 64 GB)',
            price: 3000.00,
            image: 'src/assets/imgs/smartphones/SangM13.png',
            discount: 40
        },
        {
            id: 3,
            name: 'Galaxy M33 (4GB | 64 GB)',
            price: 12000.00,
            image: 'src/assets/imgs/smartphones/SangM33.png',
            discount: 35
        },
        {
            id: 4,
            name: 'Galaxy M53 (4GB | 64 GB)',
            price: 12000.00,
            image: 'src/assets/imgs/smartphones/SangM53.png',
            discount: 35
        },
        {
            id: 5,
            name: 'Galaxy S22 Ultra',
            price: 3200.00,
            image: 'src/assets/imgs/smartphones/SangS22.png',
            discount: 45
        }

    ]
    
    return(
        <>
            {dataFrame.map((e) => {
                return(
                    <Link to={'/product'} style={{textDecoration: 'none'}}>
                        <div className="card">
                            <div style={{display: 'flex', justifyContent: 'center', padding: '5px', }}>
                                <img src={e.image} alt="Smartphone Samsung"/>
                                <div className='divPromo'><p>{e.discount}</p>% off
                                </div>
                            </div>
                            <div style={{backgroundColor: 'white', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px', padding: '5px', color: 'black'}} >
                                <p>{e.name}</p>
                                <p>R$ {e.price}</p>
                            <div></div>
                            <p style={{color: 'rgba(36, 155, 62, 1)'}}>Economize R$ - </p>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </>
    )
}