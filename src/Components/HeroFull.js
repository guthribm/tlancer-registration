import HeroFullImg from "../images/HeroFullImage.png";
const HeroFull = () => {
  return (
    <>
      <style>
        {`
        #home {
          background: blue;
          position: absolute;
          top: -50rem;
        }
        #home-container {
            margin-top: 5.8rem;
            padding-top: 8rem;
            z-index: 0;
            position: relative;            
            
        }
        .tinter {
          background: rgba(0,0,0,.7)          
        }
       .hero-text {
           font-size: 4.25rem;
       }
       .btn-hero {
           background: var(--main-green);
           color: #fff;
           width: 250px;
           z-index: 2;
       }
        
       @media (max-width: 1320px) {}
        `}
      </style>
      <div
        style={{
          background: `url(${HeroFullImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div id="home"></div>
        <section id="home-container" className="container-fluid px-5 tinter">
          <div className="container-fluid d-flex flex-column p-5 m-auto text-white align-items-center">
            <h1 className="hero-text lh-lg text-center px-5">
              Welcome to Tlancer where you can learn thousands of courses at
              your own pace here from the best tutors across the world
            </h1>
            <a href="#student" className="btn btn-hero fw-semibold fs-4 my-5">
              Get Started
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroFull;
