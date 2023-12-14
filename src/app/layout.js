import ThemeRegistry from '@/components/ThemeRegistry';
import './globals.css';
import { inter, poppins } from './font';

export const metadata = {
  title: 'The Best Platform IOT Solution | Antares',
  description: "Find the most complete and effective IoT solutions in Antares, Telkom Indonesia's IoT platform with complete features for various IoT business needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${inter.variable} ${poppins.variable} `}>
      <body>
        <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
