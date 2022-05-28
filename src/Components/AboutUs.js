import aboutImage from "../images/about-image.webp";
const About = () => {
  return (
    <>
      <style>{`
            
            #about p {
                font-weight: 400;
                font-family: 'Inter', san-serif;
            }
            #about {
                background: #f3f4f6;
            }
            @media (min-width: 768px){
              #about-img {
                width: 40%;
            }
            }
            @media (min-width: 1200px){
              #about-img {
                width: 30%;
            }
            }
            
            .large-txt {
                font-weight: 700;
            }
        `}</style>
      <section id="about" className="px-0 p-md-5">
        <div className="container py-5">
          <div className="row">
            <div className="col text-center">
              <h2 className="fw-bold display-4 h1">About Us</h2>
              <p className="fs-4 fw-light pb-lg-1 pt-2 text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris,
                nullam vivamus massa orci eros, adipiscing ut velit. Quis
                scelerisque sit duis ut eget. Id sed porttitor est odio quis in
                egestas. Dignissim nec id amet blandit semper.
              </p>
            </div>
          </div>

          <br />
          <div className="row">
            <div className="text-center text-md-start col">
              <img
                id="about-img"
                src={aboutImage}
                alt="man in suit"
                className="img-fluid mb-5 my-lg-0 float-md-start px-0 me-md-5"
              />
              <h3 className="h1 display-4 fw-bold mb-4">
                At Tlancer we connect students with the best tutors
              </h3>

              <p className="fs-4 lh-lg py-2 me-md-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris,
                nullam vivamus massa orci eros, adipiscing ut velit. Quis
                scelerisque sit duis ut eget ornare. Id sed porttitor est odio
                quis in egestas. Dignissim nec id amet blandit semper.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Mauris,
                nullam vivamus massa orci eros, adipiscing ut velit. Quis
                scelerisque sit duis ut eget ornare. Id sed porttitor est odio
                quis in egestas. Dignissim nec id amet blandit semper.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
