const ContactUs = () => {
  return (
    <>
      <style>{`
        ul {
            padding-left: 0;
            margin-left: 2rem;
        }
        li {
            list-style: none;
            margin: 0 auto 2rem;
        }
        
        .contact-icon {                   
            color: black;
            padding: .75rem;
            border-radius: 5rem;
            background: #B2E8D6;
            font-size: 1.25rem;
            margin-right: 1rem;       
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
    `}</style>
      <section id="contact" className="p-5">
        <div className="container-fluid p-5 pb-3 mx-auto my-0">
          <h2 className="h1 text-center fw-bold">Contact Us</h2>
          <p className="fs-3 lh-lg py-4 px-2 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris,
            nullam vivamus massa orci eros, adipiscing ut velit. Quis
            scelerisque sit duis ut eget ornare. Id sed porttitor est odio quis
            in egestas. Dignissim nec id amet blandit semper.
          </p>
        </div>
        <div className="d-flex flex-column w-75 flex-lg-row px-5 mx-auto mb-1 justify-content-center">
          <div className="d-flex container-fluid">
            <iframe
              className="mx-auto pe-5"
              title="tbilisi-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190556.07526446038!2d44.698426158779384!3d41.73262998765188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd7e64f626b%3A0x61d084ede2576ea3!2sTbilisi%2C%20Georgia!5e0!3m2!1sen!2sus!4v1653438434499!5m2!1sen!2sus"
              width="900"
              height="400"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="d-flex flex-column">
            <ul id="contact-list">
              <li>
                <a
                  target={"_blank"}
                  rel={"noreferrer"}
                  referrerpolicy="no-referrer-when-downgrade"
                  href="https://goo.gl/maps/wzCKw1qwtKDLsFKi8"
                  className="fs-4"
                >
                  <i class="fa-solid fa-location-dot contact-icon"></i>
                  Georgia, Tibilisi
                </a>
              </li>
              <li>
                <a
                  target={"_blank"}
                  rel={"noreferrer"}
                  referrerpolicy="no-referrer-when-downgrade"
                  href="tel:+995 050 9994 850"
                  className="fs-4 text-nowrap"
                >
                  <i
                    class="fa-solid fa-phone-volume contact-icon"
                    style={{ transform: "rotate(-45deg)" }}
                  ></i>
                  +995 050 9994 850 / 054 6062 058
                </a>
              </li>
              <li>
                <a
                  target={"_blank"}
                  rel={"noreferrer"}
                  referrerpolicy="no-referrer-when-downgrade"
                  href="info@tlancer.com"
                  className="fs-4"
                >
                  <i class="fa-solid fa-envelope contact-icon"></i>
                  info@tlancer.com
                </a>
              </li>
              <li>
                <a
                  target={"_blank"}
                  rel={"noreferrer"}
                  referrerpolicy="no-referrer-when-downgrade"
                  href="https://www.twitter.com"
                  className="fs-4"
                >
                  <i class="fa-brands fa-twitter me-4 fs-2 text-primary"></i>
                  Twitter
                </a>
              </li>
              <li>
                <a
                  target={"_blank"}
                  rel={"noreferrer"}
                  referrerpolicy="no-referrer-when-downgrade"
                  href="https://www.facebook.com"
                  className="fs-4"
                >
                  <i class="fa-brands fa-facebook me-4 fs-2 text-primary"></i>
                  Facebook
                </a>
              </li>
              <li>
                <a
                  target={"_blank"}
                  rel={"noreferrer"}
                  referrerpolicy="no-referrer-when-downgrade"
                  href="https://www.linkedin.com"
                  className="fs-4"
                >
                  <i class="fa-brands fa-linkedin me-4 fs-2 text-primary"></i>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
