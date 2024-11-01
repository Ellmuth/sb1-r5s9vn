import { Zap, Shield, Sun, Home } from 'lucide-react';

export default function LeistungenPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-16 text-white text-center">
          Unsere Leistungen
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: <Zap className="w-12 h-12 text-primary" />,
              title: "Elektroinstallationen",
              items: [
                "Komplette Hausinstallationen",
                "Modernisierung bestehender Anlagen",
                "Sicherungskasten und Verteilungen",
                "Stark- und Schwachstromanlagen"
              ]
            },
            {
              icon: <Shield className="w-12 h-12 text-primary" />,
              title: "Sicherheitstechnik",
              items: [
                "Alarmanlagen",
                "Videoüberwachung",
                "Brandmeldeanlagen",
                "Zugangskontrollsysteme"
              ]
            },
            {
              icon: <Sun className="w-12 h-12 text-primary" />,
              title: "Regenerative Energien",
              items: [
                "Photovoltaikanlagen",
                "Energiespeichersysteme",
                "Wallboxen für E-Autos",
                "Smart Home Integration"
              ]
            },
            {
              icon: <Home className="w-12 h-12 text-primary" />,
              title: "Smart Home",
              items: [
                "KNX/EIB Systeme",
                "Beleuchtungssteuerung",
                "Heizungssteuerung",
                "Jalousiensteuerung"
              ]
            }
          ].map((service, index) => (
            <div key={index} className="service-card p-8">
              <div className="relative z-10">
                {service.icon}
                <h2 className="text-2xl font-bold text-white mt-6 mb-4">{service.title}</h2>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-2 text-gray-300">
                      <span className="text-primary text-lg">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}