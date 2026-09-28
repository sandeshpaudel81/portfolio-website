import type { Metadata } from "next";
import '@/src/app/globals.css';

export const metadata: Metadata = {
  title: "Sandesh Paudel | Portfolio",
  description:
    "Portfolio of Sandesh Paudel – Data Science, Full Stack Development, and Software Engineering projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
