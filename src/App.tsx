import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./context/shoppingCart";
import Navbar from "./components/navbar/navbar";

const App = () => {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App;
