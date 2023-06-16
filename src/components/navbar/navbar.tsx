import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex gap-2">
      <NavLink to="/">home</NavLink>
      <NavLink to="/test">test</NavLink>
      <NavLink to="/series">series</NavLink>
      <NavLink to="/originals">originals</NavLink>
      <NavLink to="/cart">cart</NavLink>
      <NavLink to="/about">about</NavLink>
      <NavLink to="/socials">socials</NavLink>
      <NavLink to="/event">event</NavLink>
      <NavLink to="/newsletter">newsletter</NavLink>
    </div>
  );
};

export default Navbar;
