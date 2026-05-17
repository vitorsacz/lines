import React from 'react';
import { motion } from 'motion/react';

export const AppDownload: React.FC = () => {
  return (
    <section id="app-download" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[30px] p-8 md:p-16 shadow-xl border border-gray-100 flex flex-col items-center text-center space-y-8"
        >
          <div>
            <h2 className="text-primary text-3xl md:text-4xl font-bold mb-4">
              Acesse aqui nosso site e aplicativo
            </h2>
            <p className="text-body text-lg">
              E compartilhe com todos os amigos!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
            <a 
              href="https://play.google.com/store/search?q=lines&c=apps&hl=pt_BR" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform duration-300"
            >
              <img 
                src="/src/assets/images/googlestore.png" 
                alt="Disponível no Google Play" 
                className="w-[250px]" 
              />
            </a>
            <a 
              href="https://www.apple.com/br/search/lines?src=globalnav" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform duration-300"
            >
              <img 
                src="/src/assets/images/applestore.png" 
                alt="Disponível na App Store" 
                className="w-[250px]" 
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
