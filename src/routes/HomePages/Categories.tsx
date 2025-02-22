import { CategoryComponent } from '../../components/HomeComp/CategoryComponent';
import '../../styles/homeComponents.css'

export function CategotiesHome(){
    
    
    
    return(
        <>
            <h1 style={{margin: '20px'}}>Nossas <span style={{color: 'var(--primary-color)'}}>categorias</span></h1>
            <div className='container' style={{marginTop: '20px'}}>
              <CategoryComponent/>
            </div>
            <div className='container' style={{marginTop: '20px'}}>
                <CategoryComponent/>
            </div>
            <div className='container' style={{marginTop: '40px'}}>
                <CategoryComponent/>
            </div>
            <div className='container' style={{marginTop: '20px'}}>
                <CategoryComponent/>
            </div>
        </>
    )
}