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
       I'm a Software Engineering student seeking of an internship where I can learn various techniques of It field
       <br />
       To aquire an Software Engineering trainee that provides me hands-on experience in design and cinstruction to implement real life skills in filed of IT.
       </p>
       </div>
       <a href="https://www.canva.com/design/DAFs5wXLx3U/OZpFbP9RuuMj9Rh3Nzc_dQ/edit?utm_content=DAFs5wXLx3U&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="blank">
       <button className = "btn btn-primary">Get In Touch/CV</button></a>
    </div>
    <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
    </div>

    </section>
 )
};

export default HeroSection;