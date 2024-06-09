import type { Metadata } from "next";
import "./globals.scss";
import SideBar from "@/components/SideBar/SideBar";
import Header from "@/components/Header/Header";

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
        <Header />
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
