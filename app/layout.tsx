import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WIFI MTAANI | Internet that keeps you connected",
  description: "Flexible hotspot and home internet packages from VEKNET TECHNOLOGIES. Get connected with WIFI MTAANI.",
  icons: {
    icon: "/WifiMtaani-logo.png", // Favicon for the browser tab
    apple: "/WifiMtaani-logo.png", // For Apple devices
  },
};

/* Runs before paint: applies the saved theme (or dark by default) so there is no flash of the wrong theme. */
const themeInitScript = `
(function () {
  try {
    var saved = localStorage.getItem('wifi-mtaani-theme');
    if (saved === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}