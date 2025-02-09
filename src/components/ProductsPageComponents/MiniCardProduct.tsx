interface MinicardProps{
    image: string,
    alt: string
}

export function MiniCardProductComponent(props: MinicardProps){
    
    
    return(
        <div style={{backgroundColor: 'var(--secondary-color)', width: '55px', height: '55px',display: 'flex', justifyContent: 'center', borderRadius: '11px'}}>
            <img src={props.image} alt={props.alt} />
        </div>
    )
}