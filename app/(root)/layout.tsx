import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next'
import React, { ReactNode } from 'react'


export const metadata: Metadata = {
  title: "Konve - Video Conferencing App",
  description: "Video conferencing app built with Next.js, Stream SDK, and Clerk",
  icons: {
    icon:'/icons/logo.svg'
  },
  }


const RootLayout = ({ children } : { children: ReactNode }) => {
  return (
    <main>
        <StreamVideoProvider>
          {children}
        </StreamVideoProvider>
    </main>
  )
}

export default RootLayout