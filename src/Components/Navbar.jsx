import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <p>
      <Link to="/">All</Link> <span>|</span>
      Cooking <span>|</span>
      Football <span>|</span>
      Coding
    </p>
  );
};

export default Navbar;
