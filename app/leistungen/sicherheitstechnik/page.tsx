"use client";

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Shield, CheckCircle } from 'lucide-react';

export default function SicherheitstechnikPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2069&auto=format&fit=crop"
          alt="Sicherheitstechnik"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            {t('services.security.title')}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                {t('services.security.subtitle')}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {t('services.security.description')}
              </p>
            </div>

            <div className="space-y-4">
              {[
                'services.security.features.alarms',
                'services.security.features.cameras',
                'services.security.features.access',
                'services.security.features.fire'
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <p className="text-gray-300">{t(feature)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: <Shield className="w-8 h-8 text-primary" />,
                title: t('services.security.services.alarms.title'),
                items: [
                  t('services.security.services.alarms.item1'),
                  t('services.security.services.alarms.item2'),
                  t('services.security.services.alarms.item3')
                ]
              },
              {
                icon: <Shield className="w-8 h-8 text-primary" />,
                title: t('services.security.services.surveillance.title'),
                items: [
                  t('services.security.services.surveillance.item1'),
                  t('services.security.services.surveillance.item2'),
                  t('services.security.services.surveillance.item3')
                ]
              }
            ].map((service, index) => (
              <Card key={index} className="service-card p-6">
                <div className="relative z-10">
                  {service.icon}
                  <h3 className="text-xl font-bold text-white mt-4 mb-3">
                    {service.title}
                  </h3>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-2 text-gray-300">
                        <span className="text-primary">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}