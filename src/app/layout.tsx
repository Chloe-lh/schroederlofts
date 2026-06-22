import type { Metadata } from "next";
import { Story_Script, Inter, Geist_Mono  } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer"
const storyScript = Story_Script({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const interFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Lofts",
  description: "Bed and breakfast in the Kootenays",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${storyScript.variable} ${interFont.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col">
           <NavBar/>

        <main className="flex-1">
          {children}
        </main>

        <Footer/>



      </body>
      
    </html>
  );
}
