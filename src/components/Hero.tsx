import { Input } from "./ui/input";

const Hero = () => {
  return (
    <div className="p-3 flex flex-col items-center gap-6 shadow-lg font-content rounded-md">
      <h3 className="text-4xl md:text-3xl font-logo text-violet-400">Buzz</h3>
      <p className="text-md md:text-lg text-center text-purple-500">
        Discover the latest in technology, innovation, and trends. Your go-to
        source for daily tech news and insights.
      </p>
      <Input className="xs:w-full sm:w-[500px]" placeholder="Search for topics like React, Next..." />
    </div>
  );
};

export default Hero;
