'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

interface Project {
  id: number;
  title: string;
  type: string;
  technology: string;
  description: string;
  imageUrl: string;
  demoUrl?: string;
}

interface PortfolioData {
  title: string;
  subtitle: string;
  projects: Project[];
}

interface PortfolioCarouselProps {
  portfolioData: PortfolioData;
}

export const PortfolioCarousel = ({ portfolioData }: PortfolioCarouselProps) => {
  const [imageError, setImageError] = useState<{[key: number]: boolean}>({});

  const handleImageError = (id: number) => {
    setImageError(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section className="w-full py-12 md:py-16 lg:py-24 bg-background" aria-labelledby="portfolio-heading">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-12 md:mb-16">
          <h2 id="portfolio-heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {portfolioData.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {portfolioData.subtitle}
          </p>
        </div>

        {/* Carrossel com Swiper */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.custom-pagination',
              bulletClass: 'swiper-pagination-bullet !bg-muted-foreground/30 !h-3 !w-3 !mx-1',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-primary !scale-125',
            }}
            loop={true}
            grabCursor={true}
            className="w-full"
          >
            {portfolioData.projects.map((project) => (
              <SwiperSlide key={project.id}>
                <Card className="h-full border-none shadow-none bg-transparent">
                  <div className="grid grid-cols-1 lg:grid-cols-2 h-full gap-8">

                   <div className="relative h-72 md:h-96 lg:h-[500px] rounded-lg overflow-hidden bg-muted">
                      {!imageError[project.id] ? (
                        <Image
                          src={project.imageUrl}
                          alt={`Imagem do projeto ${project.title}`}
                          fill
                          className="object-cover"
                          onError={() => handleImageError(project.id)}
                          priority={project.id === 1} // Priorizar carregamento da primeira imagem
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-muted">
                          <span className="text-muted-foreground">Imagem não disponível</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Conteúdo do projeto */}
                    <div className="flex flex-col justify-center">
                      <CardContent className="p-0">
                        <div className="flex items-center gap-2 mb-4">
                          <Badge variant="secondary" className="text-sm">
                            {project.type}
                          </Badge>
                          <Badge variant="outline" className="text-sm">
                            {project.technology}
                          </Badge>
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                          {project.title}
                        </h3>
                        
                        <p className="text-muted-foreground mb-6">
                          {project.description}
                        </p>
                        
                        {project.demoUrl && (
                          <Button asChild>
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              Ver projeto
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Paginação personalizada */}
          <div className="custom-pagination flex justify-center mt-6" />
        </div>
      </div>
    </section>
  );
};
