const Testimonies = () => {
  return (
    <>
      <style>{`
    .red-quote {
        font-size: 2rem;
        color: #B00000;
    }

    
    .blue-quote {
        position: relative;
        top: 1rem;
        right: 1.75rem;
        color: #2EC5CE;
        opacity: .5;
    }
   
    .card-title.h5 {
      width: 60%;
    }

    @media (min-width: 768px) {
      .red-quote {
        font-size: 3rem;
      }
    }

    @media (min-width: 1024px) {
      .red-quote {
        font-size: 4rem;
    }

    #putin {
      position: relative;
      top: 8rem;
    }
    
    }

    `}</style>
      <section id="testimonials" className="container-fluid bg-white my-5">
        <div id="testimonials-target" className="link-target"></div>
        <div className="container p-md-5 bg-white">
          {/* ______ Top Row */}
          <div className="row mb-5">
            <div className="col-3 text-center col-md-4">
              <i className="fa-solid fa-quote-left red-quote"></i>
            </div>
            <div className="col-9 col-md-4">
              <h2 className="h1 ms-md-5 fw-bold">
                Testimonies from Our Customers
              </h2>
            </div>
            <div className="col-md-4"></div>
          </div>
          {/* ______ Middle Row With Individual Quotes*/}
          <div className="row justify-content-center">
            <div className="row gx-lg-5">
              {/* ______ Card 1*/}
              <div className="col-lg-2"></div>
              <div className="col col-lg-4 mt-md-5">
                <div
                  id="putin"
                  className="border-0 shadow pt-5 pb-4 ps-5 pe-4 my-3 card "
                >
                  <i className="fa-solid fa-quote-left blue-quote"></i>
                  <div className="card-text">
                    <p className="lh-lg text-black fw-bold text-opacity-75 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                      aliquam, purus sit amet luctus venenatis, lectus magna
                      fringilla urna, porttitor rhoncus dolor purus non enim
                      praesent elem
                    </p>
                  </div>
                  <div className="fw-bold card-title h5">Putin</div>
                  <div className="text-secondary card-subtitle h6">
                    Back-end developer at Fintech
                  </div>
                </div>
              </div>
              {/* ______ Card 2*/}
              <div className="col col-lg-6">
                <div
                  id="riley"
                  className="border-0 shadow pt-5 pb-4 ps-5 pe-4 mt-3 card "
                >
                  <i className="fa-solid fa-quote-left blue-quote"></i>
                  <div className="card-text">
                    <p className="lh-lg text-black fw-bold text-opacity-75 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                      aliquam, purus sit amet luctus venenatis, lectus magna
                      fringilla urna, porttitor rhoncus dolor purus non enim
                      praesent elem
                    </p>
                  </div>
                  <div className="fw-bold card-title h5">Riley</div>
                  <div className="text-secondary card-subtitle h6">
                    Developer at microsoft
                  </div>
                </div>
              </div>
            </div>

            {/* ______ Huey's Row*/}
            <div className="row  mb-md-5">
              {/* ______ Card 3*/}
              <div className="col-md-6 col-lg-6"></div>
              <div className="col-md-5 col-lg-4">
                <div
                  id="huey"
                  className="border-0 shadow pt-5 pb-4 ps-5 pe-4 mt-3 mb-5 card "
                >
                  <i className="fa-solid fa-quote-left blue-quote"></i>
                  <div className="card-text">
                    <p className="lh-lg text-black fw-bold text-opacity-75 mb-md-4">
                      Enrolling with Hackton academy is the best decision I have
                      made.
                    </p>
                  </div>
                  <div className="fw-bold card-title h5">Huey</div>
                  <div className="text-secondary card-subtitle h6">
                    Instructor at Hackton academy
                  </div>
                </div>
              </div>
              <div className="col-md-1 col-lg-2"></div>
            </div>
          </div>
          {/* ______ Bottom Row */}
          <div className="row my-md-5">
            <div className="col-9 col-md-5 col-md-6 mb-md-5">
              <h2 className="h1 fw-bold">
                Every year 1000+ students register with us and lot more get
                certified
              </h2>
              <p className="lead">
                Hackton academy is the place to be to learn coding join hackton
                today
              </p>
            </div>
            <div className="col-3 col-md-6 text-center">
              <i className="fa-solid fa-quote-right red-quote"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonies;
