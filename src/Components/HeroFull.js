import HeroFullImg from "../images/HeroFullImage.webp";
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
         padding-top: 5rem;
       }  

       .hero-text {
           font-size: 2.25rem;
           
       }
       

       {/* Mobile and SMALLER Breakpoint */}
       @media (max-width: 576px) {
        .hero-text {
           font-size: 1.75rem;
           {/* text-align: left;
           padding-left: 1rem; */}
       } 
       #home-container {
         padding-top: 8rem;
       }  
       }
       
        
        {/* Tablet to Desktop Breakpoint */}
       @media (min-width: 768px) {
        #home-container {
            margin-top: 5rem;
            padding-top: 10rem;
            padding-bottom: 5rem;            
        }
        .hero-text {
           font-size: 3.5rem;                      
       }
       }

       {/* Desktop and GREATER Breakpoint */}
       @media (min-width: 1200px) {
        .hero-text {
           font-size: 4.6rem;                      
       }
       }
       
        `}
      </style>
      <div
        className="px-0 bg-black py-5 bg-opacity-75"
        style={{
          background: `url(${HeroFullImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundBlendMode: "hue",
          backgroundSize: "cover",
        }}
      >
        <div id="home"></div>
        <div id="home-container" class="container-fluid">
          <div class="row">
            <div class="col text-center text-white">
              <h1 class="hero-text lh-md-lg px-md-5">
                Welcome to Tlancer where you can learn thousands of courses at
                your own pace here from the best tutors across the world
              </h1>
            </div>
            <div class="col-md-12 text-center my-5">
              <a href="#student" class="btn fs-2 fw-bold px-5 btn-lg ">
                Get Started
              </a>
            </div>
          </div>
          <br />
        </div>
      </div>
    </>
  );
};

export default HeroFull;
