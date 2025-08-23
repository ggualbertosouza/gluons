"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

interface ContactInfoItem {
  icon: string;
  title: string;
  content: string;
  link?: string;
}

interface ContactInfoSectionProps {
  title: string;
  items: ContactInfoItem[];
}

export const ContactInfoSection = ({
  title,
  items,
}: ContactInfoSectionProps) => {
  const iconMap: { [key: string]: React.ElementType } = {
    Mail,
    Phone,
    MapPin,
    Clock,
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-6">{title}</h2>

      <div className="space-y-6">
        {items.map((item, index) => {
          const IconComponent = iconMap[item.icon] || Mail;

          return (
            <Card
              key={index}
              className="border-none shadow-sm hover:shadow-md transition-shadow"
            >
              <CardContent className="flex items-start p-6">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg mr-4">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{item.content}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="mt-8 border-none bg-muted/30">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-3">
            Horário de Atendimento
          </h3>
          <p className="text-muted-foreground">Segunda a sexta: 9h às 18h</p>
          <p className="text-muted-foreground mt-2">
            Sábado: 10h às 14h (apenas suporte emergencial)
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
