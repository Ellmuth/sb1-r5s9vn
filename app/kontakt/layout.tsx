import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt - Elektro Schiel in Mülheim an der Ruhr',
  description: 'Kontaktieren Sie Elektro Schiel - Ihr Elektrofachbetrieb in Mülheim an der Ruhr. Wir sind für Sie da unter 0208 - 41 06 19 oder info@elektro-schiel.de.',
  openGraph: {
    title: 'Kontakt - Elektro Schiel',
    description: 'Kontaktieren Sie uns - Wir sind für Sie da!',
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}