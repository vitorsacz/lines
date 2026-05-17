import React from 'react';
import { motion } from 'motion/react';

interface NewsItem {
  id: string;
  img: string;
  date: string;
  title: string;
  description: string;
  link: string;
  readMore: string;
}

const newsData: NewsItem[] = [
  {
    id: "news-1",
    img: "noticia1.jpg",
    date: "Jun 10, 2024",
    title: "Governador assina contrato para expansão de metrô até Taboao da Serra",
    description: "O governador Tarcísio de Freitas assinou nesta segunda-feira (10) o termo aditivo para elaboração dos estudos de viabilidade e dos projetos executivos da extensão da Linha 4-Amarela de metrô, em Taboão da Serra.",
    link: "https://www.saopaulo.sp.gov.br/spnoticias/ultimas-noticias/governador-assina-contrato-para-expansao-de-metro-ate-taboao-da-serra/",
    readMore: "https://jc.ne10.uol.com.br/colunas/mobilidade/2023/08/15574780-metro-de-sao-paulo-descubra-as-ultimas-noticias-sobre-paralisacao.html"
  },
  {
    id: "news-2",
    img: "noticia2.webp",
    date: "Jun 7, 2024",
    title: "Greve metrô SP últimas notícias: Sindicato toma decisão final sobre greve; confira",
    description: "Os paulistas que estavam preocupados e buscam saber se haverá greve de metrô amanhã (07/06) em São Paulo podem ficar aliviados.",
    link: "https://jc.ne10.uol.com.br/colunas/mobilidade/2024/06/06/greve-metro-sp-ultimas-noticias-sindicato-toma-decisao-final-sobre-greve-confira.html",
    readMore: "https://oglobo.globo.com/brasil/sao-paulo/noticia/2023/08/10/the-town-todas-as-linhas-de-trens-e-metro-de-sao-paulo-funcionarao-por-24-horas-para-o-festival.ghtml"
  },
  {
    id: "news-3",
    img: "noticia3.webp",
    date: "Jan 20, 2021",
    title: "Vídeos: como estão as obras da estação Ipiranga e pátio Ragueb da Linha 15-Prata",
    description: "A estação Ipiranga se conectará com a homônima parada da Linha 10-Turquesa, da CPTM., desafogando em parte a demanda de passageiros que hoje só tem como opção de baldeação em Vila Prudente, na Linha 2-Verde.",
    link: "https://www.metropoles.com/sao-paulo/apagao-nacional-atinge-sp-e-afeta-circulacao-dos-trens-da-linha-4-amarela",
    readMore: "https://www.metropoles.com/sao-paulo/apagao-nacional-atinge-sp-e-afeta-circulacao-dos-trens-da-linha-4-amarela"
  }
];

export const News: React.FC = () => {
  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-primary text-3xl font-bold mb-4">Últimas Notícias</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news, index) => (
            <motion.div 
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow"
            >
              <a href={news.link} target="_blank" rel="noopener noreferrer" className="block relative overflow-hidden group">
                <img 
                  src={`/src/assets/images/${news.img}`} 
                  alt={news.title} 
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </a>
              <div className="p-8 flex flex-col flex-1">
                <span className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4 block">
                  {news.date}
                </span>
                <h5 className="text-black text-xl font-semibold mb-6 line-clamp-2 hover:text-primary transition-colors">
                  <a href={news.link} target="_blank" rel="noopener noreferrer">
                    {news.title}
                  </a>
                </h5>
                <p className="text-body text-sm leading-relaxed mb-6 line-clamp-4 flex-1">
                  {news.description}
                </p>
                <div className="mt-auto">
                  <a 
                    href={news.readMore} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary font-semibold text-sm hover:underline"
                  >
                    Ler mais
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
