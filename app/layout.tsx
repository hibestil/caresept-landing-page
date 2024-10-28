import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { LanguageProvider } from '@/hooks/language-provider';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Caresept: Advanced AI powered CRM',
  description:
    'Caresept is an advanced AI powered CRM that helps businesses automate customer interactions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <LanguageProvider>
            <main>{children}</main>
          </LanguageProvider>
      </body>
    </html>
  );
}
