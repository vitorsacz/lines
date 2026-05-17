import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

interface FunctionalCard {
  id: string;
  img: string;
  title: string;
  description: string;
}

const functionalities: FunctionalCard[] = [
  {
    id: "func-news",
    img: "b-1.png",
    title: "Notícias",
    description: "Notícias sobre tudo o que está acontecendo sobre os trens e metrô, desde reajuste da passagem até acompanhar greves."
  },
  {
    id: "func-profile",
    img: "b-2.png",
    title: "Perfil com selos",
    description: "O usuário possuirá um perfil personalizado com seus selos conquistados, de acordo com o seu ranqueamento."
  },
  {
    id: "func-map-alerts",
    img: "b-3.png",
    title: "Alertas no Mapa",
    description: "Visualização dos alertas em tempo real no mapa, para melhor entendimento da real situação das estações, além de visualizar qual horário foi inserido."
  },
  {
    id: "func-add-alerts",
    img: "b-4.png",
    title: "Adicionar Alertas",
    description: "O usuário pode adicionar alertas com suas devidas gravidades e descrição, que aparecerão no mapa e ajudarão outros usuários em seu trajeto."
  },
  {
    id: "func-line-status",
    img: "b-5.png",
    title: "Status das linhas",
    description: "O status das linhas e estações em tempo real estarão disponíveis para auxiliar na verificação das atividades e possíveis problemas nas vias."
  }
];

export const FunctionalitiesSlider: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="functionalities" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 mb-12 text-center overflow-visible">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="max-w-xl mx-auto"
        >
          <h2 className="text-primary text-3xl font-bold mb-4">Funcionalidades</h2>
          <p className="text-body mb-8">
            Apresentamos algumas de nossas principais funcionalidades dentro do nosso aplicativo.
          </p>
        </motion.div>

        {/* Custom Navigation */}
        <div className="flex justify-center gap-3 mt-4">
          <button 
            id="slider-prev"
            onClick={scrollPrev}
            className="w-24 py-2 bg-primary text-white rounded-md font-semibold text-xs uppercase hover:bg-primary/90 transition-colors"
          >
            Anterior
          </button>
          <button 
            id="slider-next"
            onClick={scrollNext}
            className="w-24 py-2 bg-primary text-white rounded-md font-semibold text-xs uppercase hover:bg-primary/90 transition-colors"
          >
            Próximo
          </button>
        </div>
      </div>

      <div className="px-4 md:px-10">
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {functionalities.map((func) => (
              <div key={func.id} className="embla__slide flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4">
                <div 
                  className="bg-white rounded-[25px] overflow-hidden shadow-card h-full flex flex-col group hover:shadow-lg transition-shadow duration-300"
                  style={{ boxShadow: '0 10px 30px 0 rgba(0, 0, 0, 0.05)' }}
                >
                  <div className="overflow-hidden">
                    <img 
                      src={`/src/assets/images/${func.img}`} 
                      alt={func.title} 
                      className="w-full h-auto object-cover rounded-t-[25px] group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-10 flex-1 flex flex-col">
                    <h5 className="text-black text-lg font-semibold mb-3">{func.title}</h5>
                    <p className="text-body text-sm leading-relaxed">{func.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
