import './globals.css';
import { ReactNode } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'My Tailwind Site',
  description: 'Next.js va Tailwind bilan yaratilgan sayt.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="uz">
      <body className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
        <Header /> 
        <main className="flex-grow container mx-auto p-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
