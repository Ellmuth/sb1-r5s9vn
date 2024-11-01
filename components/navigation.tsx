"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Zap, Menu, X } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-blue-600" />
            <span className="font-bold text-xl">Elektro Schiel</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              {t('nav.home')}
            </Link>
            <Link href="/leistungen" className="text-gray-700 hover:text-blue-600">
              {t('nav.services')}
            </Link>
            <Link href="/kontakt" className="text-gray-700 hover:text-blue-600">
              {t('nav.contact')}
            </Link>
            <Button asChild variant="outline">
              <Link href="tel:0123456789">
                {t('nav.emergency')}: 0123 456789
              </Link>
            </Button>
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link
                href="/leistungen"
                className="text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.services')}
              </Link>
              <Link
                href="/kontakt"
                className="text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.contact')}
              </Link>
              <Button asChild className="w-full">
                <Link href="tel:0123456789">
                  {t('nav.emergency')}: 0123 456789
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}