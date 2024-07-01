import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "../components/ThemeProvider";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="antialiased min-h-screen">
        <Navbar />
        <div className="max-w-5xl mx-auto p-3 flex-1">{children}</div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
