import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Happy While Away - Pet Care App",
  description: "Keep your pets happy while you're away with live camera, voice calls, and treat drops",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-cream min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}