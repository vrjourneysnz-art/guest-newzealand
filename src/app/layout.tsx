import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://guestnewzealand.com"),
  title: {
    default: "New Zealand Travel Planning | Guest New Zealand",
    template: "%s",
  },
  description:
    "Plan your dream New Zealand holiday with Guest New Zealand. Personalised itineraries, expert travel planning, and authentic New Zealand experiences with 30+ years of local expertise.",
  keywords: [
    "New Zealand travel",
    "New Zealand holiday packages",
    "New Zealand itinerary",
    "honeymoon New Zealand",
    "family holiday New Zealand",
    "Australia and New Zealand tours",
    "New Zealand travel planning",
    "Guest New Zealand",
  ],
  authors: [{ name: "Michael Nees" }],
  creator: "Guest New Zealand",
  publisher: "Guest New Zealand",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Guest New Zealand",
    locale: "en_NZ",
    url: "https://guestnewzealand.com",
    title: "New Zealand Travel Planning | Guest New Zealand",
    description:
      "Plan your dream New Zealand holiday with Guest New Zealand. Personalised itineraries, expert travel planning, and authentic New Zealand experiences with 30+ years of local expertise.",
    images: [
      {
        url: "/images/hero-nz.jpg",
        width: 1200,
        height: 630,
        alt: "Guest New Zealand — personalised New Zealand holiday planning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "New Zealand Travel Planning | Guest New Zealand",
    description:
      "Plan your dream New Zealand holiday with personalised itineraries and 30+ years of local expertise.",
    images: ["/images/hero-nz.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Guest New Zealand",
    url: "https://guestnewzealand.com",
    logo: "https://guestnewzealand.com/images/logo.jpg",
    description:
      "Personalised New Zealand and Australia holiday planning with 30+ years of local expertise. Specialising in lifestyle, family, honeymoon, unique, South Island, and Australia/New Zealand itineraries.",
    founder: { "@type": "Person", name: "Michael Nees" },
    sameAs: [
      "https://facebook.com/GUESTNZ",
      "https://nz.linkedin.com/in/michaelnees",
    ],
    areaServed: [
      { "@type": "Country", name: "New Zealand" },
      { "@type": "Country", name: "Australia" },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
