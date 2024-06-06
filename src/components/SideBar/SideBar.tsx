"use client";

import { usePathname } from "next/navigation";
import { IoCall } from "react-icons/io5";
import { RiDashboardFill } from "react-icons/ri";
import { SiChatbot } from "react-icons/si";
import "./SideBar.scss";
import Link from "next/link";

export default function SideBar() {
  const pathname = usePathname();
  return (
    <nav className="side-bar_nav">
      <Link
        href="/"
        className={`nav-entry ${pathname === "/" ? "current" : ""}`}
      >
        <RiDashboardFill />
        <p>Dashbord</p>
      </Link>
      <Link
        href="/calls"
        className={`nav-entry ${pathname === "/calls" ? "current" : ""}`}
      >
        <IoCall />
        <p>Calls</p>
      </Link>

      <Link
        href="/chatbot"
        className={`nav-entry ${pathname === "/chatbot" ? "current" : ""}`}
      >
        <SiChatbot />
        <p>Chatbot</p>
      </Link>
    </nav>
  );
}
