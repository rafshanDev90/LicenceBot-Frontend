import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
