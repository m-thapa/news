import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <h1 className="px-2 py-2 text-3xl md:text-4xl lg:text-5xl text-white bg-teal-500  justify-center text-left md:text-center ">
        News
      </h1>
      <Navbar />
    </header>
  );
};

export default Header;
