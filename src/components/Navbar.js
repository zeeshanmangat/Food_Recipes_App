import { Link, useLocation } from "react-router-dom";

import { useState } from "react";
import Sidebar from "./Sidebar";

import {
  faHome,
  faList,
  faCog,
  faSignIn,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(true);
  const links = [
    {
      name: "Home",
      path: "/",
      icon: faHome,
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: faList,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: faCog,
    },
    {
      name: "Contact",
      path: "/Contact",
      icon: faSignIn,
    },
  ];
  function closeSidebar() {
    setShowSidebar(false);
  }
  return (
    <>
      <div className=" navbar container">
        <Link to="/" className="logo">
          KABAB &
          <span>
            {" "}
            MAHALI <sup>RESTAURANT</sup>
          </span>
        </Link>
        <div className="nav_link">
          {links.map((link) => (
            <Link
              className={location.pathname === link.path ? "active" : ""}
              to={link.path}
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className={showSidebar ? "sidebar_btn active" : "sidebar_btn"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSidebar && <Sidebar close={closeSidebar} links={links} />}{" "}
    </>
  );
};
export default Navbar;
