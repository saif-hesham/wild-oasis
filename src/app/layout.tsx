import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Josefin_Sans } from 'next/font/google';
import Header from '../components/Header';
import './globals.css';

const josefin = Josefin_Sans({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: {
    template: '%s - Wild Oasis',
    default: 'Welcome - Wild Oasis',
  },
  description:
    'A luxurious hotel that offers multiple cabins in an oasis in the middle of the wild',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 flex flex-col antialiased`}
      >
        <Header />
        <div className='flex-1 px-8 py-12 grid'>
          <main className='max-w-7xl mx-auto w-full'>{children}</main>
        </div>
      </body>
    </html>
  );
}
