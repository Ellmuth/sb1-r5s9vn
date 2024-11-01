"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Zap, Menu, X, Phone } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { ServicesDropdown } from './ServicesDropdown';
import { WirDropdown } from './WirDropdown';
import { ContactDropdown } from './ContactDropdown';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <Zap className="w-8 h-8 text-primary transform transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-bold text-2xl text-white tracking-wider">
              ELEKTRO <span className="text-primary">SCHIEL</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="text-lg">
              <ServicesDropdown />
            </div>
            <div className="text-lg">
              <WirDropdown />
            </div>
            <div className="text-lg">
              <ContactDropdown />
            </div>
            <Button 
              asChild 
              className="bg-primary hover:bg-primary/90 text-black font-bold px-6 py-2 rounded-lg flex items-center gap-2 transition-transform hover:scale-105"
            >
              <Link href="tel:0123456789">
                <Phone className="w-4 h-4" />
                <span>0123 456789</span>
              </Link>
            </Button>
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/leistungen"
              className="block text-white hover:text-primary transition-colors px-4 py-2 text-lg"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.services')}
            </Link>
            <Link
              href="/wir/unternehmen"
              className="block text-white hover:text-primary transition-colors px-4 py-2 text-lg"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.about')}
            </Link>
            <Link
              href="/kontakt"
              className="block text-white hover:text-primary transition-colors px-4 py-2 text-lg"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.contact')}
            </Link>
            <Link
              href="/impressum"
              className="block text-white hover:text-primary transition-colors px-4 py-2 text-lg"
              onClick={() => setIsOpen(false)}
            >
              Impressum
            </Link>
            <Link
              href="/agb"
              className="block text-white hover:text-primary transition-colors px-4 py-2 text-lg"
              onClick={() => setIsOpen(false)}
            >
              AGB
            </Link>
            <Link
              href="/datenschutz"
              className="block text-white hover:text-primary transition-colors px-4 py-2 text-lg"
              onClick={() => setIsOpen(false)}
            >
              Datenschutz
            </Link>
            <div className="px-4 pt-2">
              <Button 
                asChild 
                className="w-full bg-primary hover:bg-primary/90 text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2"
              >
                <Link href="tel:0123456789">
                  <Phone className="w-4 h-4" />
                  <span>0123 456789</span>
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}