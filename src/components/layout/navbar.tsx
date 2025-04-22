import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/Mindlab_logo.jpg" 
                alt="Mindlab Logo" 
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link
                to="/"
                className={`nav-link ${isActive("/") ? "active-nav-link" : ""}`}
              >
                Home
              </Link>
              <Link
                to="/how-it-works"
                className={`nav-link ${isActive("/how-it-works") ? "active-nav-link" : ""}`}
              >
                How It Works
              </Link>
              <Link
                to="/specialists"
                className={`nav-link ${isActive("/specialists") ? "active-nav-link" : ""}`}
              >
                Browse Specialists
              </Link>
              <Link
                to="/pricing"
                className={`nav-link ${isActive("/pricing") ? "active-nav-link" : ""}`}
              >
                Pricing
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link to="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden p-4 space-y-4 border-t border-border">
          <Link
            to="/"
            className={`block py-2 px-3 rounded-md ${
              isActive("/") ? "bg-primary/10 text-primary font-medium" : ""
            }`}
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/how-it-works"
            className={`block py-2 px-3 rounded-md ${
              isActive("/how-it-works") ? "bg-primary/10 text-primary font-medium" : ""
            }`}
            onClick={toggleMenu}
          >
            How It Works
          </Link>
          <Link
            to="/specialists"
            className={`block py-2 px-3 rounded-md ${
              isActive("/specialists") ? "bg-primary/10 text-primary font-medium" : ""
            }`}
            onClick={toggleMenu}
          >
            Browse Specialists
          </Link>
          <Link
            to="/pricing"
            className={`block py-2 px-3 rounded-md ${
              isActive("/pricing") ? "bg-primary/10 text-primary font-medium" : ""
            }`}
            onClick={toggleMenu}
          >
            Pricing
          </Link>
          <div className="pt-4 flex flex-col space-y-3 border-t border-border">
            <Link to="/login" onClick={toggleMenu}>
              <Button variant="outline" className="w-full">Log In</Button>
            </Link>
            <Link to="/signup" onClick={toggleMenu}>
              <Button className="w-full">Sign Up</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
