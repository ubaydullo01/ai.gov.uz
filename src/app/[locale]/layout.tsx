import "@/assets/styles/globals.css";
import { AIAssistant, AnimatePage, Footer, Header } from "@/components/layout";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { Geist, Geist_Mono } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Development Website Design",
  description: "AI Development Website Design Desc",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      data-scroll-behavior="smooth"
    >
      <body>
        <NextTopLoader
          height={3}
          color="#2299DD"
          zIndex={1600}
          crawl
          speed={200}
        />
        <NextIntlClientProvider>
          <Header />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <AnimatePage>{children}</AnimatePage>
          </main>
          <Footer />
          <AIAssistant currentLanguage={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
