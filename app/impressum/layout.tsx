import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum - Elektro Schiel',
  description: 'Rechtliche Informationen und Kontaktdaten von Elektro Schiel.',
};

export default function ImpressumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}