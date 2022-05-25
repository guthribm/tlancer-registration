import missionImage from "../images/mission-img.png";
const Mission = () => {
  return (
    <>
      <style>{`
            #mission-img {
                max-width: 642px;
                max-height: 614px;
            }
            #mission p {
                font-weight: 500;
            }
            #mission {
                background: #f3f4f6;
            }
            .large-txt {
                font-size: 3.5rem;
                font-weight: 700;
            }
        `}</style>
      <section id="mission" className="p-5">
        <div className="container-fluid p-5">
          <h2 className="text-center large-txt">Our Mission</h2>
          <p className="fs-3 lh-lg py-4 px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris,
            nullam vivamus massa orci eros, adipiscing ut velit. Quis
            scelerisque sit duis ut eget ornare. Id sed porttitor est odio quis
            in egestas. Dignissim nec id amet blandit semper.
          </p>
          <div className="container-fluid row mt-5 py-2">
            <div className="col">
              <h3 className="large-txt me-5">
                At Tlancer we connect students with the best tutors
              </h3>
              <p className="fs-3 lh-lg py-4 pe-5">
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
            <img
              id="mission-img"
              src={missionImage}
              alt="man in front of microphone"
              className="img-fluid"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Mission;
