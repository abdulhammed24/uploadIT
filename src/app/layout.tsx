import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import 'react-circular-progressbar/dist/styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: `UploadIT Instagram Hashtag Printer | Rent Instagram Printer for Weddings
      Corporate and Brand events - UploadIT`,
    template: '%s | UploadIT',
  },
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
