
import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { ThemeProvider } from '@/context/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-white dark:bg-black transition-colors duration-300">
        <NavBar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
