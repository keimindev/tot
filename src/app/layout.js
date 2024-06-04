import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from "./providers"
import RecoilRootWrapper from '@/recoil/recoilRoot';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'T.O.T(Trace Of Time)',
  description: 'T.O.T.1.0.0  madeby MIN',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='light'>
      <body className={inter.className}>
        <Providers>
            <RecoilRootWrapper>
                {children}
            </RecoilRootWrapper>
        </Providers>
      </body>
    </html>
  )
}
