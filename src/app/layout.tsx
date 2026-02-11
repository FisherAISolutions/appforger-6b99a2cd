import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FitTrackProv2",
  description: "Web companion for FitTrackProv2 mobile app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 antialiased">{children}</body>
    </html>
  );
}
