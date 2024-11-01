import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Über Uns - Michael Schiel | Elektro Schiel',
  description: 'Lernen Sie Michael Schiel kennen - Ihr Experte für Elektroinstallationen in Mülheim an der Ruhr seit 1990.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}