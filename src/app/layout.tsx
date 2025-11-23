import type { Metadata } from "next";
import { League_Spartan, Shrikhand } from "next/font/google";
import "./globals.css";

const shrikhandSans = Shrikhand({
  variable: "--font-shrikhand-sans",
  subsets: ["latin"],
  weight: "400"
})

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "8.2",
  description: "This is 8.2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${shrikhandSans.variable} ${leagueSpartan.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
