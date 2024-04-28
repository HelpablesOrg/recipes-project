import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  console.log(menu_list);
  return (
    <div className="Explore-Menu" id="Explore-Menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">choose from a diverse menu</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          // console.log("item: ", item.menu_name);
          return (
            <div key={index} className="explore-menu-list-item">
              <img src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr></hr>
    </div>
  );
};
export default ExploreMenu;
