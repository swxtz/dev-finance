import NextAuthSessionProvider from "@/providers/sessionProvider";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ToastContainer } from "react-toastify";

import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/providers/theme-provider";
import { ReactQueryProvider } from "@/providers/react-query";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/toaster";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev.Finance",
  description: "Gerencie suas finanças de forma simples e prática.",
  metadataBase: new URL("https://dev-finance-pi-six.vercel.app/"),

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://dev-finance-pi-six.vercel.app/",
    title: "Dev.Finance",
    description: "Gerencie suas finanças de forma simples e prática.",
    images: [
      {
        url: "https://dev-finance-pi-six.vercel.app/api/og",
        width: 1280,
        height: 720,
        alt: "Dev-Finance",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
    children: React.ReactNode;
}) {
  return (
  // biome-ignore lint/a11y/useValidLang: <explanation>
    <html lang="pt-br">
      <body
        className={`${roboto.className} min-h-screen scrollbar scrollbar-thumb-neutral-900 scrollbar-track-neutral-800`}
      >
        <NextAuthSessionProvider>
          <ReactQueryProvider>
            <ThemeProvider attribute="class" defaultTheme="system">
              {children}
              <Analytics />
              <SpeedInsights />
              <ToastContainer
                autoClose={5000}
                hideProgressBar={false}
                theme="dark"
              />
              <Toaster />
              {/* <Footer /> */}
            </ThemeProvider>
          </ReactQueryProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
