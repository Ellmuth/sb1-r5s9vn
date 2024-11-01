import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Über uns - Tradition trifft Innovation seit 1945',
  description: 'Lernen Sie Elektro Schiel kennen - Ihr Elektrofachbetrieb in Mülheim an der Ruhr seit 1945. Erfahren Sie mehr über unsere Geschichte, unser Team und unsere Werte.',
  openGraph: {
    title: 'Über uns - Elektro Schiel',
    description: 'Ihr Elektrofachbetrieb in Mülheim an der Ruhr seit 1945.',
  },
};

export default function WirLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}