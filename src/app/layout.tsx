import type { Metadata } from "next";
import { Inter } from "next/font/google";
import QueryWrapper from "./QueryWrapper";
import "@/assets/scss/themes.scss";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://hidesk.dev.zetoo.in'),
  title: "Dashboard | Support-Ticket",
  description: "Dashboard contains widgets,react-tables and charts",
  openGraph: {
    title: "Fast and Efficient Support Ticket System",
    description: "Resolve customer issues quickly and easily with our user-friendly support ticket system.",
    url: "https://hidesk.dev.zetoo.in",
    siteName: "Support Ticket",
    images: [
      {
        url: "/support_og.png",
        width: 800,
        height: 600,
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryWrapper>{children}</QueryWrapper>
      </body>
    </html>
  );
}
