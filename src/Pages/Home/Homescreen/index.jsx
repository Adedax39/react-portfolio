import HeroSection from "../HeroSection.jsx";
import Navbar from "../Navbar.jsx";
import MySkills from "../Myskills.jsx";
import AboutMe from "../Aboutme.jsx"
import MyPortfolio from "../MyPortfolio.jsx";
import Footer from "../Footer.jsx";

function Home(){
  return(  <>
    <Navbar />
    <HeroSection />
    <MySkills />
    <AboutMe />
    <MyPortfolio />
    <Footer />
   
    </>)
};

export default Home;