import missionImage from "../images/mission-img.webp";
const Mission = () => {
  return (
    <>
      <style>{`
            
            #mission p {
              font-weight: 400;
                font-family: 'Inter', san-serif;
            }
            #mission {
                background: #f3f4f6;
            }
            @media (min-width: 768px){
              #mission-img {
                width: 40%;
            }
            }
            @media (min-width: 1200px){
              #mission-img {
                width: 30%;
            }
            }
            
            
        `}</style>
      <section id="mission" className="px-0 p-md-5">
        <div className="container py-5">
          <div className="row">
            <div class="col text-center">
              <h2 className="fw-bold display-4 h1">Our Mission</h2>
              <p className="fs-4 fw-light pb-lg-1 pt-2 text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris,
                nullam vivamus massa orci eros, adipiscing ut velit. Quis
                scelerisque sit duis ut eget. Id sed porttitor est odio quis in
                egestas. Dignissim nec id amet blandit semper.
              </p>
              <br />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="text-center text-md-start col">
              <img
                id="mission-img"
                src={missionImage}
                alt="man in front of microphone"
                className="img-fluid mb-5 my-lg-0 float-md-end px-0 ms-md-5"
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

export default Mission;
