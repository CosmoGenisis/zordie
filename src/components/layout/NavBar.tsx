
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import ZordieLogo from "@/components/common/ZordieLogo";
import { useTheme } from "@/hooks";
import ThemeToggle from "@/components/ui/theme-toggle";
import { motion } from "framer-motion";

const NavBar = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "For Companies", href: "/companies" },
    { name: "For Job Seekers", href: "/candidates" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" }
  ];

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 dark:bg-black/95 backdrop-blur-md shadow-sm border-b dark:border-dark-700" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 bg-white dark:bg-black">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center">
            <ZordieLogo variant={theme === 'dark' ? 'light' : 'default'} />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <ul className="flex space-x-1">
              {navItems.map(item => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="relative px-4 py-2 rounded-md text-gray-700 dark:text-white hover:text-zordie-600 dark:hover:text-darkAccent-red transition-colors duration-200 group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-zordie-600 to-accent1 dark:from-darkAccent-red dark:to-darkAccent-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action buttons */}
          <div className="flex items-center">
            {/* Theme toggle */}
            <ThemeToggle className="mr-2" />
            
            {/* Desktop login/signup */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/login">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="relative overflow-hidden group dark:border-darkAccent-red/50 dark:text-white dark:hover:bg-dark-800"
                >
                  <span className="relative z-10">Log in</span>
                  <span className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-zordie-600 to-accent1 dark:from-darkAccent-red dark:to-darkAccent-orange group-hover:h-full transition-all duration-300 -z-1 opacity-20"></span>
                </Button>
              </Link>
              <Link to="/dashboard-selector">
                <Button 
                  size="sm" 
                  className="bg-blue-purple-gradient hover:bg-blue-purple-gradient-hover dark:bg-red-gradient dark:hover:bg-red-gradient-hover transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">Get Started</span>
                  <motion.span 
                    className="absolute top-0 left-0 w-full h-full bg-white opacity-20" 
                    initial={{ x: '-100%' }} 
                    animate={{ x: ['100%'] }} 
                    transition={{ 
                      repeat: Infinity, 
                      duration: 1.5, 
                      ease: "linear", 
                      repeatDelay: 1 
                    }} 
                  />
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-700 dark:text-white hover:text-zordie-600 dark:hover:text-darkAccent-red transition-colors" 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <motion.div 
        initial={false} 
        animate={isOpen ? {
          height: "auto",
          opacity: 1
        } : {
          height: 0,
          opacity: 0
        }} 
        transition={{
          duration: 0.3
        }} 
        className="md:hidden overflow-hidden bg-white dark:bg-black border-b dark:border-dark-700"
      >
        <div className="container mx-auto px-4 py-3">
          <ul className="space-y-2">
            {navItems.map(item => (
              <li key={item.name}>
                <Link 
                  to={item.href} 
                  className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-dark-800 rounded-md transition-colors duration-200" 
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col space-y-2">
            <Link to="/login" className="w-full">
              <Button variant="outline" className="w-full dark:border-darkAccent-red/50 dark:text-white dark:hover:bg-dark-800">
                Log in
              </Button>
            </Link>
            <Link to="/dashboard-selector" className="w-full">
              <Button 
                className="w-full bg-blue-purple-gradient dark:bg-red-gradient"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default NavBar;
