"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { PortfolioImage } from "@/components/portfolio/image";
import { PortfolioContent } from "@/components/portfolio/content";
import { PortfolioCarouselProps } from "./type";

export const PortfolioCarousel = ({
  portfolioData,
}: PortfolioCarouselProps) => {
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({});

  const handleImageError = (id: number) => {
    setImageError((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section
      className="w-full py-12 md:py-16 lg:py-24 bg-background"
      aria-labelledby="portfolio-heading"
    >
      <div className="container px-4 md:px-6 mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            id="portfolio-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
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
              el: ".custom-pagination",
              bulletClass:
                "swiper-pagination-bullet !bg-muted-foreground/30 !h-3 !w-3 !mx-1 !border !border-muted-foreground/50",
              bulletActiveClass:
                "swiper-pagination-bullet-active !bg-primary !scale-125 !border-primary",
            }}
            loop={true}
            grabCursor={true}
            className="w-full"
          >
            {portfolioData.projects.map((project) => (
              <SwiperSlide key={project.id}>
                <Card className="h-full border-none shadow-none bg-transparent">
                  <div className="grid grid-cols-1 lg:grid-cols-2 h-full gap-8">
                    <PortfolioImage
                      project={project}
                      imageError={imageError}
                      handleImageError={handleImageError}
                    />
                    <PortfolioContent project={project} />
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
