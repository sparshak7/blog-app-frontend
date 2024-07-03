import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Link } from "react-router-dom";

const Error = ({message}: {message: string}) => {
  return (
    <section className="min-h-screen flex justify-center items-center px-2">
      <Card className="w-[350px] border-gray-300 shadow-md">
        <div className="p-6">
          <div className="w-full flex justify-center">
            <X className="w-12 h-12 rounded-full text-red-500 p-2" />
          </div>
          <div className="mt-3 text-center sm:mt-5 w-full">
            <h3 className="text-lg leading-6 font-medium font-heading">
              Uh oh, you weren't supposed to see this!
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {message}
            </p>
            <Button
              className="mt-5 sm:mt-6 border border-border bg-accent hover:opacity-75 duration-100 transition-opacity ease-in-out"
              variant="ghost"
            >
              <Link to="/">Go Home</Link>
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default Error;
