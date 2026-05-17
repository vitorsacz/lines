import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'motion/react';

interface Testimonial {
  id: string;
  name: string;
  time: string;
  quote: string;
  bgImg: string;
  userImg: string;
}

const testimonials: Testimonial[] = [
  {
    id: "ts-1",
    name: "Vitor Santos",
    time: "Usuário a 5 anos",
    quote: '"Graças ao aplicativo de transporte público, minha experiência de viajar para o trabalho se transformou; agora posso evitar congestionamentos, economizar tempo e contribuir para um ambiente mais limpo."',
    bgImg: "cliente1.png",
    userImg: "vitor.png"
  },
  {
    id: "ts-2",
    name: "João Messias",
    time: "Usuário a 1 ano",
    quote: '"Como usuário frequente, o aplicativo de transporte público me surpreendeu com a facilidade de uso, facilitando minha vida ao proporcionar informações precisas e opções de pagamento práticas."',
    bgImg: "cliente5.png",
    userImg: "messias.png"
  },
  {
    id: "ts-3",
    name: "Jonatas Ferreira",
    time: "Usuário a 3 anos",
    quote: '"O aplicativo de transporte público fez com que eu me sinta mais conectado à cidade, oferecendo opções de rota, preços acessíveis e um modo sustentável de se locomover."',
    bgImg: "cliente3.png",
    userImg: "jonatas.png"
  },
  {
    id: "ts-4",
    name: "André de Castro",
    time: "Usuário a 4 anos",
    quote: '"Nunca imaginei que um aplicativo pudesse tornar o transporte público tão conveniente; agora posso planejar minha jornada, acompanhar horários e evitar atrasos."',
    bgImg: "cliente4.png",
    userImg: "castro.png"
  },
  {
    id: "ts-5",
    name: "João Ramalho",
    time: "Usuário a 2 anos",
    quote: '"O aplicativo de transporte público revolucionou minha rotina diária, reduzindo o tempo de espera e fornecendo informações em tempo real, tornando minhas viagens mais tranquilas."',
    bgImg: "cliente2.png",
    userImg: "ramalho.png"
  }
];

export const Testimonials: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' });

  return (
    <section id="testimonials" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-primary text-3xl font-bold mb-4">O que os passageiros dizem</h2>
          <p className="text-body max-w-2xl mx-auto">
            Comentários reais de passageiros que utilizam nosso aplicativo!
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4">
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {testimonials.map((t) => (
              <div key={t.id} className="embla__slide flex-[0_0_100%] min-w-0 md:flex-[0_0_80%] lg:flex-[0_0_60%] px-4">
                <div className="flex flex-col lg:flex-row bg-white rounded-[25px] overflow-hidden shadow-card min-h-[350px]">
                  {/* Left: Client Image */}
                  <div 
                    className="w-full lg:w-1/2 min-h-[250px] bg-cover bg-center"
                    style={{ backgroundImage: `url('/src/assets/images/${t.bgImg}')` }}
                  />
                  
                  {/* Right: Content */}
                  <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-between">
                    <blockquote className="mb-8">
                      <p className="font-serif italic text-black text-lg leading-relaxed">
                        {t.quote}
                      </p>
                    </blockquote>
                    
                    <div className="flex items-center justify-between">
                      <div className="author">
                        <strong className="block text-black font-semibold text-lg">{t.name}</strong>
                        <span className="text-body text-sm">{t.time}</span>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-accent text-sm mb-2">★ ★ ★ ★ ★</span>
                        <img src={`/src/assets/images/${t.userImg}`} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                      </div>
                    </div>
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
