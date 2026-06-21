import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "RoadRescue – 24/7 Roadside Assistance",
  description: "Fast, reliable roadside assistance available 24/7 nationwide. Tire repair, towing, fuel delivery, battery jump-start and more.",
};

const GA_ID = "G-FGGQMWMMDN";
const AW_ID = "AW-11293874048";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics + Google Ads */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
            gtag('config', '${AW_ID}');
          `}
        </Script>
      </head>
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
