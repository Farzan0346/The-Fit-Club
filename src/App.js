import React from 'react'
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Whyus from './Components/Whyus/Whyus';
import Journey from './Components/Journey/Journey';
import Testimonials from './Components/Testimonials/Testimonials';
import Join from './Components/Join/Join';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Programs/>
      <Whyus/>
      <Journey/>
      <Testimonials/>
      <Join/> 
      <Footer/>
    </div>
  );
}

export default App;
