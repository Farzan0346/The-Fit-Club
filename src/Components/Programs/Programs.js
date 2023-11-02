import React from "react";
import "./Programs.css";
import rightArrow from '../../Documents/rightArrow.png'
import { programsData } from "../Data/programsData.js";

const Programs = () => {
  return (
    <div className="programs-section">
      <div className="programs-title">
        <span className="text-stroke">Explore our</span>
        <span>Programs</span>
        <span className="text-stroke">To shape you</span>
      </div>
      <div className="programs">
        {programsData.map((p) => {
            return(
          <div className="category">
            

            {p.image}
            
           
              <span>{p.heading}</span>
              <span>{p.details}</span>
            <div className="joinnow-btn"><span>Join Now</span><img src={rightArrow} alt="" /></div>

          </div>);
        })}
      </div>
    </div>
  );
};
export default Programs;
