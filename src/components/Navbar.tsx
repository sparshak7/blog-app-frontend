import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
import Hamburger from "./Hamburger";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import UserMenu from "./UserMenu";
import { Loader2 } from "lucide-react";

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, user, logout, isLoading, error } =
    useAuth0();

  return (
    <header className="px-10 py-3">
      <div className="flex justify-between items-center">
        <Link to="/">
          <div className="flex gap-1 items-center">
            <img src="favicon-32x32.png" alt="Logo" />
            <h3 className="text-violet-400 text-lg md:text-xl font-logo">
              Buzz
            </h3>
          </div>
        </Link>
        <div className="flex gap-8 items-center">
          {isLoading ? (
            <Loader2 className="animate-spin text-purple-400" />
          ) : !error && isAuthenticated ? (
            <UserMenu
              username={user?.name!}
              email={user?.email!}
              image={user?.picture!}
              logout={logout}
            />
          ) : (
            <Button
              onClick={async () => await loginWithRedirect()}
              className="md:block hidden"
            >
              Login
            </Button>
          )}
          <ThemeSwitcher screen/>
          <div className="block md:hidden">
            <Hamburger />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
