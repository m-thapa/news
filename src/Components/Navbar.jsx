import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-teal-500 text-white ">
      <ul className="px-2 py-4 flex space-x-3 items-center justify-center">
        <li>
          <Link to="/">All</Link>
        </li>
        <li>Cooking</li>
        <li>Football</li>
        <li>Coding</li>
      </ul>
    </nav>
  );
};

export default Navbar;
