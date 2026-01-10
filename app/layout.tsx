/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TryB4Buy - AI-Powered Virtual Try-On Extension | Try Before You Buy",
  description:
    "TryB4Buy is your AI virtual try-on service. Shop smarter with AI-powered virtual fitting room. Try clothes on yourself before buying on Amazon, Temu, and Lululemon.",
  keywords: [
    "AI try-on",
    "virtual fitting room",
    "try before you buy",
    "AI fashion",
    "Chrome extension",
    "virtual try-on",
    "fashion AI",
  ],
  authors: [{ name: "TryB4Buy" }],
  creator: "TryB4Buy",
  publisher: "TryB4Buy",
  metadataBase: new URL("https://tryb4buy.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tryb4buy.io",
    siteName: "TryB4Buy",
    title: "TryB4Buy - AI-Powered Virtual Try-On Extension",
    description:
      "TryB4Buy is your AI chatbot for virtual try-on. Shop smarter with AI-powered virtual fitting room. Try clothes on yourself before buying.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TryB4Buy - AI Virtual Try-On",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TryB4Buy - AI-Powered Virtual Try-On Extension",
    description:
      "Shop smarter. Try before you buy with AI-powered virtual try-on.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        {/* Structured Data - SoftwareApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "TryB4Buy",
              applicationCategory: "BrowserExtension",
              operatingSystem: "Chrome, Brave, Edge",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "1000",
              },
              description:
                "AI-powered Chrome extension that lets you visualize any outfit on your body instantly while browsing your favorite stores like Amazon, Temu, and Lululemon.",
              url: "https://tryb4buy.io",
              screenshot: "https://tryb4buy.io/screenshot.png",
              softwareVersion: "1.0.0",
              releaseNotes:
                "Initial release with support for Amazon, Temu, and Lululemon",
              featureList: [
                "AI-powered virtual try-on",
                "Body-adaptive fit visualization",
                "Works on Amazon, Temu, Lululemon",
                "Privacy-first design",
                "Instant results",
              ],
            }),
          }}
        />
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TryB4Buy",
              url: "https://tryb4buy.io",
              logo: "https://tryb4buy.io/logo.png",
              description:
                "AI-powered virtual try-on extension for smarter online shopping",
              contactPoint: {
                "@type": "ContactPoint",
                email: "tryon.style.ai@gmail.com",
                contactType: "customer support",
              },
            }),
          }}
        />
        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "TryB4Buy",
              url: "https://tryb4buy.io",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://tryb4buy.io/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} font-display bg-[#050505] text-white overflow-x-hidden selection:bg-[#feca57] selection:text-black antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
