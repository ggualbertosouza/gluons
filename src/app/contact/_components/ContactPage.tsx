'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

interface ContactInfo {
  title: string;
  subtitle: string;
  form: {
    name: {
      label: string;
      placeholder: string;
    };
    email: {
      label: string;
      placeholder: string;
    };
    subject: {
      label: string;
      placeholder: string;
      options: string[];
    };
    message: {
      label: string;
      placeholder: string;
    };
    button: string;
    successMessage: string;
  };
  contactInfo: {
    title: string;
    items: {
      icon: string;
      title: string;
      content: string;
      link?: string;
    }[];
  };
}

interface ContactPageProps {
  contactData: ContactInfo;
}

export const ContactPage = ({ contactData }: ContactPageProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, subject: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você faria a submissão do formulário para seu backend
    console.log('Dados do formulário:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const iconMap: { [key: string]: React.ElementType } = {
    Mail,
    Phone,
    MapPin,
    Clock
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            {contactData.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {contactData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
                    <h3 className="text-2xl font-semibold text-foreground mb-2">Mensagem Enviada!</h3>
                    <p className="text-muted-foreground">{contactData.form.successMessage}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-base">
                        {contactData.form.name.label}
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder={contactData.form.name.placeholder}
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-base">
                        {contactData.form.email.label}
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder={contactData.form.email.placeholder}
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-base">
                        {contactData.form.subject.label}
                      </Label>
                      <Select onValueChange={handleSelectChange} value={formData.subject}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder={contactData.form.subject.placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                          {contactData.form.subject.options.map((option, index) => (
                            <SelectItem key={index} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-base">
                        {contactData.form.message.label}
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder={contactData.form.message.placeholder}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-12 text-base font-medium"
                      size="lg"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      {contactData.form.button}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              {contactData.contactInfo.title}
            </h2>
            
            <div className="space-y-6">
              {contactData.contactInfo.items.map((item, index) => {
                const IconComponent = iconMap[item.icon] || Mail;
                
                return (
                  <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
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
                          <p className="text-muted-foreground">
                            {item.content}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Additional Info */}
            <Card className="mt-8 border-none bg-muted/30">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Horário de Atendimento</h3>
                <p className="text-muted-foreground">
                  Segunda a sexta: 9h às 18h
                </p>
                <p className="text-muted-foreground mt-2">
                  Sábado: 10h às 14h (apenas suporte emergencial)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;