import hero from "../images/rear-view-programmer-working-all-night-long.png";
import elements from "../images/elements.png";

const HeroMain = () => {
  return (
    <>
      <style type="text/css">
        {`        
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');
         h1 {
             font-family: 'Ubuntu', sans-serif;
             font-size: 64px;
         }
         p {
             font-family: 'Ubuntu', sans-serif;
             font-size: 18px;
             color: #808080;
             letter-spacing: .8px;
         }
         .search-input {
             background: #b2e8d6;
             border-radius: 60px;
             font-family: 'Poppins', sans-serif;
             color: #000;
             font-size: 25px;
             width: 80%;
         }
         .bi-search {
           left: 1rem;
           top: .75rem;
         }
         .elements {
           top: -3rem;
           left: -2rem;
         }
         .hero-container {
           margin-top: 7rem;
         }
            `}
      </style>
      <section id="home2">
        <div className="container-fluid p-5 hero-container">
          <div className="row p-5">
            <div className="col pe-5">
              <h1 className="mb-5 fw-semibold">
                Learn any course at your own pace here from world class tutors
              </h1>
              <p className="fs-4 pe-3 pb-4">
                Hackton is the leading online coding tutor for beginners join us
                today to take a step further.Hackton is the leading online
                coding tutor for beginners join us today to take a step
                further.Hackton is the leading online coding tutor for beginners
                join us today to take a step further.
              </p>
            </div>
            <div className="col position-relative">
              <img
                className="position-absolute elements img-fluid"
                src={elements}
                width="730px"
                height="414px"
                alt="yellow triangle decorations"
              />
              <img
                className="ms-5 img-fluid"
                src={hero}
                width="880px"
                height="514px"
                alt="rear view of programmer working"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HeroMain;
