import React from 'react';
import { Map, Compass } from 'lucide-react';
import { motion } from 'motion/react';

export const Structure: React.FC = () => {
  return (
    <section id="structure" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-7/12"
          >
            <img 
              src="/src/assets/images/celular.png" 
              alt="Lines App no Celular" 
              className="w-full max-w-[600px] mx-auto rounded-lg"
              id="structure-phone-img"
            />
          </motion.div>

          {/* Text Column */}
          <div className="w-full lg:w-4/12 lg:pl-8 py-8 lg:py-24">
            <div className="mb-12">
              <h2 className="text-primary text-3xl font-bold mb-4">Estrutura</h2>
              <p className="text-body leading-relaxed">
                Informando você sobre as estações de trens e metrôs, de forma rápida e eficiente!
              </p>
            </div>

            {/* Feature Items */}
            <div className="space-y-8">
              <div className="flex items-start gap-6 group" id="feat-monitoring">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-md shadow-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <Map size={24} />
                </div>
                <div>
                  <h3 className="text-black text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">Monitoramento em tempo real</h3>
                  <p className="text-body text-sm leading-relaxed">
                    Monitoramento em tempo real dos trens e metrô com base nos feedbacks dos próprios usuários, de acordo com as condições reais do ambiente.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group" id="feat-tracking">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-md shadow-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <Compass size={24} />
                </div>
                <div>
                  <h3 className="text-black text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">Acompanhe seu trajeto</h3>
                  <p className="text-body text-sm leading-relaxed">
                    Acompanhe sua viagem em tempo real, com o mapa interativo, mostrando a direção correta para onde o trem irá percorrer até seu destino final e alertas sobre as linhas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
