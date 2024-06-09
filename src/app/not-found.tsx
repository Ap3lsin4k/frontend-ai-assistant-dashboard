import Link from "next/link";
import Image from "next/image";
import "./globals.scss";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <Image
        src="https://i.ibb.co/pLnhYWQ/loading.gif"
        alt="Loading..."
        width={50}
        height={50}
      />
      <p>This page is under development</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
