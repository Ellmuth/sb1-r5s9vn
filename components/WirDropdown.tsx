"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useLanguage } from "@/contexts/LanguageContext";
import { User, Users, History } from "lucide-react";
import Link from "next/link";

export function WirDropdown() {
  const { t } = useLanguage();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-white hover:text-primary">
            {t('nav.about')}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[300px] sm:w-[400px] p-4">
              <div className="grid gap-3">
                <Link href="/wir/unternehmen" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  <div className="flex items-center gap-2">
                    <History className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium leading-none">Unternehmen</span>
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                    Tradition trifft Innovation - Unsere Geschichte seit 1945
                  </p>
                </Link>
                <Link href="/wir/michael-schiel" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium leading-none">Michael Schiel</span>
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                    Lernen Sie den Inhaber kennen
                  </p>
                </Link>
                <Link href="/wir/team" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium leading-none">Team</span>
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                    Unser elfköpfiges Expertenteam
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