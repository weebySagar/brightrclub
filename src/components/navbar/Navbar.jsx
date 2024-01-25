import React, { useState } from "react";

import Logo from "@images/BrightR.Club.svg";
import SearchIcon from "@images/search.svg";
import ArrowDown from "@images/caret-down.svg";
import AccountImg from "@images/account.png";
import "@styles/navbar/_navbar.scss";

const Navbar = () => {
  const navLinks = ["home", "browse library", "blog", "", "my books"];
  const mobileNavLinks = ["home", "browse library", "blog", "my books"];

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <nav>
      <div className="navbar-wrapper search">
        <div className="nav-logo">
          <img src={Logo} alt="" />
        </div>
        <div className="nav-search d-none d-sm-block">
          <div className="nav-input">
            <img src={SearchIcon} alt="" />
            <input
              type="text"
              placeholder="Search by author, title, age, genre..."
            />
          </div>
        </div>
      </div>
      <div className="navbar-wrapper links">
        <div className={`nav-links d-none d-xl-flex align-items-center`}>
          {navLinks.map((links) => (
            <a href="/" className="links" key={links}>
              {links}
            </a>
          ))}
          <div className="delivery-link">
            <a href="#">
              <span>Next Delivery</span>
              <br />
              Mon, 15 Jan
            </a>
            <img src={ArrowDown} alt="arrow down" />
          </div>
          <div className="account-link">
            <img src={AccountImg} alt="Account" />
          </div>
        </div>
        <div
          className={`nav-links-mobile ${
            showMobileMenu ? "show" : ""
          } d-flex d-xl-none flex-column`}
        >
          {mobileNavLinks.map((links) => (
            <a href="#" className="links" key={links}>
              {links}
            </a>
          ))}
        </div>
        <div className="d-block d-xl-none account-link">
          <img
            src={AccountImg}
            alt="Account"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
