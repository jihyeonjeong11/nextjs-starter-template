import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import NextTopLoader from "nextjs-toploader";
import { RootProvider } from "fumadocs-ui/provider";
import { BreakpointOverlay } from "@/components/breakpoint-overlay";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Placeholder App",
  description: "Placeholder service for NextJS showcases",
  //openGraph:
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RootProvider>
          {" "}
          <NextTopLoader />
        </RootProvider>
        {children}
        <Toaster />
        <BreakpointOverlay />
      </body>
    </html>
  );
}
