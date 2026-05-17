import React from 'react';
import { Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-gradient-to-br from-primary via-primary-light to-primary-light py-20 text-white selection:bg-accent selection:text-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About Widget */}
          <div className="space-y-6">
            <h3 className="text-white text-xs font-bold uppercase tracking-widest">Sobre</h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Lines, conectando você às estações de trem e metrô, de forma rápida e eficiente!
            </p>
            <div className="pt-4 space-y-4">
              <address className="not-italic text-sm text-white/60 leading-relaxed">
                R. André Thomas - Vila Campesina, Osasco - SP, 06023-120
              </address>
              <ul className="list-none p-0 inline-block border-b border-white/20 pb-1">
                <li>
                  <a href="mailto:loctime.group@gmail.com" className="text-white/50 text-sm hover:text-white transition-colors">
                    loctime.group@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Company Widget */}
          <div className="space-y-6">
            <h3 className="text-white text-xs font-bold uppercase tracking-widest">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://play.google.com/store/search?q=lines&c=apps&hl=pt_BR" className="text-white/50 text-sm hover:text-white transition-colors">
                  Aplicativo
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Widget */}
          <div className="space-y-6">
            <h3 className="text-white text-xs font-bold uppercase tracking-widest">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="https://play.google.com/store/search?q=lines&c=apps&hl=pt_BR" className="text-white/50 text-sm hover:text-white transition-colors">
                  Aplicativo
                </a>
              </li>
            </ul>
          </div>

          {/* Social Widget */}
          <div className="space-y-6">
            <h3 className="text-white text-xs font-bold uppercase tracking-widest text-center lg:text-start">Social</h3>
            <ul className="flex items-center gap-3 justify-center lg:justify-start">
              <li>
                <a 
                  href="https://www.instagram.com/app.lines/?utm_source=ig_web_button_share_sheet" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/40 rounded flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all duration-300"
                >
                  <Instagram size={18} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-12 border-t border-white/10 text-center">
          <p className="text-white/40 text-xs tracking-wide">
            &copy; 2022-{new Date().getFullYear()} All Rights Reserved. Projected by LocTime LTDA &copy;
          </p>
        </div>
      </div>
    </footer>
  );
};
