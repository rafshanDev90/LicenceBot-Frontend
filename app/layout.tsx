import type { Metadata } from 'next';
import './globals.css';
import { GeistSans } from 'geist/font/sans'; // Import from the package
import { GeistMono } from 'geist/font/mono';
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: 'LicenceBot - E-commerce Intelligence Platform',
  description: 'Manage all your e-commerce stores in one place with LicenceBot. Auto license delivery, analytics dashboard, and enterprise-grade security.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn("antialiased", GeistSans.variable, GeistMono.variable)}>
      <body className="min-h-screen bg-background font-sans">
        {children}
      </body>
    </html>
  )
}
