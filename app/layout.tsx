import Navegacion from "@components/Nav/Navegacion";
import "@styles/globales.css";
import { outfit } from "./fonts/fonts";

export const metadata = {
  title: "Visual Blend | Imágenes y Videos de Stock",
  description: "Las mejores fotos y videos de stock",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${outfit.className} bg-slate-50`}>
        <main>
          <Navegacion />
          {children}
        </main>
      </body>
    </html>
  );
}
