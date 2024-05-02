import React, { useState } from "react";
import "./home.css";
import Header from "../components/Header/header";
import ExploreMenu from "../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../fooddisplay/FoodDisplay";
const Home = () => {
  const [category, setCategory] = useState["All"];
  return (
    <div className="">
      <Header />
      <ExploreMenu category={category} setCategory={"setCategory"} />
      <FoodDisplay category={category}></FoodDisplay>
    </div>
  );
};
export default Home;
