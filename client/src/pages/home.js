import React from "react";
import Hero from "../components/home/Hero";
import Categories from "../components/home/categories";
import Choices from "../components/home/choices";

const Home = () => {
  return (
      <div className="px-[120px]">
        <Hero />
        <Categories />
        <Choices />
      </div>

  );
};

export default Home;
