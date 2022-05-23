import NavbarMain from "./Navbar";
import HeroMain from "./Hero";
import GreySpacer from "./GreySpacer";
import Courses from "./Courses";
import Tutor from "./Tutor";
import Footer from "./Footer";
import Blog from "./Blog";
import Testimonies from "./Testimonies";
import Certified from "./Certified";

const Home = () => {
  return (
    <>
      <NavbarMain />
      <HeroMain />
      <GreySpacer height="119px" />
      <Courses />
      <Tutor />
      <Testimonies />
      <GreySpacer height="131px" />
      <Blog />
      <GreySpacer height="104px" />
      <Certified />
      <Footer />
    </>
  );
};

export default Home;
