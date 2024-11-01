import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leistungen - Elektroinstallationen, Sicherheitstechnik & Smart Home',
  description: 'Professionelle Elektroinstallationen, moderne Sicherheitstechnik und innovative Smart Home Lösungen von Elektro Schiel in Mülheim an der Ruhr.',
  openGraph: {
    title: 'Leistungen - Elektro Schiel',
    description: 'Professionelle Elektroinstallationen, moderne Sicherheitstechnik und innovative Smart Home Lösungen.',
  },
};

export default function LeistungenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}