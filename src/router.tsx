import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingPage/landingPage";
import TestComp from "./components/testComponent/testComponent";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/test" element={<TestComp />}></Route>
    </Routes>
  );
};

export default AppRoutes;
