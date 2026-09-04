import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Doha Adelrahman | Data Scientist",
  description:
    "Data Scientist focused on data analysis, machine learning, predictive modeling, and transforming complex data into meaningful insights. Portfolio of Doha Adelrahman.",
  keywords: [
    "Doha Adelrahman",
    "Data Scientist",
    "Machine Learning",
    "Data Analysis",
    "Python",
    "AI",
    "Portfolio",
  ],
  authors: [{ name: "Doha Adelrahman" }],
  icons: {
    icon: "/workspaces/Doha/src/app/icon.png/ChatGPT Image Sep 5, 2026, 12_22_58 AM.png",
  },

  openGraph: {
    title: "Doha Adelrahman | Data Scientist",
    description:
      "Turning Data Into Intelligent Solutions. Data Science portfolio showcasing ML projects, data analysis, and AI work.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Doha Adelrahman | Data Scientist",
    description:
      "Turning Data Into Intelligent Solutions. Data Science portfolio.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
