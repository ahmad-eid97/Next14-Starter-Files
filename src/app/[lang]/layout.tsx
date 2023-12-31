import { cookies } from 'next/headers';
//== Components
import { Toaster } from 'react-hot-toast';
import { Navbar, Footer } from '@/components';
import StoreProvider from '@/store/provider';

import type { Metadata } from 'next';
//== Styles
import "@/styles/global.scss";

type PageProps = {
  children: React.ReactNode
  params: {
    lang: string
  }
}
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children, params: { lang } }: PageProps) {
  const Cookies = cookies();

  return (
    <html lang={lang} id={lang}>
      <body className={cookies().get('your-mode')?.value || 'light'}>
        <StoreProvider>
          <Toaster
            position="top-center"
            gutter={8}
            toastOptions={{
              duration: 5000
            }}
          />
          <Navbar />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  )
}
