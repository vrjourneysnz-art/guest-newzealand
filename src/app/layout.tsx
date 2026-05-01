import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://guestnewzealand.com"),
  title: "New Zealand Travel Planning | Guest New Zealand",
  description:
    "Plan your dream New Zealand holiday with Guest New Zealand. Personalised itineraries, expert travel planning, and authentic New Zealand experiences with 30+ years of local expertise.",
  openGraph: {
    type: "website",
    siteName: "Guest New Zealand",
    locale: "en_NZ",
    url: "https://guestnewzealand.com",
    title: "New Zealand Travel Planning | Guest New Zealand",
    description:
      "Plan your dream New Zealand holiday with Guest New Zealand. Personalised itineraries, expert travel planning, and authentic New Zealand experiences with 30+ years of local expertise.",
  },
  twitter: {
    card: "summary_large_image",
    title: "New Zealand Travel Planning | Guest New Zealand",
    description:
      "Plan your dream New Zealand holiday with Guest New Zealand. Personalised itineraries, expert travel planning, and authentic New Zealand experiences with 30+ years of local expertise.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-51JRPT08HT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-51JRPT08HT');
          `}
        </Script>
      </head>
      <body className={`${openSans.variable} font-sans antialiased text-dark`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
