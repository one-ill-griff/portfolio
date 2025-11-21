import './globals.css';
import { ReactNode } from 'react';
import Navbar from './components/Navbar';
import { Providers } from './providers';

export const metadata = {
  title: "Griffin O'Neill — Portfolio",
  description: "Android dev • Data • GIS • Fitness tech",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-900 text-white transition-colors">
        <Providers>
          <Navbar />
          <main className="w-full">{children}</main>
          <footer className="text-center py-10 text-sm bg-gray-900 text-white">
            © {new Date().getFullYear()} Griffin O'Neill
          </footer>
        </Providers>
      </body>
    </html>
  );
}