import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AgeGate from '@/components/AgeGate';

export const metadata: Metadata = {
  title: 'BEST CONTENT | Curated, discreet, unforgettable',
  description: 'Explore a premium, discreet collection. Private product enquiries are handled through Telegram.',
  robots: { index: false, follow: false }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt"><body><Header />{children}<Footer /><AgeGate /></body></html>;
}
