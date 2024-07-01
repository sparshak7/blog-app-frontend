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

const Hamburger = () => {
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
              <li>
                <Link to="/">Profile</Link>
              </li>
            </ul>
          </nav>
        </SheetDescription>
        <SheetFooter className="w-full">
          <SheetClose asChild>
            <Button type="submit">Login</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Hamburger;
