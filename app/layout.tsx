import Navegacion from '@components/Nav/Navegacion'
import '@styles/globales.css'

export const metadata = {
  title: 'Sitio de imagenes y videos de stock',
  description: 'Sitio de imagenes y videos de stock',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body >
        <main>
          <Navegacion/>
          {children}
        </main>
      </body>
    </html>
  )
}
