import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">home</NavLink>
        </li>
        <li>
          <NavLink to="/test">test</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
