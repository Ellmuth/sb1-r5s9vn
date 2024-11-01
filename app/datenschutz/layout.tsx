import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutz - Elektro Schiel',
  description: 'Datenschutzerklärung und Informationen zum Umgang mit Ihren Daten bei Elektro Schiel.',
};

export default function DatenschutzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}