"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { useContactForm } from "./form";
import { Form } from "@/components/ui/form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

interface ContactFormProps {
  formConfig: {
    name: { label: string; placeholder: string };
    email: { label: string; placeholder: string };
    subject: { label: string; placeholder: string; options: string[] };
    message: { label: string; placeholder: string };
    button: string;
    successMessage: string;
  };
  onSubmit?: (data: any) => void;
}

export const ContactForm = ({ formConfig, onSubmit }: ContactFormProps) => {
  const { form, isSubmitted, isSubmitting, handleSubmit } = useContactForm({
    formConfig,
    onSubmit,
  });

  return (
    <Card className="border-none shadow-lg">
      <CardContent className="pt-6">
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              Mensagem Enviada!
            </h3>
            <p className="text-muted-foreground">{formConfig.successMessage}</p>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-base">
                      {formConfig.name.label}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={formConfig.name.placeholder}
                        {...field}
                        className="h-12"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-base">
                      {formConfig.email.label}
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder={formConfig.email.placeholder}
                        {...field}
                        className="h-12"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-base">
                      {formConfig.subject.label}
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12">
                          <SelectValue
                            placeholder={formConfig.subject.placeholder}
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {formConfig.subject.options.map((option, index) => (
                          <SelectItem key={index} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-base">
                      {formConfig.message.label}
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={formConfig.message.placeholder}
                        {...field}
                        rows={5}
                        className="resize-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full h-12 text-base font-medium"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                ) : (
                  <Send className="mr-2 h-5 w-5" />
                )}
                {formConfig.button}
              </Button>
            </form>
          </Form>
        )}
      </CardContent>
    </Card>
  );
};
