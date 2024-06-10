"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import "./globals.scss";

export default function NotFound() {
  const pathname = usePathname();
  return (
    <div className="not-found-container">
      <Image
        src="https://i.ibb.co/pLnhYWQ/loading.gif"
        alt="Loading..."
        width={50}
        height={50}
        className="loading-gif"
      />
      <p>
        The <b>{pathname}</b> page is under development
      </p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
