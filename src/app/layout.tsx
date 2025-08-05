import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Highlaŋu",
  description:
    "Highland-Yolŋu Alliance for Maximum Resistance Experience and Maximum Knowledge Preservation. From Gaels to First Nations, the threads were never just fabric. From handwoven legacies to zero-knowledge silk, heritage doesn’t fade, it forks.",
  metadataBase: new URL("https://highlangu.com/"),
  twitter: {
    card: "summary_large_image",
    creator: "@emmajane1313",
    title: "Highlaŋu",
    description:
      "Highland-Yolŋu Alliance for Maximum Resistance Experience and Maximum Knowledge Preservation. From Gaels to First Nations, the threads were never just fabric. From handwoven legacies to zero-knowledge silk, heritage doesn’t fade, it forks.",
  },
  openGraph: {
    title: "Highlaŋu",
    description:
      "Highland-Yolŋu Alliance for Maximum Resistance Experience and Maximum Knowledge Preservation. From Gaels to First Nations, the threads were never just fabric. From handwoven legacies to zero-knowledge silk, heritage doesn’t fade, it forks.",
  },
  robots: {
    googleBot: {
      index: true,
      follow: true,
    },
  },
  creator: "Emma-Jane MacKinnon-Lee",
  publisher: "Emma-Jane MacKinnon-Lee",
  keywords: [
    "Web3",
    "Web3 Fashion",
    "Moda Web3",
    "Open Source",
    "CC0",
    "Emma-Jane MacKinnon-Lee",
    "Open Source LLMs",
    "DIGITALAX",
    "F3Manifesto",
    "digitalax",
    "f3manifesto",
    "syntheticfutures",
    "Women",
    "Life",
    "Freedom",
  ],
  pinterest: {
    richPin: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="selection:bg-mar selection:text-rojo">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://emmajanemackinnonlee.com/#person",
              name: "Emma-Jane MacKinnon-Lee",
              url: "https://emmajanemackinnonlee.com/",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://emmajanemackinnonlee.com/",
              },
              sameAs: [
                "https://emmajanemackinnonlee.com/",
                "https://emmajanemackinnon.com/",
                "https://janefuture.com/",
                "https://emmajane.ai/",
                "https://emmajanemackinnonlee.xyz/",
                "https://emmajanemackinnonlee.net/",
                "https://emmajanemackinnonlee.ai/",
                "https://emmajanemackinnonlee.org/",
                "https://emmajanemackinnonlee-history.com/",
                "https://emmajanemackinnonlee-cc0.com/",
                "https://emmajanemackinnonlee-celtic.com/",
                "https://emmajanemackinnonlee-f3manifesto.com/",
                "https://emmajanemackinnonlee-digitalax.com/",
                "https://emmajanemackinnonlee-runway.com/",
                "https://icoinedweb3fashion.com/",
                "https://syntheticfutures.xyz/",
                "https://web3fashion.xyz/",
                "https://emancipa.xyz/",
                "https://highlangu.com/",
                "https://digitalax.xyz/",
                "https://cc0web3fashion.com/",
                "https://cc0web3.com/",
                "https://cuntism.net/",
                "https://dhawu.com/",
                "https://casadeespejos.com/",
                "https://emancipa.net/",
                "https://dhawu.emancipa.xyz/",
                "https://highlangu.emancipa.xyz/",
                "https://twitter.com/emmajane1313",
                "https://medium.com/@casadeespejos",
                "https://www.flickr.com/photos/emmajanemackinnonlee/",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
