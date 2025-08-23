'use client';

import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from '@/components/ui/accordion';
import { Search, HelpCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

interface FaqProps {
  data: FaqItem[];
}

export const Faq = ({ data }: FaqProps) => {
  return (
    <section className="bg-background py-16 px-4" aria-labelledby="faq-heading">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <HelpCircle className="h-8 w-8 text-primary" aria-hidden="true" />
          </div>
          <h2 id="faq-heading" className="text-4xl font-bold tracking-tight mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nossos produtos e serviços.
          </p>
        </div>

        {/* Resultados da busca */}
        {data.length && (
            <Accordion 
              type="single" 
              collapsible 
              className="space-y-4"
            >
              {data.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="border rounded-lg px-6 transition-all hover:shadow-md"
                >
                  <AccordionTrigger className="text-lg font-semibold py-4 text-left [&[data-state=open]>svg]:rotate-180 cursor-pointer">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
        )}

        {/* Ainda precisa de ajuda? */}
        <div className="mt-12 p-6 bg-muted/30 rounded-lg text-center">
          <h3 className="font-semibold text-lg mb-2">Ainda tem alguma dúvida?</h3>
          <p className="text-muted-foreground mb-4">Entre em contato conosco.</p>
          <Link href="/contact">
            <Button className='cursor-pointer'>
              Contato
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};