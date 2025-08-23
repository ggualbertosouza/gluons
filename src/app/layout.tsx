import "./globals.css";

import { HomeMetadata } from "@/metadata";
import { geistMono, geistSans } from "@/assets/fonts";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = HomeMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
