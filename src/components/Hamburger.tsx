import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ThemeSwitcher from "./ThemeSwitcher";

const Hamburger = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu />
      </SheetTrigger>
      <SheetContent className="p-16 flex flex-col justify-between items-center">
        <SheetTitle className="text-center">
          <img src="favicon-32x32.png" alt="Logo" />
        </SheetTitle>
        <SheetDescription>
          <nav className="text-xl">
            <ul className="flex flex-col gap-8 items-center text-md md:text-lg">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Categories</Link>
              </li>
              <ThemeSwitcher />
            </ul>
          </nav>
        </SheetDescription>
        <SheetFooter className="w-full">
          <SheetClose asChild>
            {isAuthenticated ? (
              <Button onClick={async () => await logout()} className="w-full">
                Log Out
              </Button>
            ) : (
              <Button
                className="w-full"
                onClick={async () => await loginWithRedirect()}
              >
                Login
              </Button>
            )}
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Hamburger;
