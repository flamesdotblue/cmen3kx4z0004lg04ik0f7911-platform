import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AcmeCloud – Modern SaaS Boilerplate',
  description: 'Clean SaaS landing with pricing and simple auth.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
          <nav className="container-responsive flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand-600 text-white">A</span>
                AcmeCloud
              </Link>
              <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
                <Link href="/pricing" className="hover:text-gray-900">Pricing</Link>
                <Link href="#features" className="hover:text-gray-900">Features</Link>
                <Link href="#faq" className="hover:text-gray-900">FAQ</Link>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/auth" className="btn btn-secondary h-9 px-4 text-sm">Sign in</Link>
              <Link href="/pricing" className="btn btn-primary h-9 px-4 text-sm">Get started</Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="border-t mt-24">
          <div className="container-responsive py-10 text-sm text-gray-600 flex items-center justify-between">
            <p>© {new Date().getFullYear()} AcmeCloud. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-gray-900">Privacy</Link>
              <Link href="#" className="hover:text-gray-900">Terms</Link>
              <Link href="#" className="hover:text-gray-900">Docs</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
