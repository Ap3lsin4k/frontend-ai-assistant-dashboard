import "./page.scss";
import {
  FaMobile,
  FaBatteryQuarter,
  FaWifi,
  FaMapMarkerAlt,
  FaUser,
  FaCalendarPlus,
} from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <div className="App">
      <div className="card device-info">
        <h2>Device Info</h2>
        <ul>
          <li>
            <FaMobile /> Android, Build: 4.1.0
          </li>
          <li>
            <FaMapMarkerAlt /> UID: 00044492597654
          </li>
          <li>
            <FaBatteryQuarter /> Battery: 27%
          </li>
          <li>
            <FaWifi /> WiFi: On
          </li>
          <li>
            <FaMapMarkerAlt /> Location tracker: On
          </li>
        </ul>
      </div>

      <div className="card card account-info">
        <h2>Account Info</h2>
        <p>
          <FaUser /> Plan: Premium
        </p>
        <p>
          <FaMapMarkerAlt /> Account ID: 1
        </p>
        <p>
          <FaCalendarPlus /> Subscription: 12/31/2019 12:00 AM
        </p>
        <button>Extend Subscription</button>
      </div>

      <div className="card cell-phone-activity">
        <h2>Cell Phone Activity</h2>
        <p>
          There is no data to be displayed. Please wait while data will be
          processed.
        </p>
      </div>
      <div className="card sync-method">
        <h2>Synchronization method:</h2>
        <button>Dont Sync</button>
        <button>Wi-Fi Only</button>
        <button>All Connections</button>
      </div>
      <div className="card most-calling-contacts">
        <h2>10 Most Calling Contacts</h2>
        <div className="contacts-list">
          <div className="contact">
            <p>+1770-2269-131</p>
            <div className="diagram" style={{ width: "120px" }}></div>
          </div>
          <div className="contact">
            <p>+156-0223-7131</p>
            <div className="diagram" style={{ width: "65px" }}></div>
          </div>
          <div className="contact">
            <p>+167-0334-3132</p>
            <div className="diagram" style={{ width: "34px" }}></div>
          </div>
          {/* Add more contacts as needed */}
        </div>
        <button>See More</button>
      </div>
      <div className="card locations">
        <h2>Locations</h2>
        <p>102 Berwick St, London W1F 0PH, UK</p>
        <div className="map">
          <Image
            src="https://i.ibb.co/2YwdjS1/map.png"
            alt="Map"
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: "cover", // cover, contain, none
            }}
          />
        </div>
        <button>See More</button>
      </div>
    </div>
  );
}
