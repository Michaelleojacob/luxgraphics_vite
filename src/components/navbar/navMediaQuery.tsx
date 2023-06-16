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
    <div className="flex justify-between">
      <NavLink to="/">
        <Logo />
      </NavLink>
      {isScreenOver600px ? <Navbar /> : <BurgerMenu />}
    </div>
  );
};

export default NavBarMediaQueryHandler;
