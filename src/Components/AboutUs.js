import aboutImage from "../images/about-image.png";
const About = () => {
  return (
    <>
      <style>{`
            #about-img {
                max-width: 447px;
                max-height: 569px;
            }
            #about p {
                font-weight: 500;
            }
            #about {
                background: #f3f4f6;
            }
            .large-txt {
                font-weight: 700;
            }
        `}</style>
      <section id="about" className="p-5">
        <div className="container-fluid p-5">
          <h2 className="text-center large-txt h1">About Us</h2>
          <p className="fs-4 lh-lg py-4 px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris,
            nullam vivamus massa orci eros, adipiscing ut velit. Quis
            scelerisque sit duis ut eget ornare. Id sed porttitor est odio quis
            in egestas. Dignissim nec id amet blandit semper.
          </p>
          <div className="container-fluid row mt-5 pt-2">
            <img
              id="about-img"
              src={aboutImage}
              alt="man in suit"
              className="img-fluid"
            />

            <div className="col">
              <h3 className="large-txt h2 px-5 w-75">
                At Tlancer we connect students with the best tutors
              </h3>
              <p className="fs-4 lh-lg py-4 px-5">
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
