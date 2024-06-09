import { usePathname } from "next/navigation";
import Link from "next/link";
import { ReactNode } from "react";
import "./SideBar.scss";

interface NavLinkProps {
  path: string;
  children: ReactNode;
}

export default function NavLink({ path, children }: NavLinkProps) {
  const pathname = usePathname();
  return (
    <Link
      href={path}
      className={`nav-entry ${pathname === path ? "current" : ""}`}
    >
      {children}
    </Link>
  );
}
