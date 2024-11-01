"use client";

import { Card } from '@/components/ui/card';

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <h1 className="text-4xl font-bold text-white mb-8">Datenschutzerklärung</h1>
        
        <div className="space-y-8">
          {/* Introduction */}
          <Card className="p-6 bg-black/50 border-primary/20">
            <p className="text-gray-300 leading-relaxed">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
              Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der 
              gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener 
              Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise 
              Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit 
              möglich, stets auf freiwilliger Basis.
            </p>
          </Card>

          {/* Data Security Notice */}
          <Card className="p-6 bg-black/50 border-primary/20">
            <h2 className="text-xl font-bold text-white mb-4">Datensicherheit</h2>
            <p className="text-gray-300 leading-relaxed">
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der 
              Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser 
              Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
            </p>
          </Card>

          {/* Cookies */}
          <Card className="p-6 bg-black/50 border-primary/20">
            <h2 className="text-xl font-bold text-white mb-4">Cookies</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten 
                auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies 
                dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer 
                zu machen.
              </p>
              <p>
                Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden 
                und die Ihr Browser speichert. Die meisten der von uns verwendeten Cookies 
                sind so genannte „Session-Cookies". Sie werden nach Ende Ihres Besuchs 
                automatisch gelöscht.
              </p>
              <p>
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen von 
                Cookies informiert werden und Cookies nur im Einzelfall erlauben.
              </p>
            </div>
          </Card>

          {/* Server Log Files */}
          <Card className="p-6 bg-black/50 border-primary/20">
            <h2 className="text-xl font-bold text-white mb-4">Server-Log-Files</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Der Provider der Seiten erhebt und speichert automatisch Informationen in 
                so genannten Server-Log Files, die Ihr Browser automatisch an uns übermittelt. 
                Dies sind:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Browsertyp/Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
              </ul>
            </div>
          </Card>

          {/* Contact Form */}
          <Card className="p-6 bg-black/50 border-primary/20">
            <h2 className="text-xl font-bold text-white mb-4">Kontaktformular</h2>
            <p className="text-gray-300 leading-relaxed">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre 
              Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen 
              Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von 
              Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne 
              Ihre Einwilligung weiter.
            </p>
          </Card>

          {/* Rights */}
          <Card className="p-6 bg-black/50 border-primary/20">
            <h2 className="text-xl font-bold text-white mb-4">Auskunft, Löschung, Sperrung</h2>
            <p className="text-gray-300 leading-relaxed">
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre 
              gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und 
              den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, 
              Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum 
              Thema personenbezogene Daten können Sie sich jederzeit unter der im 
              Impressum angegebenen Adresse an uns wenden.
            </p>
          </Card>

          {/* Newsletter */}
          <Card className="p-6 bg-black/50 border-primary/20">
            <h2 className="text-xl font-bold text-white mb-4">Newsletterdaten</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Wenn Sie den auf der Webseite angebotenen Newsletter beziehen möchten, 
                benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche 
                uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen 
                E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind.
              </p>
              <p>
                Die erteilte Einwilligung zur Speicherung der Daten, der E-Mail-Adresse 
                sowie deren Nutzung zum Versand des Newsletters können Sie jederzeit 
                widerrufen, etwa über den „Austragen"-Link im Newsletter.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}