import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import ExploreMenu from "../ExploreMenu/ExploreMenu";
export default function Navbar() {
  return (
    // <ul>
    //   <li>
    //     <a class="active" href="#home">
    //       Home
    //     </a>
    //   </li>
    //   <li>
    //     <a href="#news">Recipes</a>
    //   </li>
    //   <li>
    //     <a href="#contact">Settings</a>
    //   </li>
    // </ul>
    <div class="Navbar">
      <img src={assets.logo} alt="" className="logo" />
      <img src={assets.logout_icon} alt="" className="logout_icon" />
      <img src={assets.menu_1} alt="" className="menu_1" />
      <img src={assets.menu_2} alt="" className="menu_2" />
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Menu</li>
        <li>Setting</li>
        <li>Contact-us</li>
      </ul>
      <div className="=navbar-right">
        <ExploreMenu />
      </div>
    </div>
  );
}
