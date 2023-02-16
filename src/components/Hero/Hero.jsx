import React from "react";
import css from "./Hero.module.css";
import Navbar from "../Navbar/Navbar";
import img from "../../images/people.png";
import { AiOutlineSearch } from "react-icons/ai";
import Slider from "../Slider/Slider";

const Hero = () => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <Navbar />
        <div className={css.contents}>
          <div className={css.content}>
            <h5>Innovative solution for sourcing candidates</h5>
            <h2>
              Help us find <b>the missing puzzle,</b> <br />
              <b>get rewarded</b> properly.
            </h2>
            <div className={css.searchBox}>
              <input type="text" placeholder="Keyword, job title or company" />
              <div className={css.icon}>
                <AiOutlineSearch />
              </div>
            </div>
          </div>
          <div className={css.img}>
            <img src={img} alt="people" />
          </div>
        </div>
      </div>

      <div className={css.slider}>
        <Slider />
      </div>
    </div>
  );
};

export default Hero;
