export interface ReactChildNode {
  children: React.ReactNode;
}

export interface CartContextType {
  cartItems: CartItem[];
  updateCartItems: (newCartItems: CartItem[]) => void;
  getCartCount: () => void;
}

export interface CartItem {
  id: string;
  title: string;
  price: number;
  srcUrl: string;
}
