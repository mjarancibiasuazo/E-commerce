import React from "react";
import "./Hero.css";
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>RECIÉN LLEGADOS</h2>
        <div>
            <div className="hero-hand-icon">
                <p>Nueva</p>
            </div>
            <p>Colección</p>
            <p>Para Todos</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={ arrow_icon } />
        </div>
      </div>
      <div className="hero-right">
        <img src={ hero_image } alt="" />
      </div>
    </div>
  );
};

export default Hero;
