import NavbarMain from "./Navbar";
import HeroFull from "./HeroFull";
import WhiteSpacer from "./WhiteSpacer";
import Student from "./Student";
import Tutor from "./Tutor";
import Footer from "./Footer";
// import Testimonies from "./Testimonies";
import About from "./AboutUs";
import Mission from "./Mission";

const Home = () => {
  return (
    <>
      <NavbarMain />
      <HeroFull />
      <WhiteSpacer height="10px" />
      <Student />
      <WhiteSpacer height="40px" />
      <Tutor />
      <WhiteSpacer height="40px" />
      <About />
      <WhiteSpacer height="40px" />
      <Mission />
      <WhiteSpacer height="40px" />
      {/* <Testimonies /> */}
      <Footer />
    </>
  );
};

export default Home;
