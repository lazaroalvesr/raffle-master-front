import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from 'next/font/google'
import { Providers } from "./hooks/providers";

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900']
});

export const metadata: Metadata = {
  title: "Rifa Flow",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="shortcut icon" href="/img/icons/FavIcon.svg" type="image/png" />
      </head>
      <body className={roboto.className}>
          <Providers>
            {children}
          </Providers>
      </body>
    </html>
  );
}
