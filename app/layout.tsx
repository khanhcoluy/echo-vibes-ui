import Sidebar from '@/components/Sidebar';
import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

import './globals.css';

const inter = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Echo vibes',
  description: 'A music app for everyone',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          `flex justify-between p-2 max-h-screen`,
          inter.className
        )}
      >
        <Sidebar />
        <div className="w-full bg-primary h-screen ml-2">{children}</div>
      </body>
    </html>
  );
}
