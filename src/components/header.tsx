'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useRouter } from 'next/navigation';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const links = [
    { href: '/', label: 'Início' },
    { href: '/contact', label: 'Contato' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between p-2 sm:p-4 md:px-8">
        {/* LOGO */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold">Gluons</span>
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              {links.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink
                    href={link.href}
                    className={navigationMenuTriggerStyle()}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Botão de contato */}
          <Button className='cursor-pointer' size="sm" onClick={() => router.push('/contact')}>
            Entrar em Contato
          </Button>
        </div>

        {/* MENU MOBILE */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Abrir menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[250px]">
              <nav className="flex flex-col space-y-4 mt-8 p-2">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium hover:underline"
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Botão de contato */}
                <Button
                  className="mt-4 cursor-pointer"
                  onClick={() => {
                    setOpen(false);
                    router.push('/contact');
                  }}
                >
                  Entrar em Contato
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
