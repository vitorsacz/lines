import React, { useState, useEffect } from 'react';
import { Menu, X, Train } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      id="main-nav"
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-5",
        isScrolled ? "bg-white shadow-md" : "bg-white"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" id="logo-link" className="flex items-center">
            <img src="/src/assets/images/logo.png" alt="Lines Logo" className="w-[100px]" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            <ul className="flex space-x-8 text-primary font-montserrat font-medium text-sm">
              <li>
                <a href="#" className="hover:text-accent transition-colors active:text-accent">Home</a>
              </li>
              <li>
                <a href="https://play.google.com/store/search?q=lines&c=apps&hl=pt_BR" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Aplicativo</a>
              </li>
            </ul>
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://play.google.com/store/search?q=lines&c=apps&hl=pt_BR" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden lg:flex items-center text-primary hover:text-accent transition-colors group"
            >
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-2 lg:group-hover:bg-transparent lg:group-hover:border-2 lg:group-hover:border-accent lg:group-hover:text-accent transition-all duration-300">
                <Train size={20} className="text-white lg:group-hover:text-accent" />
              </div>
              <span className="font-semibold text-sm">Acesse aqui</span>
            </a>

            <button 
              id="mobile-menu-toggle"
              className="lg:hidden text-primary p-2 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={cn(
            "lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 transform",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
          style={{ top: '80px', height: 'calc(100vh - 80px)' }}
        >
          <ul className="flex flex-col p-8 space-y-6 text-primary font-montserrat font-semibold text-lg">
            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-accent transition-colors">Home</a>
            </li>
            <li>
              <a href="https://play.google.com/store/search?q=lines&c=apps&hl=pt_BR" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="hover:text-accent transition-colors">Aplicativo</a>
            </li>
            <li>
              <a 
                href="https://play.google.com/store/search?q=lines&c=apps&hl=pt_BR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-primary"
              >
                <Train size={24} className="mr-2 text-primary" />
                <span>Acesse aqui</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
