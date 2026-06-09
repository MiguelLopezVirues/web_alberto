import type { Metadata } from 'next';
import { Ysabeau, Atkinson_Hyperlegible_Next, Open_Sans } from 'next/font/google';
import { site } from '@/tokens/site';
import './globals.css';

const ysabeau = Ysabeau({
  subsets: ['latin'],
  variable: '--font-ysabeau',
  style: ['normal', 'italic'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

const atkinson = Atkinson_Hyperlegible_Next({
  subsets: ['latin'],
  variable: '--font-atkinson',
  weight: ['400', '500', '600'],
  display: 'swap',
  adjustFontFallback: false,
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`scroll-smooth ${ysabeau.variable} ${atkinson.variable} ${openSans.variable}`}
    >
      <body className="bg-ground text-ink font-body antialiased">
        {children}
      </body>
    </html>
  );
}
