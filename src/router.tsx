import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingPage/landingPageBreakpoints";
import TestComp from "./components/testComponent/testComponent";
import About from "./components/about/about";
import Series from "./components/series/series";
import Prints from "./components/prints/prints";
import Cart from "./components/cart/cart";
import Newsletter from "./components/newsletter/newsletter";
import Socials from "./components/socials/socials";
import Originals from "./components/originals/originals";
import Events from "./components/events/events";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/test" element={<TestComp />}></Route>
      <Route path="/prints" element={<Prints />}></Route>
      <Route path="/series" element={<Series />}></Route>
      <Route path="/originals" element={<Originals />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/socials" element={<Socials />}></Route>
      <Route path="/events" element={<Events />}></Route>
      <Route path="/newsletter" element={<Newsletter />}></Route>
    </Routes>
  );
};

export default AppRoutes;
