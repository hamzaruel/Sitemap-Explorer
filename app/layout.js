import './globals.css'

export const metadata = {
  title: 'Sitemap Explorer',
  description: 'A simple Sitemap Explorer with App Router, MongoDB, and shadcn/ui',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}