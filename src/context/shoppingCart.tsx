import { ReactNode, createContext, useState } from "react";
import { CartItem, CartContextType } from "../types";

// Create the App context
export const CartContext = createContext<CartContextType>({
  cartItems: [],
  updateCartItems: () => {},
  getCartCount: () => 0,
});

const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const updateCartItems = (newCartItems: CartItem[]) => {
    setCartItems(newCartItems);
  };

  const getCartCount = () => cartItems.length - 1;

  // Provide the state and updateState function to the children components
  return (
    <CartContext.Provider value={{ cartItems, updateCartItems, getCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
