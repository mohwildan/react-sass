import React from "react";
import "./Hero.scss";
import { Link } from "react-router-dom";
import ImageHero from "./Image/krakenimages-376KN_ISplE-unsplash.jpg";
import { AiFillPlayCircle } from "react-icons/ai";

function Hero() {
  return (
    <section>
      <div className="hero-col">
        <div className="col1">
          <h1>Let’s start news business ideas</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque,
            delectus sint. Accusantium ut, itaque laboriosam, alias corrupti
            deserunt hic et pariatur obcaecati expedita nihil excepturi vel quae
            sit autem adipisci.
          </p>
          <div className="col1-btn">
            <Link className="btn-register" to="/regiser">
              Register
            </Link>
            <Link className="btn-demo" to="/demo">
              <AiFillPlayCircle className="play" /> Watch demo
            </Link>
          </div>
        </div>
        <div className="col2">
          <img src={ImageHero} alt="" />
        </div>
      </div>
      <div className="hero-box">
        <div className="box">
          <h2>40+</h2>
          <p>Years Of Excelends</p>
        </div>
        <div className="box">
          <h2>100K</h2>
          <p>Case Compliete</p>
        </div>
        <div className="box">
          <h2>100%</h2>
          <p>Client Solutions</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
