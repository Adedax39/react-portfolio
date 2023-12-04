import React from "react";

function HeroSection(){
 return(
    <section id = "heroSection" className = "hero--section">
    <div className="hero--section--content--box">
     <div className="hero--section--content">
       <p className="section--title">Hey I'm Lasath</p>
       <h1 className="hero--section--title">
        <span className="hero--section--title--color">Full 
        Stack</span>{" "}
        <br />
        Developer
       </h1>
       <p className="hero--section-description">
       It is a long established fact that a reader will be distracted by
       <br />
        the readable content of a page when looking at its layout.
       </p>
       </div>
       <button className = "btn btn-primary">Get In Touch</button>
    </div>
    <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
    </div>

    </section>
 )
};

export default HeroSection;