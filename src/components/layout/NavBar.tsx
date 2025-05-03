import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";
import ZordieLogo from "@/components/common/ZordieLogo";
import { useTheme, useMobile } from "@/components/hooks";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuLink, NavigationMenuContent } from "@/components/ui/navigation-menu";
import ThemeToggle from "@/components/ui/theme-toggle";

const NavBar = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMobile();
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

  // Navigation items
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "For Companies", href: "/companies" },
    { name: "For Job Seekers", href: "/candidates" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full ${
        scrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm border-b"
          : "bg-transparent"
      } transition-all duration-200`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center mr-6">
              <ZordieLogo color={theme === 'dark' ? 'white' : 'default'} />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link to="/features">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Features
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-zordie-500 to-zordie-600 p-6 no-underline outline-none focus:shadow-md"
                              href="/dashboard-selector"
                            >
                              <div className="mt-4 mb-2 text-lg font-medium text-white">
                                Zordie AI
                              </div>
                              <p className="text-sm leading-tight text-white/90">
                                Next-generation hiring platform powered by artificial intelligence.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        {/* ... keep existing code (menu items) */}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link to="/pricing">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Pricing
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                        {/* ... keep existing code (resources menu items) */}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center">
            {/* Theme Toggle */}
            <ThemeToggle className="mr-2" />
            
            {/* Login/Signup Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/login">
                <Button variant="outline" size="sm">
                  Log in
                </Button>
              </Link>
              <Link to="/dashboard-selector">
                <Button size="sm">Get Started</Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
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
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="px-3 py-3 border-t">
            <div className="flex flex-col space-y-3 pt-3">
              <Link to="/dashboard-selector" className="w-full">
                <Button className="w-full btn-gradient transition-all duration-200 hover:shadow-md" onClick={() => setIsOpen(false)}>
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
