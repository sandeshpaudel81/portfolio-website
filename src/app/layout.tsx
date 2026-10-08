import type { Metadata } from "next";
import '@/src/app/globals.css';

export const metadata: Metadata = {
  title: "Sandesh Prasad Paudel | AI Researcher",
  description:
    "Sandesh Prasad Paudel: Data Scientist and AI Researcher. Explore my research, projects, and publications in the field of Artificial Intelligence.",
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