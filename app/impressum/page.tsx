"use client";

import { Card } from '@/components/ui/card';

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <h1 className="text-4xl font-bold text-white mb-12">Impressum</h1>

        <div className="space-y-8">
          {/* Company Information */}
          <Card className="p-6 bg-black/50 border-primary/20">
            <h2 className="text-xl font-bold text-white mb-4">Elektro Schiel</h2>
            <div className="text-gray-300 space-y-2">
              <p>Michael Schiel</p>
              <p>Friedhofstr. 12</p>
              <p>45478 Mülheim an der Ruhr</p>
            </div>
          </Card>

          {/* Contact Information */}
          <Card className="p-6 bg-black/50 border-primary/20">
            <h2 className="text-xl font-bold text-white mb-4">Kontakt</h2>
            <div className="text-gray-300 space-y-2">
              <p>Telefon: 0208 - 41 06 19</p>
              <p>Telefax: 0208 - 41 06 51</p>
              <p>E-Mail: info@elektro-schiel.de</p>
            </div>
          </Card>

          {/* Tax Information */}
          <Card className="p-6 bg-black/50 border-primary/20">
            <h2 className="text-xl font-bold text-white mb-4">Umsatzsteuer-ID</h2>
            <p className="text-gray-300">
              Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
              DE123 456 789
            </p>
          </Card>

          {/* Credits */}
          <Card className="p-6 bg-black/50 border-primary/20">
            <h2 className="text-xl font-bold text-white mb-4">Gestaltung, Umsetzung, Redaktion</h2>
            <div className="text-gray-300 space-y-2">
              <p>Puro Design, Dinslaken</p>
              <p><a href="http://www.purodesign.info" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.purodesign.info</a></p>
            </div>
          </Card>

          {/* Image Credits */}
          <Card className="p-6 bg-black/50 border-primary/20">
            <h2 className="text-xl font-bold text-white mb-4">Bilder, Fotos</h2>
            <p className="text-gray-300">Gira, Jung, Fotolia, Puro Design</p>
          </Card>

          {/* Disclaimer */}
          <Card className="p-6 bg-black/50 border-primary/20">
            <h2 className="text-xl font-bold text-white mb-4">Haftungsausschluss (Disclaimer)</h2>
            
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Haftung für Inhalte</h3>
                <p className="leading-relaxed">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Haftung für Links</h3>
                <p className="leading-relaxed">
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Urheberrecht</h3>
                <p className="leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
              </div>
            </div>
          </Card>

          {/* Source */}
          <p className="text-gray-400 text-sm">
            Quelle: <a href="https://www.e-recht24.de" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.e-recht24.de</a>
          </p>
        </div>
      </div>
    </div>
  );
}