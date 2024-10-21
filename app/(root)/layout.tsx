import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'

interface Props {
    children: React.ReactNode
}

function RootLayout(
    { children }: Props
) {
  return (
    <main className='w-full h-full'>
        <Navbar />
        {children}
        <Footer />
    </main>
  )
}

export default RootLayout