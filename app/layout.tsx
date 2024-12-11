import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartProvider } from '@/contexts/CartContext'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "OJA - Online Shopping",
  description: "Your one-stop shop for all products",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}

