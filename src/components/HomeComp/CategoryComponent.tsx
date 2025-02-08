import '../../styles/homeComponents.css'

export function CategoryComponent(){
    
    const dataCategories = [
        {
            id: 1,
            img: "src/assets/imgs/categories/celular.png",
            title: "Celulares"
        },
        {
            id: 2,
            img: "src/assets/imgs/categories/cosmeticos.png",
            title: "Cosméticos"
        },
        {
            id: 3,
            img: "src/assets/imgs/categories/maquinalavar.png",
            title: "Eletrodomésticos"
        },
        {
            id: 4,
            img: "src/assets/imgs/categories/moveis.png",
            title: "Móveis"
        },
        {
            id: 5,
            img: "src/assets/imgs/categories/smartwatch.png",
            title: "Smartwatchs"
        },
        {
            id: 6,
            img: "src/assets/imgs/categories/decoracao.png",
            title: "Decoração"
        },
        {
            id: 7,
            img: "src/assets/imgs/categories/acessorios.png",
            title: "Acessórios"
        },
    ]
    
    return(
        <>
            {dataCategories.map((e) =>{
                return (
                    <div key={e.id} style={{textAlign: 'center'}}>
                    <div className="category-item">
                        <img src={e.img} alt={e.title} style={{maxWidth: '100%'}}/>
                    </div>
                        <p>{e.title}</p>
                    </div>
                ) 
               })}
        </>
    )
}