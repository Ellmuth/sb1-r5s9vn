"use client";

import { Button } from '@/components/ui/button';
import { Shield, Zap, Clock, Phone, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export function HomeContent() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-black">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
            alt="Elektriker bei der Arbeit"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>
        
        <div className="relative h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-7xl font-bold mb-8 hero-text">
                <span className="text-white">ELEKTRO</span>
                <br />
                <span className="text-primary">SCHIEL</span>
              </h1>
              <p className="text-2xl text-white mb-12 hero-text">{t('home.hero.subtitle')}</p>
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-black font-bold px-8 py-6 text-lg rounded-lg group"
              >
                <Link href="/kontakt">
                  {t('home.hero.cta')}
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            {t('home.services.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12 text-primary" />,
                title: t('home.services.installation.title'),
                description: t('home.services.installation.description')
              },
              {
                icon: <Shield className="w-12 h-12 text-primary" />,
                title: t('home.services.security.title'),
                description: t('home.services.security.description')
              },
              {
                icon: <Clock className="w-12 h-12 text-primary" />,
                title: t('home.services.emergency.title'),
                description: t('home.services.emergency.description')
              }
            ].map((service, index) => (
              <div key={index} className="service-card p-8">
                <div className="relative z-10">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-white mt-6 mb-4">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6 text-black">{t('home.emergency.title')}</h2>
          <p className="text-2xl mb-8 text-black/80">{t('home.emergency.subtitle')}</p>
          <div className="inline-flex items-center justify-center gap-4 bg-black text-primary px-8 py-4 rounded-lg">
            <Phone className="w-8 h-8" />
            <span className="text-3xl font-bold">0123 456789</span>
          </div>
        </div>
      </section>
    </>
  );
}