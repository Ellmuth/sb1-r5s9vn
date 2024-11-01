"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useLanguage } from "@/contexts/LanguageContext";
import { Zap, Shield, Home } from "lucide-react";
import Link from "next/link";

export function ServicesDropdown() {
  const { t } = useLanguage();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-white hover:text-primary">
            {t('nav.services')}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[300px] sm:w-[400px] p-4">
              <div className="grid gap-3">
                <Link href="/leistungen/elektroinstallationen" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium leading-none">{t('services.electrical.title')}</span>
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                    {t('services.electrical.shortDesc')}
                  </p>
                </Link>
                <Link href="/leistungen/sicherheitstechnik" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium leading-none">{t('services.security.title')}</span>
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                    {t('services.security.shortDesc')}
                  </p>
                </Link>
                <Link href="/leistungen/smart-home" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  <div className="flex items-center gap-2">
                    <Home className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium leading-none">{t('services.smarthome.title')}</span>
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                    {t('services.smarthome.shortDesc')}
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