import NavbarMain from "./Navbar";
import HeroFull from "./HeroFull";
import WhiteSpacer from "./WhiteSpacer";
import Student from "./Student";
import Tutor from "./Tutor";
import Testimonies from "./Testimonies";
import About from "./AboutUs";
import Mission from "./Mission";
// import ComingSoon from "./ComingSoon";
import ContactUs from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <NavbarMain />
      <HeroFull />
      <WhiteSpacer height="5px" />
      <Student />
      <WhiteSpacer height="10px" />
      <Tutor />
      <WhiteSpacer height="10px" />
      <About />
      <WhiteSpacer height="10px" />
      <Mission />
      <WhiteSpacer height="10px" />
      <Testimonies />
      <ContactUs />
      {/* <ComingSoon section="Contact Us" /> */}
      <WhiteSpacer height="10px" />
      <Footer />
      {/* <ComingSoon section="Footer" /> */}
    </>
  );
};

export default Home;
