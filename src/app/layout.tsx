import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import SideBar from "@/components/SideBar/SideBar";

export const metadata: Metadata = {
  title: "Sound app",
  description: "created by Vlad_Nasy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <aside>
            <SideBar />
          </aside>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
