import contactImage from "../images/contact-img.webp";
const ContactUs = () => {
  return (
    <>
      <style>{`
        ul {
            padding-left: 0;
            
        }
        li {
            list-style: none;            
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 1rem 0;            
        }       
        
        .contact-icon {                   
            color: black;
            padding: .75rem;
            border-radius: 5rem;
            background: #B2E8D6;
            font-size: 1.25rem;       
        }
        #contact-list a {
            text-decoration: none;
        }
        #contact-list a, #contact-list a:visited {
            color: black;
        }
        #contact {
            background: #f3f4f6;
        }
        .map {
          border: 1px solid var(--main-green);
          width: 90%;
        }
        

                
        @media (min-width: 1200px){
          
          #contact-list {
            margin-left: 0;
            margin-right: 0;
            width: 100%!important;
          }
          .map {
            height: 450px!important;
            margin-left: 0;
            margin-right: 0;
          }
        }


        @media (min-width: 1024px){
          .map {
            height: 650px;
            width: 90%!important;
          }
        }

        @media (min-width: 768px){
          .map {
            height: 550px;
          }          
          #contact-list {
            width: 50%;            
          }
          .fa-brands, .fa-solid { 
          margin-right: 1rem;
          margin-bottom: 0;
          }
          i {
                        
          }
          li {           
            flex-direction: row;
            align-items: center;
            align-self: start;  
            margin: 1rem 0;                                    
          }
          ul {
            margin-left: auto;
            margin-right: auto;            
          }
        }

        @media (min-width: 501px){
          .map {
            height: 260px;
          }
        }
        
        @media (max-width: 500px){
          .map {
            height: 180px;
          }
        }
    `}</style>
      <section id="contact" className="px-0 py-5 px-md-5">
        <div className="container-fluid py-2 px-md-5 pb-3">
          <div className="row">
            <div className="col text-center">
              <h2 className="h1 fw-bold">Contact Us</h2>
              <p className="fs-4 lh-lg py-4 px-1 px-md-2 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris,
                nullam vivamus massa orci eros, adipiscing ut velit. Quis
                scelerisque sit duis ut eget ornare. Id sed porttitor est odio
                quis in egestas. Dignissim nec id amet blandit semper.
              </p>
            </div>
          </div>

          <div className="row gx-5">
            <div className="col-xl-9 container-fluid">
              <img
                src={contactImage}
                alt="map location"
                className="img-fluid mb-4"
              />
              {/* <div className="embed-responsive embed-responsive-16by9 mb-5">
                <iframe
                  className="embed-responsive-item map mx-auto d-flex"
                  title="tbilisi-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190556.07526446038!2d44.698426158779384!3d41.73262998765188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd7e64f626b%3A0x61d084ede2576ea3!2sTbilisi%2C%20Georgia!5e0!3m2!1sen!2sus!4v1653438434499!5m2!1sen!2sus"
                  // style={{ border: "0" }}
                  width="720"
                  height="480"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div> */}
            </div>
            <div className="col-xl-3">
              <ul
                id="contact-list"
                className="d-flex flex-column justify-content-center align-items-center text-center"
              >
                <li>
                  <i class="fa-solid fa-location-dot contact-icon"></i>
                  <a
                    target={"_blank"}
                    rel={"noreferrer"}
                    referrerPolicy="no-referrer-when-downgrade"
                    href="https://goo.gl/maps/wzCKw1qwtKDLsFKi8"
                    className="fs-4"
                  >
                    Georgia, Tibilisi
                  </a>
                </li>
                <li>
                  <i
                    class="fa-solid fa-phone-volume contact-icon"
                    style={{ transform: "rotate(-45deg)" }}
                  ></i>
                  <a
                    target={"_blank"}
                    rel={"noreferrer"}
                    referrerPolicy="no-referrer-when-downgrade"
                    href="tel:+995 050 9994 850"
                    className="fs-4 text-nowrap"
                  >
                    +995 050 9994 850 /<br /> 054 6062 058
                  </a>
                </li>
                <li>
                  <i class="fa-solid fa-envelope contact-icon"></i>
                  <a
                    target={"_blank"}
                    rel={"noreferrer"}
                    referrerPolicy="no-referrer-when-downgrade"
                    href="info@tlancer.com"
                    className="fs-4"
                  >
                    info@tlancer.com
                  </a>
                </li>
                <li>
                  <i class="fa-brands fa-twitter fs-2 text-primary"></i>
                  <a
                    target={"_blank"}
                    rel={"noreferrer"}
                    referrerPolicy="no-referrer-when-downgrade"
                    href="https://www.twitter.com"
                    className="fs-4"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <i class="fa-brands fa-facebook fs-2 text-primary"></i>
                  <a
                    target={"_blank"}
                    rel={"noreferrer"}
                    referrerPolicy="no-referrer-when-downgrade"
                    href="https://www.facebook.com"
                    className="fs-4"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <i class="fa-brands fa-linkedin fs-2 text-primary"></i>
                  <a
                    target={"_blank"}
                    rel={"noreferrer"}
                    referrerPolicy="no-referrer-when-downgrade"
                    href="https://www.linkedin.com"
                    className="fs-4"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
