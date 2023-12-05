import HeroSection from "../HeroSection.jsx";
import Navbar from "../Navbar.jsx";
import MySkills from "../Myskills.jsx";
import AboutMe from "../Aboutme.jsx"
import MyPortfolio from "../MyPortfolio.jsx";
import ContactMe from "../Contacrme.jsx";
import Footer from "../Footer.jsx";

function Home(){
  return(  <>
    <Navbar />
    <HeroSection />
    <MySkills />
    <AboutMe />
    <MyPortfolio />
    <ContactMe />
    <Footer />
   
    </>)
};

export default Home;