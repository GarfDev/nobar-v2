import { Metadata } from "next";
import futural from "../../public/fonts/futural";
import "./globals.css";

export const metadata: Metadata = {
  title: "NObar - a modern cocktail in Da Lat",
  description: "...",
};

export default function RootLayout({ children, params }: any) {
  return (
    <html lang={params.lang}>
      <body className={futural.className}>{children}</body>
    </html>
  );
}
