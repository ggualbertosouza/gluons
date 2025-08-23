'use client';

import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, Lightbulb, CalendarCheck, Palette, Code, CheckCircle, Wrench } from 'lucide-react';
import { useState } from 'react';

interface FlowStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface FlowProps {
  steps: FlowStep[];
}

const iconMap: { [key: string]: React.ElementType } = {
  Lightbulb,
  CalendarCheck,
  Palette,
  Code,
  CheckCircle,
  Wrench
};

export const Flow = ({ steps }: FlowProps) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="w-full py-12 md:py-16 lg:py-24 bg-muted/30" aria-label="Fluxo de trabalho">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Nosso Processo de Trabalho</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um fluxo transparente e colaborativo para transformar sua ideia em realidade
          </p>
        </div>

        {/* Indicador de progresso para mobile */}
        <div className="flex justify-center mb-8 md:hidden">
          <div className="flex items-center space-x-2 bg-background p-2 rounded-full shadow-sm">
            <span className="text-sm font-medium">Etapa {activeStep + 1} de {steps.length}</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Navegação lateral para desktop */}
          <div className="hidden lg:flex lg:flex-col lg:w-1/3 lg:sticky lg:top-24 lg:space-y-2">
            {steps.map((step, index) => {
              const IconComponent = iconMap[step.icon] || Lightbulb;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`cursor-pointer flex items-start space-x-4 p-4 rounded-lg text-left transition-all ${
                    index === activeStep
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'bg-background hover:bg-muted/50'
                  }`}
                  aria-current={index === activeStep ? 'step' : undefined}
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                    index === activeStep ? 'bg-primary-foreground/20' : 'bg-primary/10'
                  }`}>
                    <IconComponent className={`w-5 h-5 ${index === activeStep ? 'text-primary-foreground' : 'text-primary'}`} />
                  </div>
                  <div>
                    <h3 className={`font-semibold ${index === activeStep ? 'text-primary-foreground' : 'text-foreground'}`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm mt-1 ${index === activeStep ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
                      {step.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Conteúdo principal */}
          <div className="w-full lg:w-2/3">
            <Card className="overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    {(() => {
                      const IconComponent = iconMap[steps[activeStep].icon] || Lightbulb;
                      return <IconComponent className="w-6 h-6 text-primary" />;
                    })()}
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Etapa {activeStep + 1} de {steps.length}</span>
                    <h3 className="text-xl md:text-2xl font-bold">{steps[activeStep].title}</h3>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">{steps[activeStep].description}</p>

                {/* Navegação mobile */}
                <div className="flex justify-between mt-8 lg:hidden">
                  <button
                    onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                    disabled={activeStep === 0}
                    className="flex items-center px-4 py-2 rounded-md text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed bg-muted hover:bg-muted/80"
                  >
                    Anterior
                  </button>
                  
                  <button
                    onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
                    disabled={activeStep === steps.length - 1}
                    className="cursor-pointer flex items-center px-4 py-2 rounded-md text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Próximo
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Indicadores de etapa para mobile */}
            <div className="flex justify-center mt-6 lg:hidden">
              <div className="flex space-x-2">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`w-2 h-2 rounded-full ${
                      index === activeStep ? 'bg-primary' : 'bg-muted'
                    }`}
                    aria-label={`Ir para etapa ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};