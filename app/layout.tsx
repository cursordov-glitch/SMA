import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SuperApp",
    template: "%s | SuperApp",
  },
  description: "The everything app for modern creators and communities.",
  keywords: ["superapp", "social", "videos", "chat", "community"],
  authors: [{ name: "SuperApp Team" }],
  creator: "SuperApp",
  metadataBase: new URL("https://superapp.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://superapp.vercel.app",
    title: "SuperApp",
    description: "The everything app for modern creators and communities.",
    siteName: "SuperApp",
  },
  twitter: {
    card: "summary_large_image",
    title: "SuperApp",
    description: "The everything app for modern creators and communities.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f9fa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0b10" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
