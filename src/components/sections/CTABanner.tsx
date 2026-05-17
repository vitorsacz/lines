import React from 'react';
import { motion } from 'motion/react';

export const CTABanner: React.FC = () => {
  return (
    <section 
      id="cta-start"
      className="relative py-20 overflow-hidden bg-primary bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/src/assets/images/trem2.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/50 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light opacity-60" />

      <div className="container mx-auto px-4 relative z-10 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-5/12 text-center lg:text-start"
          >
            <h2 className="text-white text-3xl font-bold mb-6">Comece agora!</h2>
            <p className="text-white/80 leading-relaxed text-sm md:text-base">
              Acesse o aplicativo agora mesmo para conhecer mais nosso serviço, e acompanhar em tempo real como estão as linhas de trem e metrô.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-5/12 text-center lg:text-end"
          >
            <a 
              href="https://play.google.com/store/search?q=lines&c=apps&hl=pt_BR" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-primary border-2 border-white rounded-md text-xs font-semibold tracking-wider uppercase hover:bg-transparent hover:text-white transition-all duration-300"
            >
              Acesse aqui
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
