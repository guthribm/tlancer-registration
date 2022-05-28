const Footer = () => {
  return (
    <>
      <style type="text/css">
        {`@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap');
        
        .foot {
          width: 100vw!important;

        }
        .fa-brands {
          transition: .3s ease-out all;          
        }
        .fa-brands:hover {
          transform: scale(1.5);                    
        }
        .social-icons .col {
          text-align: center;
        }

        @media (min-width: 768px) {
          .social-icons .col {
          margin: 0;
        }
        }
        
        
        
        `}
      </style>
      <div
        className="container-fluid px-3 foot py-5 p-lg-5 position-relative logo text-white"
        style={{
          background: "#00832d",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div className="row">
          <div className="row mt-3">
            <div className="col-1"></div>

            <div className="col-10">
              <div className="col px-3">
                <h2 className="fw-bold display-5">Tlancer</h2>
                <p className="h6 lh-base fw-normal">
                  Design amazing digital experiences that create more happy in
                  the world.
                </p>
              </div>
              {/* _____ Social Icon Row  */}
              <div className="row pt-4 align-items-center border-top border-light mb-0 mt-4">
                <div className="h6 col-10 px-0 col-lg-5 mx-auto mx-lg-0 text-center text-lg-start fw-light mb-4 mb-lg-0">
                  © 2077 Tlancer. All rights reserved.
                </div>
                <div className="col-lg-2"></div>
                <div className="col-lg-5">
                  <div className="row social-icons my-auto">
                    <div className="col">
                      <i class="fa-brands fa-twitter h2"></i>
                    </div>
                    <div className="col">
                      <i class="fa-brands fa-linkedin h2"></i>
                    </div>
                    <div className="col">
                      <i class="fa-brands fa-facebook h2"></i>
                    </div>
                    <div className="col">
                      <i class="fa-brands fa-github h2"></i>
                    </div>
                    <div className="col">
                      <i class="fa-brands fa-dribbble h2"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
