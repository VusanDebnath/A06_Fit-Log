import { Inter, Oswald } from "next/font/google";
import "./globals.css";

// Inter font (For general)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Oswald font (heading)
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata = {
  title: "FitLog — Workout Library",
  description: "Pick a lift, lock it into today's plan.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable}`}
      suppressHydrationWarning
    >
      <body style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
