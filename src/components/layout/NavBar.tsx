
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ZordieLogo from "@/components/common/ZordieLogo";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  // Navigation items
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "For Companies", href: "/companies" },
    { name: "For Job Seekers", href: "/candidates" },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-sm sticky top-0 z-40 w-full border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <ZordieLogo />
            
            {/* Desktop nav */}
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? "text-zordie-700 border-b-2 border-zordie-500"
                      : "text-gray-600 hover:text-zordie-700 hover:border-b-2 hover:border-zordie-200"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center transition-all duration-200 hover:bg-gray-100">
                  <Globe className="h-4 w-4 mr-1" />
                  <span>EN</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Hindi</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/login">
              <Button variant="outline" size="sm" className="transition-all duration-200 hover:shadow-md hover:border-zordie-300">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" className="btn-gradient transition-all duration-200 hover:shadow-md">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-zordie-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zordie-500 transition-all duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          mobileMenuOpen ? "block" : "hidden"
        } md:hidden bg-white border-b`}
      >
        <div className="pt-2 pb-4 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-all duration-200 ${
                isActive(item.href)
                  ? "border-zordie-700 text-zordie-700 bg-zordie-50"
                  : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="px-3 py-3 border-t">
            <div className="flex flex-col space-y-3 pt-3">
              <Link to="/login" className="w-full">
                <Button variant="outline" className="w-full transition-all duration-200 hover:shadow-md" onClick={() => setMobileMenuOpen(false)}>
                  Login
                </Button>
              </Link>
              <Link to="/signup" className="w-full">
                <Button className="w-full btn-gradient transition-all duration-200 hover:shadow-md" onClick={() => setMobileMenuOpen(false)}>
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
