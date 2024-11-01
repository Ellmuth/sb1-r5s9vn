import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AGB - Elektro Schiel',
  description: 'Allgemeine Geschäftsbedingungen von Elektro Schiel.',
};

export default function AGBLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}