import json2mq from "json2mq";
import useMediaQuery from "@mui/material/useMediaQuery";
import Logo from "../logo/logo";
import { NavLink } from "react-router-dom";
import Navbar from "./navbar";
import BurgerMenu from "./burger";

const NavBarMediaQueryHandler = () => {
  const isScreenOver600px = useMediaQuery(
    json2mq({
      minWidth: 600,
    })
  );
  return (
    <div className="flex justify-between bg-yellow-500 p-4 align-center sticky top-0 right-0 z-20">
      <NavLink to="/">
        <Logo />
      </NavLink>
      {isScreenOver600px ? <Navbar /> : <BurgerMenu />}
    </div>
  );
};

export default NavBarMediaQueryHandler;
