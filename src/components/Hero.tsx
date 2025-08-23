'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container mx-auto flex flex-col-reverse items-center gap-10 py-12 md:flex-row md:py-20">
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            Transforme suas ideias em resultados
          </h1>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl lg:text-2xl">
            Criamos soluções digitais personalizadas para seu negócio crescer online.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
            <Button size="lg" asChild>
              <Link href="/contact">Solicitar Orçamento</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Fale Conosco</Link>
            </Button>
          </div>
        </div>

        <div className="flex-1 relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px]">
          <Image
            src="/heroIllustration.svg"
            alt="Ilustração de Hero"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};
