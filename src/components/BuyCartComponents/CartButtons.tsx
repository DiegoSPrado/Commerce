import { useCart } from '../../context/UseCart';
import '../../styles/ProductStyles/cartStyles.css';


  interface CartButtonsProps {
    id: number;
    quantity: number;
  }
  
  const CartButtons: React.FC<CartButtonsProps> = ({ id, quantity }) => {
    const { changeValue } = useCart();
  
    const handleDiminuir = () => {
      if (quantity === 1) {
        const confirmar = window.confirm("Deseja remover este produto do carrinho?");
        if (!confirmar) return;
      }
      changeValue(id, -1);
    };
  
    return (
      <div className='divBtnCart'>
        <button onClick={() => changeValue(id, 1)} style={{borderRadius: '20px 0px 0px 20px'}}>+</button>
        <div>{quantity}</div>
        <button onClick={handleDiminuir} style={{borderRadius: '0px 20px 20px 0px'}}>-</button>
      </div>
    );
  };
  
  export default CartButtons;