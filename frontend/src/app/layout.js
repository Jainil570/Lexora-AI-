import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "LEXORA | Legal Clarity for Indian Startups",
  description: "Generate investor-safe NDAs, Founder Agreements, and Employment Contracts in minutes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-black text-white font-body-sm min-h-screen">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
