import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./context/shoppingCart";
import NavBarMediaQueryHandler from "./components/navbar/navMediaQuery";
import AppRoutes from "./router";

const App = () => {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBarMediaQueryHandler />
        <AppRoutes />
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App;
