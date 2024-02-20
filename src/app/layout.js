import { Inter } from 'next/font/google'
import './globals.css'
import RecoilRootWrapper from '@/recoil/recoilRoot';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'T.O.T(Trace Of Time)',
  description: 'T.O.T.1.0.0  madeby MIN',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoilRootWrapper>
          {children}
        </RecoilRootWrapper>
      </body>
    </html>
  )
}
