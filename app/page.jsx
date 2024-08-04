import React from "react";
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import Steps from "@/components/home/Steps";
import Products from "@/components/home/Products";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Steps />
      <Products />
    </>
  );
};

export default HomePage;
