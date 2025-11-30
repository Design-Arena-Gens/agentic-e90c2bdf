export const metadata = {
  title: "Hu",
  description: "A tiny playful page deployed on Vercel"
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
