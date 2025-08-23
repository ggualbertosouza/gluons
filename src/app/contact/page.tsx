"use client";

import { ContactForm } from "./_components/form";
import { ContactInfoSection } from "./_components/info";
import { ContactData } from "@/data/ContactData";

export const ContactPage = () => {
  const contactData = ContactData.contactData;

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            {contactData.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {contactData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm formConfig={contactData.form} />
          <ContactInfoSection
            title={contactData.contactInfo.title}
            items={contactData.contactInfo.items}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
