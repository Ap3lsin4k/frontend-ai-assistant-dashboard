import Image from "next/image";
import { FiSearch, FiBell, FiHelpCircle } from "react-icons/fi";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Image
          src="/logo.png"
          alt="Logo"
          width={40}
          height={40}
          className="logo"
        />
        <div className="header-right">
          <div className="search-container">
            <FiSearch className="search-icon" />
            <input type="text" placeholder="Search" className="search-bar" />
          </div>
          <button className="notification-btn">
            <FiBell />
          </button>
          <button className="help-btn">
            <FiHelpCircle />
          </button>
          <div className="user-profile">
            <span>Lucy</span>
            <Image src="/avatar.png" alt="Avatar" height={30} width={30} />
          </div>
        </div>
      </div>
    </header>
  );
}
