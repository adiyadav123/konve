import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { Analytics } from "@vercel/analytics/react"

import '@stream-io/video-react-sdk/dist/css/styles.css';
import 'react-datepicker/dist/react-datepicker.css';

import { Toaster } from "@/components/ui/toaster"


const inter = Inter({ subsets: ["latin"] });
const APP_NAME = "Konve";
const APP_DEFAULT_TITLE = "A video conferencing app";
const APP_TITLE_TEMPLATE = "%s - Konve";
const APP_DESCRIPTION = "Video conferencing app built with Next.js, Stream SDK, and Clerk";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider 
      appearance={{
        layout: {
          logoImageUrl: '/icons/logo.svg',
          socialButtonsVariant: 'iconButton'
        },
        variables: {
          colorText: '#fff',
          colorPrimary: "#0E78F9",
          colorBackground: "#1c1f2e",
          colorInputBackground: "#252a41",
          colorInputText: "#fff",
        }
      }}
      >
      <body className={`${inter.className} bg-dark-2`}>{children}
      <Toaster />
      <Analytics />
      </body>
     
    </ClerkProvider>
    </html>
  );
}

export const viewport: Viewport = {
  themeColor: "#000000",
};