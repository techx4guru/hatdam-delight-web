import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logoTransparent from "@/assets/logo-white-bg.jpg";
import logo from "@/assets/logo-hatdam.png";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/products", label: "Products" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white backdrop-blur-sm border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-3">
        <img 
          src={logo} 
          alt="hatdam bakery and pastry" 
          className="h-12 w-auto rounded"
        />
        <div className="text-lg font-heading font-bold text-black">
          hatdam bakery and pastry
        </div>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`text-sm font-medium transition-colors hover:text-green-600 ${
              isActive(item.path)
                ? "text-green-600 border-b-2 border-green-600"
                : "text-black"
            }`}
          >
            {item.label}
          </Link>
        ))}
        <Button 
          asChild 
          variant="secondary"
          className="gold-shimmer hover:scale-105 transition-transform"
        >
          <Link to="/order">Order Now</Link>
        </Button>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="text-black hover:text-green-600"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
    </div>

    {/* Mobile Navigation */}
    {isOpen && (
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-lg mt-2 shadow">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-3 py-2 text-base font-medium transition-colors hover:text-green-600 ${
                isActive(item.path)
                  ? "text-green-600 bg-gray-100 rounded-md"
                  : "text-black"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="px-3 py-2">
            <Button 
              asChild 
              variant="secondary"
              className="w-full gold-shimmer"
            >
              <Link to="/order" onClick={() => setIsOpen(false)}>
                Order Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
    )}
  </div>
</nav>

  );
};