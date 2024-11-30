import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Sidebar } from '@/components/sidebar';
import { ThemeToggle } from '@/components/theme-toggle';
import { Suspense } from 'react';
import { LoadingProvider } from '@/components/loading-provider';
import { sharedMetadata } from '@/lib/shared-metadata';
import { OkAsciiArt } from '@/components/ok-ascii-art';
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
});

export const metadata: Metadata = {
  metadataBase: new URL(sharedMetadata.openGraph.url),
  robots: {
    index: true,
    follow: true
  },
  title: {
    default: sharedMetadata.title,
    template: `%s — ${sharedMetadata.title}`
  },
  description: sharedMetadata.description,
  keywords: sharedMetadata.keywords,
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.png',
  },
  openGraph: sharedMetadata.openGraph,
  alternates: {
    canonical: '/'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@osmkoc',
    creator: '@osmkoc',
  },
  other: {
    pinterest: 'nopin'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetBrainsMono.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <OkAsciiArt />
          <Suspense>
            <LoadingProvider />
          </Suspense>
          <div className="flex min-h-screen">
            <Suspense>
              <Sidebar />
            </Suspense>
            <div className="flex-1 pl-0 md:pl-64">
              <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
                <div className="flex justify-end mb-16">
                  <ThemeToggle />
                </div>
                <main>{children}</main>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}