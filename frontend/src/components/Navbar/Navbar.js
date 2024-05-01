import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import ExploreMenu from "../ExploreMenu/ExploreMenu";
export default function Navbar() {
  const [menu, setMenu] = useState("Home");
  return (
    <div class="Navbar">
      <img src={assets.logo} alt="" className="logo" />
      <img src={assets.logout_icon} alt="" className="logout_icon" />
      <img src={assets.header_img} alt="" className="header_img" />
      <img src={assets.rating_starts} alt="" className=" rating_starts" />
      <img src={assets.add_icon_green} alt="" className="add_icon_green" />
      <img src={assets.add_icon_white} alt="" className="add_icon_white" />
      <img src={assets.remove_icon_red} alt="" className="remove_icon_red" />
      <img src={assets.app_store} alt="" className="app_store" />
      <ul className="navbar-menu">
        <li onClick={() => "Home"} className={menu === "Home" ? "active" : ""}>
          Home
        </li>
        <li onClick={() => "Menu"} className={menu === "Menu" ? "active" : ""}>
          Menu
        </li>
        <li
          onClick={() => "Setting"}
          className={menu === "Setting" ? "active" : ""}
        >
          Setting
        </li>
        <li
          onClick={() => "Contact-us"}
          className={menu === "Contact-us" ? "active" : ""}
        >
          Contact-us
        </li>
      </ul>
      <div className="navbar-right" />
      <img src={assets.search_icon} alt="" />
      <div className="navbar-search-icon" />
      <img src={assets.basket_icon} alt="" />
      <div className="dot" />   
      <button>sign in</button>
      <ExploreMenu />;
    </div>
  );
}
