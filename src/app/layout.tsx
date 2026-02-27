import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WalletProvider from "@/components/wallet-provider";
import { headers } from "next/headers";
import ClientProviders from "@/components/client-providers";

export const metadata: Metadata = {
  title: "Entrova AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookies = headers().get("cookie");
  const navbarHeight = 80;

  return (
    <html lang="en">
      <body>
        <WalletProvider cookies={cookies}>
          <ClientProviders>
            <Navbar height={navbarHeight} />
            <main>{children}</main>
            <Footer />
          </ClientProviders>
        </WalletProvider>
      </body>
    </html>
  );
}
