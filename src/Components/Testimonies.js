import pink_quote from "../images/pink-quote.png";
import blue_quote from "../images/quotes_blue.png";

const Testimonies = () => {
  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;600;700&display=swap');
    .pink-quote {
        width: 160px;
        height: 120px;
    }
    .pink-quote-bottom {
        transform: rotateY(180deg) rotateX(180deg);        
        
        margin-right: 10rem;
    }
    .blue-quote {
        position: relative;
        top: 1rem;
        right: 1.75rem;
        
    }
    #huey {}
    #putin {}
    #riley {
      position: relative;
      width: 60%;
      bottom: 5rem;
    }    

    `}</style>
      <div className="p-5 container">
        <div className="w-75 my-5 align-items-start mx-0 row">
          <img
            fluid
            className="pink-quote mx-auto"
            alt="quotation mark"
            src={pink_quote}
          />
          <div className="w-50 border-0 pt-5 card">
            <div className="align-self-start lh-base fs-1 w-100 pe-5 fw-bold card-title h5">
              Testimonies from Our Customers
            </div>
            <div className="align-self-start text-black lh-lg fw-normal fs-5 w-75 card-text">
              Get inspired by these stories.
            </div>
          </div>
        </div>
        <div className="me-5 row">
          <div className="pt-5 col">
            <div className="border-0 ms-auto mb-0 me-5 shadow py-5 ps-5 pe-4 mt-5 w-50 card">
              <image
                className="blue-quote opacity-50"
                src={blue_quote}
                width="16p"
              />
              <div className="card-text">
                <p className="lh-lg text-black fw-bold text-opacity-75">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor rhoncus dolor purus non enim
                  praesent elem
                </p>
              </div>
              <div className="fw-bold card-title h5">Huey</div>
              <div className="text-secondary card-subtitle h6">
                Back-end developer at Fintech
              </div>
            </div>
          </div>
          <div className="col">
            <div className="border-0 shadow p-5 ms-5 my-5 w-75 card">
              <image
                className="blue-quote opacity-50"
                src={blue_quote}
                width="16p"
              />
              <div className="card-text">
                <p className="lh-lg text-black fw-bold text-opacity-75">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor rhoncus dolor purus non enim
                  praesent elem
                </p>
              </div>
              <div className="fw-bold card-title h5">Putin</div>
              <div className="text-secondary card-subtitle h6">
                Developer at Microsoft
              </div>
            </div>
          </div>
        </div>
        <div className="w-50 ms-auto row">
          <div className="border-0 shadow p-5 mb-0 me-auto riley card">
            <image
              className="blue-quote opacity-50"
              src={blue_quote}
              width="16p"
            />
            <div className="card-text">
              <p className="lh-lg text-black fw-bold text-opacity-75">
                Enrolling with Hackton academy is the best decision I have made.
              </p>
            </div>
            <div className="fw-bold card-title h5">Riley</div>
            <div className="text-secondary card-subtitle h6">
              Instructor at Hacton Academy
            </div>
          </div>
        </div>
        <div className="row">
          <div className="w-50 mt-3 mb-5 ms-5 border-0 pb-5 ps-5 card">
            <div className="fs-1 lh-base w-100 fw-bold card-title h5">
              Every year 1000+ students register with us and a lot more get
              certified
            </div>
            <div className="text-black lh-base fs-5 fw-normal w-75 card-text">
              Hackton academy is the place to be to learn coding join hackton
              today
            </div>
          </div>
          <img
            className="pink-quote pink-quote-bottom ms-auto mb-5 align-self-end"
            alt="pink quote"
            src={pink_quote}
          />
        </div>
      </div>
    </>
  );
};

export default Testimonies;
