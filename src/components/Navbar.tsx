import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
import Hamburger from "./Hamburger";

const Navbar = () => {
  return (
    <header className="px-10 py-3">
      <div className="flex justify-between items-center">
        <Link to="/">
          <div className="flex gap-1 items-center">
            <img src="favicon-32x32.png" alt="Logo" />
            <h3 className="text-md md:text-xl">Buzz</h3>
          </div>
        </Link>
        <div className="flex gap-8 items-center">
          <nav className="hidden md:block">
            <ul className="flex gap-4 items-center text-md md:text-lg">
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/">Categories</Link>
              </li>
            </ul>
          </nav>
          <ThemeSwitcher />
          <div className="block md:hidden">
            <Hamburger />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
