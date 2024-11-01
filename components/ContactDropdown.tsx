"use client";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, FileText, Scale, Shield } from "lucide-react";
import Link from "next/link";

export function ContactDropdown() {
  const { t } = useLanguage();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-white hover:text-primary">
            {t('nav.contact')}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[300px] sm:w-[400px] p-4">
              <div className="grid gap-3">
                <Link href="/kontakt" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium leading-none">Kontakt</span>
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                    Nehmen Sie Kontakt mit uns auf
                  </p>
                </Link>
                <Link href="/impressum" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium leading-none">Impressum</span>
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                    Rechtliche Informationen
                  </p>
                </Link>
                <Link href="/agb" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  <div className="flex items-center gap-2">
                    <Scale className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium leading-none">AGB</span>
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                    Allgemeine Geschäftsbedingungen
                  </p>
                </Link>
                <Link href="/datenschutz" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium leading-none">Datenschutz</span>
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                    Datenschutzerklärung
                  </p>
                </Link>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}