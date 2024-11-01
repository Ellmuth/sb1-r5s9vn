"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Zap } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Zap className="w-8 h-8 text-primary" />
              <span className="font-bold text-2xl">ELEKTRO SCHIEL</span>
            </div>
            <p className="text-gray-400 text-lg">
              Ihr zuverlässiger Partner für Elektroinstallationen seit 1990
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-primary">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/leistungen" className="text-gray-400 hover:text-primary transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-400 hover:text-primary transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-primary">Kontakt</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-primary transition-colors">Musterstraße 123</li>
              <li className="hover:text-primary transition-colors">12345 Musterstadt</li>
              <li className="hover:text-primary transition-colors">Tel: 0123 456789</li>
              <li className="hover:text-primary transition-colors">Email: info@elektro-schiel.de</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Elektro Schiel. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}