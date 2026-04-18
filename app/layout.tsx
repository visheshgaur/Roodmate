

import type { Metadata } from "next";
import { Poppins , Baloo_2 } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Header } from "@/components/shared/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const baloo = Baloo_2({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-baloo',
})
export const metadata: Metadata = {
  title: "ROODMATES",
  description: "Find your perfect roommate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`min-h-full flex flex-col ${poppins.className} ${baloo.variable}`}>
        <ClerkProvider>
          <Header />
          <main className="pt-15">{children}</main>
        </ClerkProvider>

        <script src="https://checkout.razorpay.com/v1/checkout.js" />
      </body>
    </html>
  );
}
