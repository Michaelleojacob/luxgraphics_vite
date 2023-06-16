import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./context/shoppingCart";
import Navbar from "./components/navbar/navbar";
import AppRoutes from "./router";

const App = () => {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <AppRoutes />
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App;
