"use client";

import { useState } from "react";
import { IoCall, IoHomeOutline } from "react-icons/io5";
import { RiContactsBook2Fill, RiGpsFill, RiGroupFill } from "react-icons/ri";
import { SiChatbot } from "react-icons/si";
import { FiMessageSquare } from "react-icons/fi";
import { GiLifeBuoy } from "react-icons/gi";
import { MdKeyboardArrowRight } from "react-icons/md";
import NavLink from "./NavLink";
import "./SideBar.scss";

export default function SideBar() {
  const [showCallsDropdown, setShowCallsDropdown] = useState(false);

  const toggleCallsDropdown = () => {
    setShowCallsDropdown(!showCallsDropdown);
  };

  return (
    <nav className="side-bar_nav">
      <NavLink path="/">
        <IoHomeOutline />
        <p>Home</p>
      </NavLink>
      <div className=" calls-dropdown">
        <button
          onClick={toggleCallsDropdown}
          className={`nav-entry calls-btn ${showCallsDropdown ? "active" : ""}`}
        >
          <IoCall />
          <p>Calls</p>
          <MdKeyboardArrowRight
            className={`arrow ${showCallsDropdown ? "rotate" : ""}`}
          />
        </button>
        {showCallsDropdown && (
          <div className="dropdown-content">
            <NavLink path="/calls">
              <p>Incoming calls</p>
            </NavLink>
            <NavLink path="/calls/outgoing">
              <p>Outgoing calls</p>
            </NavLink>
          </div>
        )}
      </div>
      <NavLink path="/sms">
        <FiMessageSquare />
        <p>SMS</p>
      </NavLink>
      <NavLink path="/address-book">
        <RiContactsBook2Fill />
        <p>Address Book</p>
      </NavLink>
      <NavLink path="/trusted-group">
        <RiGroupFill />
        <p>Trusted Group</p>
      </NavLink>
      <NavLink path="/allowed-list">
        <RiGroupFill />
        <p>Allowed List</p>
      </NavLink>
      <NavLink path="/location">
        <RiGpsFill />
        <p>Location</p>
      </NavLink>
      <NavLink path="/chatbot">
        <SiChatbot />
        <p>AI Assistant</p>
      </NavLink>
      <NavLink path="/sos">
        <GiLifeBuoy />
        <p>SOS</p>
      </NavLink>
      <div className="nav-entry privacy-legal">
        <p>Privacy & legal</p>
      </div>
    </nav>
  );
}
