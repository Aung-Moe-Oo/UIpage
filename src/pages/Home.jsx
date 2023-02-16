import React from "react";
import css from "./Home.module.css";
import Hero from "../components/Hero/Hero";

const Home = () => {
  return (
    <div className={css.container}>
      <Hero />
    </div>
  );
};

export default Home;
