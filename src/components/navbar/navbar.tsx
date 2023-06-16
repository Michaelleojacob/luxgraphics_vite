import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex gap-4">
      <NavLink to="/">home</NavLink>
      <NavLink to="/test">test</NavLink>
    </div>
  );
};

export default Navbar;
