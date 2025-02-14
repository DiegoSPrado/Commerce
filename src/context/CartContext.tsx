import { createContext, useState, ReactNode, useEffect } from "react";
import { Product } from "../data/products";

interface CartContextType {
  carrinho: Product[];
  addToCart: (produto: Product) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [carrinho, setCarrinho] = useState<Product[]>(() => {
    const buycartStorage = localStorage.getItem("carrinho");
    return buycartStorage? JSON.parse(buycartStorage) : [];
  });

  const addToCart = (produto: Product) => {
    const newBuycart = [...carrinho, produto];
    setCarrinho(newBuycart);
    localStorage.setItem("carrinho", JSON.stringify(newBuycart));
    
  };

  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  }, [carrinho])

  return (
    <CartContext.Provider value={{ carrinho, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};