import soc from "../images/Footer/Social-icon.png";
import soc1 from "../images/Footer/Social-icon-1.png";
import soc2 from "../images/Footer/Social-icon-2.png";
import soc3 from "../images/Footer/Social-icon-3.png";
import soc4 from "../images/Footer/Social-icon-4.png";
import soc5 from "../images/Footer/Social-icon-5.png";

const Footer = () => {
  return (
    <>
      <style type="text/css">
        {`@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap');
        p {
            font-family: "Inter", sans-serif;
            font-weight: 300;
        }
        .footer-link {
          color: #fff;
          {/* font-size: 1rem; */}
          font-weight: medium;
          background: none;
          border: none;
          font-family: "Inter", sans-serif;
          text-align: left;
          margin:0 1rem;
        }
        .footer-logo {
            font-family: Ubuntu, sans-serif;
        }
        .footer-icon {
            width: 24px;
            height: 24px;
            margin: 1rem;
        }
        .footer-icon:last-of-type {
          margin-right: 0;
        }
        @media (max-width: 991px) {
            .footer-header {
              position: absolute;
              top: 2rem;
              left: 3rem; 
              width: 90vw!important;             
            }
            .footer-logo {
              font-size: 3rem;
            }
            .flink {
              margin-top: 7rem;
              padding-left: 0;      
            }
          }
        `}
      </style>
      <div
        className="container-fluid px-0 py-5 p-lg-5 position-relative"
        style={{ background: "#00832d", fontFamily: "Inter, sans-serif" }}
      >
        <div className="px-lg-5 pb-5 pt-0 mt-lg-5 d-flex justify-content-start align-items-start flex-row flink vstack">
          <div className="footer-header w-50 px-0 vstack">
            <h2 className="footer-logo text-white fw-bolder mb-lg-4">
              Tlancer
            </h2>
            <p className="text-white fs-6 w-75">
              Design amazing digital experiences that create more happy in the
              world.
            </p>
          </div>
          <div className="d-flex flex-column w-25 my-3 my-lg-0">
            <button className="footer-link">Product</button>
            <button className="footer-link">Overview</button>
            <button className="footer-link">Features</button>
            <button className="footer-link">Solutions</button>
            <button className="footer-link">Tutorials</button>
            <button className="footer-link">Pricing</button>
            <button className="footer-link">Releases</button>
          </div>
          <div
            className="d-flex flex-column  w-25 my-3 my-lg-0"
            direction="vertical"
          >
            <button className="footer-link">Company</button>
            <button className="footer-link">About us</button>
            <button className="footer-link">Careers</button>
            <button className="footer-link">Press</button>
            <button className="footer-link">News</button>
            <button className="footer-link">Media kit</button>
            <button className="footer-link">Contact</button>
          </div>
          <div
            className="d-flex flex-column  w-25 my-3 my-lg-0"
            direction="vertical"
          >
            <button className="footer-link">Resources</button>
            <button className="footer-link">Blog</button>
            <button className="footer-link">Newsletter</button>
            <button className="footer-link">Events</button>
            <button className="footer-link">Help center</button>
            <button className="footer-link">Tutorials</button>
            <button className="footer-link">Support</button>
          </div>
          <div
            className="d-flex flex-column w-25 my-3 my-lg-0"
            direction="vertical"
          >
            <button className="footer-link">Legal</button>
            <button className="footer-link">Terms</button>
            <button className="footer-link">Privacy</button>
            <button className="footer-link">Cookies</button>
            <button className="footer-link">Licenses</button>
            <button className="footer-link">Settings</button>
            <button className="footer-link">Contact</button>
          </div>
        </div>
        {/* Copyright and social icons container start*/}
        <div className="footer-icon-container border-top border-light align-items-center mt-4 d-flex w-75 pt-4 px-0 container-fluid">
          <p className="text-white w-100 fs-6">
            © 2077 Tlancer. All rights reserved.
          </p>
          <div fluid className="d-flex justify-content-end">
            <img alt="twitter" className="footer-icon" src={soc} />
            <img alt="linkedin" className="footer-icon" src={soc1} />
            <img alt="facebook" className="footer-icon" src={soc2} />
            <img alt="github" className="footer-icon" src={soc3} />
            <img alt="not sure?" className="footer-icon" src={soc4} />
            <img alt="dribbble" className="footer-icon" src={soc5} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
