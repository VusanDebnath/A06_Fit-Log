import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { PlanProvider } from "../context/PlanContext";

// Inter font (shadharon lekhar jonno)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Oswald font (boro heading er jonno)
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
      <body
        className="flex min-h-screen flex-col"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        {/* PlanProvider er bhetore thaka shob kichu common box er data pabe */}
        <PlanProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </PlanProvider>
      </body>
    </html>
  );
}
