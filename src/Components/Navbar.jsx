import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-teal-500 text-white">
      <ul className="px-2 py-4 flex space-x-3 items-center justify-center">
        <li>
          <NavLink to="/">All</NavLink>
        </li>
        <li>
          <NavLink to="/cooking">Cooking</NavLink>
        </li>
        <li>
          <NavLink to="/football">Football</NavLink>
        </li>
        <li>
          <NavLink to="/coding">Coding</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
