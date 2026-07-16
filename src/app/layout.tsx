import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Gibran Rais Hilmy Iskandar | Developer Portfolio",
  description: "Personal portfolio website of Gibran Rais Hilmy Iskandar, an Informatics student at UDINUS interested in Mobile, Web, and Backend development.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans flex flex-col min-h-screen bg-bg text-text-primary antialiased`}
      >
        <ThemeProvider>
          <div className="relative min-h-screen flex flex-col overflow-x-hidden w-full">
            {/* Nebula Ambient Glow Backgrounds */}
            <div className="absolute top-[10%] left-[-15%] w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-primary-700/5 dark:bg-primary-500/5 blur-[80px] sm:blur-[120px] pointer-events-none animate-float-slow -z-10" />
            <div className="absolute top-[40%] right-[-10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-purple-700/5 dark:bg-purple-500/5 blur-[90px] sm:blur-[130px] pointer-events-none animate-float-slower -z-10" />
            <div className="absolute bottom-[20%] left-[10%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full bg-blue-700/5 dark:bg-blue-500/5 blur-[70px] sm:blur-[100px] pointer-events-none animate-float-slow -z-10" />

            <Navbar />
            <main className="flex-grow relative z-10">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
