import React from 'react';
import { motion } from 'motion/react';

interface FeatureItemProps {
  id: string;
  icon: string;
  title: string;
  description: string;
  delay: number;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ id, icon, title, description, delay }) => (
  <motion.div 
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="flex items-start gap-4"
  >
    <img src={`/src/assets/images/${icon}`} alt={title} className="w-20 h-20 p-2 object-contain flex-shrink-0" />
    <div>
      <h3 className="text-white text-lg lg:text-xl font-normal mb-2 leading-tight">{title}</h3>
      <p className="text-white/70 text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export const Features: React.FC = () => {
  const features = [
    {
      id: "feat-eco",
      icon: "tempoo.png",
      title: "Economia de tempo",
      description: "Economize tempo e estresse, com informações em tempo real das estações de trem e metrô.",
      delay: 0
    },
    {
      id: "feat-realtime",
      icon: "info.png",
      title: "Informação em tempo real",
      description: "Acesso à informação em tempo real: transformando dados em ação instantânea.",
      delay: 0.1
    },
    {
      id: "feat-interact",
      icon: "conex.png",
      title: "Interação entre usuários",
      description: "Através de alertas, que os usuários poderão acionar, ajudando outros usuários.",
      delay: 0.2
    }
  ];

  return (
    <section 
      id="features" 
      className="py-16 md:py-20 bg-gradient-to-br from-primary via-primary-light to-primary-light overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          {features.map((feat) => (
            <FeatureItem key={feat.id} {...feat} />
          ))}
        </div>
      </div>
    </section>
  );
};
