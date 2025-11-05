import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LegalStart - Start Your Business with Confidence",
  description: "Professional business formation services, registered agent support, and compliance solutions for entrepreneurs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
