import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import "./Join.css";

const Join = () => {
    const [email, setEmail] = useState('')
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_pjbh7rq', 'template_s4lqh56', form.current, 'SwoDwps45ug4BDywe')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          setEmail('');
      };
  return (
    <div className="join-section">
      <div className="left-j">
        <hr />
        <div>
          <span className="text-stroke" style={{fontSize: '3em'}}>READY TO </span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY </span>
          <span className="text-stroke" style={{fontSize: '3em'}}>WITH US?</span>
        </div>
      </div>
      <div className="right-j">
      <form onSubmit={sendEmail} className="email" ref={form}>
        <input type="email" name="user-email" id="user-email"value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your Email Address here"/>
        <button className="btn join-btn">Join Now</button>
      </form>
      </div>
    </div>
  );
};

export default Join;
