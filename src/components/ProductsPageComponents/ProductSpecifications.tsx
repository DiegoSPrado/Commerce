import { useState } from 'react';
import '../../styles/ProductStyles/productsPage.css';



export function ProductSpecificationsComponent(){

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

    const ProductSpecificationsData = [
        {
            id: 1,
            memory: '256BG'
        },
        {
            id: 2,
            memory: '512GB'
        },
        {
            id: 3,
            memory: '1TB'
        }
    ];

    const changeClass = (index: number) => {
        setSelectedIndex(selectedIndex === index ? null : index);
    }

    return(
        <div className="divMemory">
            {
                ProductSpecificationsData.map((item, index) => (
                    <div key={item.id} className={selectedIndex === index ? "divProductSpecfClick" : "divProductSpecf"} onClick={() => changeClass(index)}>
                        {item.memory}
                    </div>
                ))
            }
        </div>
    )
}