import React, { useState } from "react";
import { testimonialsData } from "../Data/testimonials";
import "./Testimonials.css";
import leftArrow from "../../Documents/leftArrow.png";
import rightArrow from "../../Documents/rightArrow.png";
import {motion} from 'framer-motion'

const Testimonials = () => {
  const transition = { type: 'tween', duration: 1}
  const [testimonial, setTestimonial] = useState(0);
  return (
    <div className="testimonials-section">
      <div className="left-t">
        <span>TESTIMONIALS</span>
        <span className="text-stroke" style={{fontSize : '3rem'}}> WHAT THEY</span>
        <span> SAY ABOUT US</span>
        <motion.span
          key={testimonial}
          initial={{opacity: 0, x: -100}}
          animate={{opacity: 1, x: 0}}
          exit={{opacity: 0, x: 100}}
          transition={transition}
          >{testimonialsData[testimonial].review}</motion.span>
        <div>
          <span style={{ color: "orange" }}>{testimonialsData[testimonial].name}</span>
          <span> - {testimonialsData[testimonial].status}</span>
        </div>
      </div>
      <div className="right-t">
        <div className="Arrow">
          <img
            className="leftArrow"
            onClick={() => {
              testimonial === 0
                ? setTestimonial(testimonialsData.length - 1)
                : setTestimonial((prev) => prev - 1);
            }}
            src={leftArrow}
            alt=""
          />
          <img
            className="rightArrow"
            onClick={() => {
              testimonial === testimonialsData.length - 1
                ? setTestimonial(0)
                : setTestimonial((prev) => prev + 1);
            }}
            src={rightArrow}
            alt=""
          />
        </div>
        <motion.img
          key={testimonial}
          initial={{opacity: 0, x: 100}}
          animate={{opacity: 1, x: 0}}
          exit={{opacity: 0, x: -100}}
          transition={transition}
          className="image"
          src={testimonialsData[testimonial].image}
          alt=""
        />
        <motion.div
          initial={{opacity: 0, x: -100}}
          whileInView={{opacity: 1, x: 0}}
          transition={transition}
         className="orange-outline"></motion.div>
        <motion.div
          initial={{opacity: 0, x: 100}}
          whileInView={{opacity: 1, x: 0}}
          transition={transition}
         className="bg-effect"></motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
