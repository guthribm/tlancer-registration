import microsoft from "../images/microsoft-logo.png";
import imunify from "../images/imunify.png";
import ibm from "../images/ibm-logo.png";
import certiport from "../images/certiport-logo.png";
import ic3 from "../images/ic3-logo.png";
import apple from "../images/apple.png";
import GreySpacer from "./GreySpacer";

const Certified = () => {
  return (
    <>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;600;700&display=swap');
        .cert-container h2, .cert-container p {
            font-family: 'Ubuntu', sans-serif;
        }
        .subscribe-btn {
          background: #0ECD88;
                letter-spacing: .8px;
                border: none;
                color: #fff;
        }
        .newsletter-text {
            letter-spacing: .2px;
            font-family: 'Ubuntu', sans-serif;
        }
        .newsletter-row {
            font-family: 'Ubuntu', sans-serif;
        }
        @media (max-width: 992px){
            .cert-container {
                flex-direction: column;
                margin: 0 auto;
            }
        }
        `}
      </style>
      <div
        fluid
        className="d-lg-flex cert-container p-5 mt-5 pb-0 container-fluid"
      >
        <div className="ms-5 ps-5 pt-4 w-50 mb-5 mb-lg-0 conatainer-fluid">
          <h2 className="fs-1 fw-bold ps-5 w-75">Tlancer is Certified by</h2>
          <p className="w-100 text-black px-5 lh-lg fw-normal">
            Tlancer is recognized worldwide by top tech firms and is certified
            in Africa, Europe, North-America, South-America & Asia. We have
            centers across the world our student base and staff base is
            increasing daily.
          </p>
        </div>
        <div className="ms-5 contianer-fluid w-50">
          <div className="align-items-center gap-5 mb-3 row">
            <div className="col">
              <img src={microsoft} alt="microsoft logo" fluid />
            </div>
            <div className="col">
              <img src={imunify} alt="microsoft logo" fluid />
            </div>
            <div className="col">
              <img src={ibm} alt="microsoft logo" fluid />
            </div>
          </div>
          <div className="align-items-center gap-5 mb-3 row">
            <div className="col">
              <img src={certiport} alt="microsoft logo" fluid />
            </div>
            <div className="col">
              <img src={ic3} alt="microsoft logo" fluid />
            </div>
            <div className="col">
              <img src={apple} alt="microsoft logo" fluid />
            </div>
          </div>
        </div>
      </div>
      <GreySpacer height="118px" />
      <div className="p-5  mt-4 mb-1 container-fluid">
        <div className="px-5 align-items-center newsletter-row row">
          <div className="px-5 ms-5 col">
            <h3 className="fw-bold fs-2 text-secondary mb-3 w-75">
              Sign up for our newsletter
            </h3>
            <p className="text-black fw-normal me-auto newsletter-text w-75">
              Be the first to know about releases and industry news and
              insights.
            </p>
          </div>
          <div className="col">
            <form>
              <div className="mb-1 row">
                <div className="col">
                  <input
                    className="p-2 px-3 border-2 btn-login w-100"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="col w-25">
                  <button className="subscribe-btn btn btn-lg">Subsribe</button>
                </div>
              </div>
              <div className="text-black fw-normal">
                We care about your data in our{" "}
                <span className="text-decoration-underline">
                  privacy policy
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certified;
