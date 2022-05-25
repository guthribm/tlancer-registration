import red_quote from "../images/red-quote.png";
import blue_quote from "../images/quotes_blue.png";

const Testimonies = () => {
  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;600;700&display=swap');
    .pink-quote {
        max-width: 69px;
        max-height: 69px;
    }
    .pink-quote-bottom {
        transform: rotateY(180deg) rotateX(180deg);        
        margin-bottom: 7rem;
        margin-right: 10rem;
    }
    .blue-quote {
        position: relative;
        top: 1rem;
        right: 1.75rem;
        
    }
    #huey {
      width: 40%;
    }
    #putin {
      max-width: 445px;
      }
    #riley {
      margin-left: 3rem;
      max-width: 350px;
      width: 35%;
      margin-top: 4rem;
    }    
    #test-foot {
      width: 60%;
      margin-top: 1rem;
    }
    .card-title.h5 {
      width: 60%;
    }

    `}</style>
      <div id="testimonials" className="p-5 container-fluid mb-5">
        <div className="w-75 mb-0 pb-5 align-items-start mx-0 row flex-row-reverse ">
          <div className="w-50 border-0 py-0 card pe-5">
            <div className="align-self-start lh-base fs-1 fw-bold card-title h5">
              Testimonies from Our Customers
            </div>
          </div>
          <img
            className="pink-quote mx-auto img-fluid mt-auto mb-0"
            alt="quotation mark"
            src={red_quote}
          />
        </div>
        <div className="me-5 row">
          <div className="pt-5 pe-2 col">
            <div
              id="huey"
              className="border-0 ms-auto mb-0 me-0 shadow pt-5 pb-4 ps-5 pe-4 mt-5 card "
            >
              <img
                className="blue-quote opacity-50"
                src={blue_quote}
                width="16p"
                alt="blue quote"
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
            <div
              id="putin"
              className="border-0 shadow pt-5 pb-4 ps-5 pe-4 ms-5 my-5 w-75 card"
            >
              <img
                className="blue-quote opacity-50"
                src={blue_quote}
                width="16p"
                alt="blue quote"
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
            <div
              id="riley"
              className="border-0 shadow pt-4 pb-4 ps-5 pe-4 mb-0 me-auto riley card"
            >
              <img
                className="blue-quote opacity-50"
                src={blue_quote}
                width="16p"
                alt="blue quote"
              />
              <div className="card-text">
                <p className="lh-lg text-black fw-bold text-opacity-75">
                  Enrolling with Hackton academy is the best decision I have
                  made.
                </p>
              </div>
              <div className="fw-bold card-title h5">Riley</div>
              <div className="text-secondary card-subtitle h6">
                Instructor at Hacton Academy
              </div>
            </div>
          </div>
        </div>

        <div id="test-foot" className="row mx-auto">
          <div className="w-50 mt-3 mb-5 ms-0 border-0 pb-5 pe-5 card">
            <div className="fs-1 lh-base w-100 fw-bold card-title h5">
              Every year 1000+ students register with us and a lot more get
              certified
            </div>
            <div className="text-black lh-base fs-5 fw-normal w-100 card-text">
              Hackton academy is the place to be to learn coding join hackton
              today
            </div>
          </div>
          <img
            className="pink-quote pink-quote-bottom ms-auto align-self-end"
            alt="pink quote"
            src={red_quote}
          />
        </div>
      </div>
    </>
  );
};

export default Testimonies;
