import React from "react";
import "./Whyus.css";
import image1 from '../../Documents/image1.png'
import image2 from '../../Documents/image2.png'
import image3 from '../../Documents/image3.png'
import image4 from '../../Documents/image4.png'
import reasons from '../../Documents/reasons.png'
import partner1 from '../../Documents/partner1.png'
import partner2 from '../../Documents/partner2.png'
import partner3 from '../../Documents/partner3.png'



const Whyus = () => {
  return (
    <div className="whyus-section">
      <div className="whyus-left">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="whyus-right">
        <span>SOME REASONS</span>
        <div ><span className="text-stroke">WHY </span><span>CHOOSE US?</span></div>
        <div className="reasons_list"><img src={reasons} alt="" /><span>OVER 140+ EXPERT COACHES</span></div>
        <div className="reasons_list"><img src={reasons} alt="" /><span>TRAIN SMARTER AND FASTER THAN BEFORE</span></div>
        <div className="reasons_list"><img src={reasons} alt="" /><span>1 FREE PROGRAM FOR NEW MEMBER</span></div>
        <div className="reasons_list"><img src={reasons} alt="" /><span>RELIABLE PARTNERS</span></div>
        <span className="our-partner">OUR PARTNERS</span>
        <div className="partners">
            <img src={partner1} alt="" />
            <img src={partner2} alt="" />
            <img style={{width: "2.5rem"}} src={partner3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Whyus;
