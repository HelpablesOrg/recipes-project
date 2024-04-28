import React, { useState } from "react";
import "./home.css";
import Header from "../components/Header/header";
import ExploreMenu from "../components/ExploreMenu/ExploreMenu";
const Home = () => {
  const [category, setCategory] = useState["All"];
  return (
    <div className="">
      <Header />
      <ExploreMenu category={category} setCategory={"setCategory"} />
    </div>
  );
};
export default Home;
