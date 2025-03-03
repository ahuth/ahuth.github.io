import type {Metadata} from 'next';
import type {ReactNode} from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Andrew Huth',
  description:
    'Software engineer, working mostly with Accessibility, React, TypeScript, NextJS, Remix, and Tailwind.',
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({children}: Props) {
  return (
    <html lang="en">
      <body className="mx-auto min-h-screen max-w-3xl bg-black font-sans text-xl font-light text-white sm:py-6">
        {children}
      </body>
    </html>
  );
}
