"use client";

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { History, Award, Users, Lightbulb } from 'lucide-react';

export default function UnternehmenPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Elektro Schiel Gebäude"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Tradition trifft Innovation
            </h1>
            <p className="text-2xl text-primary">...wir denken weiter!</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Herzlich willkommen...
              </h2>
              <div className="prose prose-invert">
                <p className="text-gray-300 leading-relaxed">
                  ...auf der Homepage des Traditionsunternehmens Michael Schiel. Als zertifizierter 
                  Fachbetrieb für Elektro- und Sicherheitstechnik ist uns Ihre Zufriedenheit 
                  Ansporn und höchstes Ziel. Das 1945 von Wilhelm Schiel gegründete und seit 
                  1992 vom Enkel Michael geführte Unternehmen schreibt mittlerweile in der 
                  dritten Generation Erfolgsgeschichte.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              <div className="relative pl-8 border-l-2 border-primary">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                <h3 className="text-white font-bold">1945</h3>
                <p className="text-gray-300">Gründung durch Wilhelm Schiel</p>
              </div>
              <div className="relative pl-8 border-l-2 border-primary">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                <h3 className="text-white font-bold">1992</h3>
                <p className="text-gray-300">Übernahme durch Michael Schiel</p>
              </div>
              <div className="relative pl-8 border-l-2 border-primary">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                <h3 className="text-white font-bold">Heute</h3>
                <p className="text-gray-300">Elfköpfiges Expertenteam mit modernstem Know-how</p>
              </div>
            </div>
          </div>

          {/* Right Column - Cards */}
          <div className="space-y-6">
            <Card className="p-6 bg-black/50 border-primary/20">
              <div className="flex gap-4">
                <Award className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Zertifizierter Meisterbetrieb</h3>
                  <p className="text-gray-300">
                    Als Meisterbetrieb der Handwerkskammer Düsseldorf bilden wir unseren 
                    Nachwuchs konsequent in den eigenen Reihen aus.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-black/50 border-primary/20">
              <div className="flex gap-4">
                <Lightbulb className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Innovation & Zukunft</h3>
                  <p className="text-gray-300">
                    Früh erkannten wir die Zeichen der Zeit und entwickelten unser Angebot 
                    gezielt weiter. Von Antennenanlagen bis zu Sicherheitssystemen - bei uns 
                    liegt alles in einer Hand.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-black/50 border-primary/20">
              <div className="flex gap-4">
                <Users className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Spezialisierung</h3>
                  <p className="text-gray-300">
                    Wir empfehlen uns besonders für barrierefreies Bauen und die Installation 
                    von Rauchwarnmeldern - auch für nicht ganz alltägliche Wünsche.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}