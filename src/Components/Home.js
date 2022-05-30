import NavbarMain from "./Navbar";
import HeroFull from "./HeroFull";
import Student from "./Student";
import Tutor from "./Tutor";
import Testimonies from "./Testimonies";
import About from "./AboutUs";
import Mission from "./Mission";
import ContactUs from "./Contact";
import Footer from "./Footer";

const Home = () => {
  console.log("home screen rendered");

  return (
    <>
      <NavbarMain />
      <HeroFull />
      <Student />
      <Tutor />
      <About />
      <Mission />
      <Testimonies />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
