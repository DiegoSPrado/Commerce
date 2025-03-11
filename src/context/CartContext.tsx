import { createContext, useState, ReactNode, useEffect } from "react";
import { Product } from "../data/products";
import { toast } from "react-toastify";

interface ProductBuyCart extends Product {
  quantidade: number;
}

interface CartContextType {
  carrinho: ProductBuyCart[];
  addToCart: (produto: Product) => void;
  removeFromCart: (produto: Product) => void;
  changeValue: (id: number, delta: number) => void;
  getTotalPrice: () => number;
  getTotalItens: () => number;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [carrinho, setCarrinho] = useState<ProductBuyCart[]>(() => {
    const buycartStorage = localStorage.getItem("carrinho");
    return buycartStorage? JSON.parse(buycartStorage) : [];
  });

  const addToCart = (produto: Product) => {
    setCarrinho((prevCart) => {
      const exist = prevCart.find((item) => item.id === produto.id);
      let newBuycart;
      if (exist) {
        newBuycart = prevCart.map((item) => item.id === produto.id ? {...item, quantidade: item.quantidade + 1} : item)
      } else{
        newBuycart = [...prevCart, {...produto, quantidade: 1 }];
      }
      localStorage.setItem("carrinho", JSON.stringify(newBuycart));
      toast.info('Item adicionado ao carrinho')
      return newBuycart; 
    });
    
  };

  const changeValue = (id: number, delta: number) => {
    setCarrinho((prevCart) => {
      const newCart = prevCart.map((item) => item.id === id ? { ...item, quantidade: item.quantidade + delta} : item).filter(item => item.quantidade > 0);
      localStorage.setItem("carrinho", JSON.stringify(newCart));
      return newCart;
    });
  }

  const removeFromCart = (produto: Product) => {
    const newBuycart = carrinho.filter((item) => item.id!== produto.id);
    setCarrinho(newBuycart);
    localStorage.setItem("carrinho", JSON.stringify(newBuycart));
  };

  const getTotalPrice = () => {
    return carrinho.reduce((total, item) => total + item.price * item.quantidade, 0);
  };

  const getTotalItens = () => {
    return carrinho.reduce((total, item) => total + item.quantidade, 0);
  };

  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  }, [carrinho])

  return (
    <CartContext.Provider value={{ carrinho, addToCart, changeValue, removeFromCart, getTotalItens, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};