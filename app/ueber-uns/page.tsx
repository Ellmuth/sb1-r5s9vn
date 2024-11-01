"use client";

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Quote } from 'lucide-react';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
          alt="Elektro Schiel Workshop"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Michael Schiel
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Meister der Elektrotechnik
              </h2>
              <div className="prose prose-invert">
                <p className="text-gray-300 leading-relaxed">
                  Michael Schiel ist geborener Mülheimer und dort auch noch immer verwurzelt. 
                  Sein Lebensmotto spiegelt sich in seiner Produktivität und Fähigkeit als 
                  Meister des Elektrotechnikhandwerks wider.
                </p>
              </div>
            </div>

            {/* Quote Card */}
            <Card className="bg-primary/10 border-primary p-6">
              <div className="flex gap-4">
                <Quote className="w-8 h-8 text-primary flex-shrink-0" />
                <blockquote className="text-white">
                  "Für wirklich jedes Problem gibt es auch immer eine Lösung."
                  <footer className="mt-2 text-primary">
                    - Michael Schiel
                  </footer>
                </blockquote>
              </div>
            </Card>

            {/* Timeline */}
            <div className="space-y-6">
              <div className="relative pl-8 border-l-2 border-primary">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                <h3 className="text-white font-bold">1990</h3>
                <p className="text-gray-300">Meisterprüfung im Elektrotechnikerhandwerk</p>
              </div>
              <div className="relative pl-8 border-l-2 border-primary">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                <h3 className="text-white font-bold">Heute</h3>
                <p className="text-gray-300">Inhaber des Elektroinstallationsbetriebs in Speldorf, Mülheim an der Ruhr</p>
              </div>
            </div>
          </div>

          {/* Right Column - Image and Quote */}
          <div className="space-y-8">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2069&auto=format&fit=crop"
                alt="Elektriker bei der Arbeit"
                fill
                className="object-cover"
              />
            </div>

            <Card className="bg-primary p-6">
              <blockquote className="text-black text-lg">
                "Qualität bedeutet, etwas ordentlich zu erledigen, auch wenn niemand zuschaut."
                <footer className="mt-2 text-black/80">
                  - Henry Ford
                </footer>
              </blockquote>
            </Card>

            <div className="prose prose-invert">
              <p className="text-gray-300 leading-relaxed">
                Schon von klein auf interessierte sich Michael Schiel für die Elektrotechnik, 
                inspiriert durch den familieneigenen Betrieb. Die Ziele für sein Unternehmen 
                definiert er durch konsequente Weiterbildung im Bereich der Elektro- und 
                Sicherheitstechnik für zufriedene Kunden.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}