import React, { useEffect, useState } from "react";
import logo from "../../Documents/logo.png";
import bars from "../../Documents/bars.png";
import "./Header.css";
import { Link , animateScroll as scroll} from "react-scroll";

const Header = () => {
  const [size, setSize] = useState({ height:window.innerHeight, width:window.innerWidth });

  const setDimension = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }
  useEffect(() => {
    window.addEventListener('resize', setDimension);
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
  }, [size])
    const [opened, setOpened] = useState(false);
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />

      {size.width <= 768 && !opened ? (
        <div onClick={() => setOpened(true)}>
          <img className="bars" src={bars} alt="" />
        </div>
      ) : (
        <div>
          <ul className="nav-links">
          <img className="bars" onClick={() => 
                  setOpened(false)} src={bars} alt="" />
            <li>
              <Link
                onClick={() => {
                  setOpened(false);
                  scroll.scrollToTop();
                }}
                smooth
              >
                Home
              </Link>
            </li>
            <li>
              <Link onClick={() => setOpened(false)} to="programs" smooth>
                Programs
              </Link>
            </li>
            <li>
              <Link onClick={() => setOpened(false)} to="why-us" smooth>
                Why Us
              </Link>
            </li>
            <li>
              <Link onClick={() => setOpened(false)} to="plans" smooth>
                Plans
              </Link>
            </li>
            <li>
              <Link onClick={() => setOpened(false)} to="testimonials" smooth>
                Testimonials
              </Link>
            </li>
            <li>
            <button className="btn header-join-btn">
            <Link onClick={() => setOpened(false)} to="join" smooth>
            Join Now
              </Link></button>
            </li>
          </ul>
        </div>
      )}
      {/* <div>
        <ul className="nav-links">
            <li>Home</li>
            <li>Programs</li>
            <li>Why us</li>
            <li>Plans</li>
            <li>Testimonials</li>
        </ul>
      </div> */}
    </div>
      
  );
};

export default Header;
