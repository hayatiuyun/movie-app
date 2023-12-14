import { Poppins, Inter  } from 'next/font/google';

export const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
    variable: "--netflix-poppins"
  });

  export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
    variable: "--netflix-inter"
  })