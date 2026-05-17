import React from 'react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <section 
      id="hero"
      className="relative min-h-[680px] h-screen flex items-center overflow-hidden bg-primary pt-20"
      style={{ 
        backgroundImage: "url('/src/assets/images/contact-bg2.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-primary/50 mix-blend-multiply transition-opacity duration-300" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light/40 to-primary-light/60 opacity-80" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="row flex flex-col lg:flex-row items-center justify-between gap-12 pt-5">
          {/* Text Column */}
          <div className="col-lg-6 text-center lg:text-start lg:pr-12 text-white">
            <motion.h1 
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Conectando você à cidade.
            </motion.h1>
            <motion.p 
              id="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-white/80 text-lg md:text-xl mb-12 max-w-xl mx-auto lg:mx-0"
            >
              Conectando você às estações de trem e metrô, de forma rápida e eficiente!
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              <a 
                href="https://play.google.com/store/search?q=lines&c=apps&hl=pt_BR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-primary border-2 border-white rounded-md text-sm font-semibold tracking-wider uppercase hover:bg-transparent hover:text-white transition-all duration-300"
              >
                Acessar
              </a>
            </motion.div>
          </div>

          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="col-lg-6 w-full max-w-2xl lg:max-w-none"
          >
            <div className="img-wrap relative">
              <img 
                src="/src/assets/images/trem-capa2.png" 
                alt="Trem em destaque" 
                className="w-full h-auto rounded-lg shadow-2xl" 
                id="hero-img"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
