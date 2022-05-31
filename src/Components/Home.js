import { useRef, useEffect, useState } from "react";
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
  const studentFormRef = useRef();
  const heroRef = useRef();
  const [studentFormRefIsVisible, setStudentFormRefIsVisible] = useState();
  const [heroRefIsVisible, setHeroRefIsVisible] = useState();

  useEffect(() => {
    // const tutorObserver = new IntersectionObserver((entries) => {
    //   const entry = entries[0];
    //   setTutorRefIsVisible(entry.isIntersecting);
    // });
    // tutorObserver.observe(tutorRef.current);

    const studentFormObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setStudentFormRefIsVisible(entry.isIntersecting);
    });
    studentFormObserver.observe(studentFormRef.current);

    const heroObserver = new IntersectionObserver((entries) => {
      // const entry = entries[0];
      entries.forEach((entry) => {
        setHeroRefIsVisible(entry.isIntersecting);
      });
    });
    heroObserver.observe(heroRef.current);
  }, []);

  return (
    <>
      <NavbarMain />
      <HeroFull heroRef={heroRef} refIsVisible={heroRefIsVisible} />
      <Student
        studentFormRefIsVisible={studentFormRefIsVisible}
        studentFormRef={studentFormRef}
      />
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
