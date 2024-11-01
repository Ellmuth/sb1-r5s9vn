"use client";

import { Card } from '@/components/ui/card';

export default function AGBPage() {
  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <h1 className="text-4xl font-bold text-white mb-8">Allgemeine Geschäftsbedingungen</h1>
        
        <div className="space-y-8">
          {/* Introduction */}
          <Card className="p-6 bg-black/50 border-primary/20">
            <p className="text-gray-300 leading-relaxed">
              Die nachstehenden Bedingungen sind im beiderseitigen Einverständnis 
              Vertragsbestandteil; sie haben Vorrang vor abweichen Bedingungen des Kunden. 
              Abweichungen, Ergänzungen sowie besondere Zusicherungen bedürfen zu ihrer 
              Wirksamkeit der Schriftform.
            </p>
          </Card>

          {/* Section I */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">
              I. Leistungs- und Reparaturbedingungen
            </h2>
            
            <div className="space-y-6">
              <Card className="p-6 bg-black/50 border-primary/20">
                <h3 className="text-xl font-bold text-white mb-4">1. Allgemeines</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    1.1 Soweit die nachstehenden Bedingungen keine Regelungen enthalten, 
                    gilt bei Arbeiten an Bauwerken (Bauleistungen) die Verdingungsordnung 
                    für Bauleistungen (VOB) Teil B und betreffend DIN 18299, DIN 18382, 
                    DIN 18384, DIN 18385 und DIN 18386 als "Allgemeine Technische 
                    Vertragsbedingungen für Bauleistungen (ATV)" auszugsweise auch Teil C.
                  </p>
                  <p>
                    1.2 Zum Angebot des Werkunternehmers gehörige Unterlagen wie 
                    Abbildungen, Zeichnungen usw. sind nur annähernd als maß- und 
                    gewichtsgenau anzusehen, es sei denn, die Maß- und Gewichtsgenauigkeit 
                    wurde ausdrücklich bestätigt.
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-black/50 border-primary/20">
                <h3 className="text-xl font-bold text-white mb-4">2. Termine</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    2.1 Der vereinbarte Liefer- oder Fertigstellungstermin ist nur dann 
                    verbindlich, wenn die Einhaltung nicht durch Umstände, die der 
                    Werkunternehmer nicht zu vertreten hat, unmöglich gemacht wird.
                  </p>
                  <p>
                    2.2 Der Kunde hat in Fällen des Verzugs nur dann den Anspruch aus § 8 
                    Nr. 3 VOB/B, wenn für Beginn und Fertigstellung eine Zeit nach dem 
                    Kalender schriftlich vereinbart war.
                  </p>
                </div>
              </Card>

              {/* Additional sections following the same pattern */}
              <Card className="p-6 bg-black/50 border-primary/20">
                <h3 className="text-xl font-bold text-white mb-4">5. Gewährleistung und Haftung</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    5.1 Die Gewährleistungsfrist beträgt für alle Arbeitsleistungen 
                    (Reparaturen) sowie für eingebautes Material 6 Monate.
                  </p>
                  <p>
                    5.2 Zur Mängelbeseitigung hat der Kunde dem Werkunternehmer die nach 
                    billigem Ermessen erforderliche Zeit und Gelegenheit zu gewähren.
                  </p>
                </div>
              </Card>
            </div>
          </section>

          {/* Section II */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">
              II. Verkaufsbedingungen
            </h2>
            
            <div className="space-y-6">
              <Card className="p-6 bg-black/50 border-primary/20">
                <h3 className="text-xl font-bold text-white mb-4">1. Eigentumsvorbehalt</h3>
                <p className="text-gray-300 leading-relaxed">
                  Die verkauften Gegenstände und Anlagen bleiben Eigentum des Verkäufers 
                  bis zur Erfüllung sämtlicher aus diesem Vertrag ihm gegen den Kunden 
                  zustehender Ansprüche.
                </p>
              </Card>

              <Card className="p-6 bg-black/50 border-primary/20">
                <h3 className="text-xl font-bold text-white mb-4">
                  2. Abnahme und Abnahmeverzug
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Nimmt der Kunde den Gegenstand nicht fristgemäß ab, ist der Verkäufer 
                  berechtigt, ihm eine angemessene Nachfrist zu setzen.
                </p>
              </Card>
            </div>
          </section>

          {/* Section III */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">
              III. Gemeinsame Bestimmungen für Leistungen, Reparaturen und Verkäufe
            </h2>
            
            <div className="space-y-6">
              <Card className="p-6 bg-black/50 border-primary/20">
                <h3 className="text-xl font-bold text-white mb-4">
                  1. Preise und Zahlungsbedingungen
                </h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    1.1 Die Endpreise verstehen sich ab Betriebssitz des Werkunternehmers 
                    bzw. Verkäufers inkl. Mehrwertsteuer.
                  </p>
                  <p>
                    1.2 Alle Rechnungsbeträge sind sofort nach Rechnungserteilung in einer 
                    Summe zahlbar.
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-black/50 border-primary/20">
                <h3 className="text-xl font-bold text-white mb-4">2. Gerichtsstand</h3>
                <p className="text-gray-300 leading-relaxed">
                  Für sämtliche gegenwärtigen und zukünftigen Ansprüche aus der 
                  Geschäftsverbindung mit Vollkaufleuten einschließlich Wechsel- und 
                  Scheckforderungen ist ausschließlicher Gerichtsstand der Sitz des 
                  Werkunternehmers bzw. des Verkäufers.
                </p>
              </Card>
            </div>
          </section>

          {/* Footer */}
          <div className="text-gray-400 text-sm mt-12">
            <p>Gerichtstand: Mülheim an der Ruhr</p>
            <p>Stand: 01.2016</p>
          </div>
        </div>
      </div>
    </div>
  );
}