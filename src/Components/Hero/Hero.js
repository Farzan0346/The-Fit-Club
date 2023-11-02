import React from "react";
import "./Hero.css";
import hero_image from "../../Documents/hero_image.png";
import hero_image_back from "../../Documents/hero_image_back.png";
import heart from "../../Documents/heartrate.png";
import caloriesbar from "../../Documents/caloriesbar.png";
import { motion } from "framer-motion";
const Hero = () => {
  const transition = { type: "tween", duration: 2.5 };
  return (
    <div className="hero-section">
      <div className="hero-left">
        <div className="blur hero-blur left"></div>
        <div className="best-ad">
          <motion.div
            initial={{ left: "238px" }}
            whileInView={{ left: "8px" }}
            transition={transition}
          ></motion.div>
          <p>The best fitness club in the town</p>
        </div>
        <div className="hero-text">
          <p>
            <span className="text-stroke">shape </span>your
          </p>
          <span>ideal body</span>
        </div>
        <span className="tag-line">
          In here we will help you to shape and build your ideal body and live
          up your life to fullest.
        </span>
        <div className="figures">
          <div>
            <span>+ 140</span>
            <span>EXPERT COACHES</span>
          </div>
          <div>
            <span>+ 978</span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span>+ 50</span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn get-started-btn">Get Started</button>
          <button className="btn learn-more-btn">Learn More</button>
        </div>
      </div>
      <div className="hero-right">
        <div className="blur hero-blur right"></div>
        <motion.div
          initial={{ left: "-150px" }}
          whileInView={{ left: "-8px" }}
          transition={transition}
          className="calories"
        >
          <img src={caloriesbar} alt="" />
          <div className="calories-info">
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
        <img className="hero-image" src={hero_image} alt="" />
        <motion.img
          initial={{ left: "5rem" }}
          whileInView={{ left: "1rem" }}
          transition={transition}
          className="hero-image-back"
          src={hero_image_back}
          alt=""
        />

        <motion.div
          initial={{ right: "0.5rem" }}
          whileInView={{ right: "3rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
