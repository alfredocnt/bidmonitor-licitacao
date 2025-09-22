import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BidMonitor",
  description: "Monitor government opportunities intelligently",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} font-primary bg-background-primary text-text-primary min-h-screen`}>
        {children}
      </body>
    </html>
  )
}