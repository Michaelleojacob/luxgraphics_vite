import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = "hover:text-blue-500";

  return (
    <div className="flex gap-8 text-4xl text-white">
      <NavLink className={linkClass} to="/">
        home
      </NavLink>
      <NavLink className={linkClass} to="/test">
        test
      </NavLink>
      <NavLink className={linkClass} to="/series/killers">
        series
      </NavLink>
      <NavLink className={linkClass} to="/originals">
        originals
      </NavLink>
      <NavLink className={linkClass} to="/cart">
        cart
      </NavLink>
      <NavLink className={linkClass} to="/about">
        about
      </NavLink>
      <NavLink className={linkClass} to="/socials">
        socials
      </NavLink>
      <NavLink className={linkClass} to="/event">
        event
      </NavLink>
      <NavLink className={linkClass} to="/newsletter">
        newsletter
      </NavLink>
    </div>
  );
};

export default Navbar;
