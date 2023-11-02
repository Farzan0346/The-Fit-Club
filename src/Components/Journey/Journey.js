import React from "react";
import "./Journey.css";
import { plansData } from "../Data/plansData";
import whiteTick from '../../Documents/whiteTick.png'
import rightArrow from '../../Documents/rightArrow.png'

const Journey = () => {
    
  return (
    <div className="journey-section">
    <div className="blur journey-blur-left"></div>
    <div className="blur journey-blur-right"></div>
      <div className="journey-title">
        <span className="text-stroke" >READY TO START</span>
        <span> YOUR JOURNEY</span>
        <span className="text-stroke" > NOW WITH US</span>
      </div>
      <div className="plan-cards">
        {
            plansData.map((card,i)=>{
                return(
                <div className="card" key={i}>
                    {card.icon}
                    <span className="name">{card.name}</span>
                    <span className="price">$ {card.price}</span>
                    <div className="features">

                    {
                        card.features.map((feature,i)=>{
                        return(
                        <div className="feature" key={i}>
                        <img src={whiteTick} alt="" /> 
                        <span>{feature}</span>
                        </div>
                        )
                    })
                    }
                    </div>
                    <div className="benefit-link">
                    <span>See more benefits</span><img src={rightArrow} alt="" />
                    </div>
                    <button className="btn join-now">Join Now</button>
                </div>
                )
            })
        }
      </div>
    </div>
  );
};

export default Journey;
