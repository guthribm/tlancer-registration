import tutorImg from "../images/instructor.png";

const Tutor = () => {
  return (
    <>
      <style type="text/css">{`@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;600;700&display=swap');
      .tutor-img {
        width: 541px;
        height: 501px;
    }
            .tutor-text {
                line-height: 2.0 !important;
                font-weight: 500;
            }
            .tutor {
                background: #F3F4F6;
                width: 100%;
            }
            .tutor-btn {
                background: #0ECD88;
                letter-spacing: .8px;
                border: none;
            }
            .left {
                width: 50px;

            }
            `}</style>
      <div fluid className="tutor p-5 my-5 container-fluid">
        <div className="py-5 m-5 w-75 d-flex mx-auto justify-content-center align-items-center row">
          <div className="left align-self-start px-0 mx-0 mt-5 col">
            <h2 className="fw-bold fs-1 w-100">Become a Tutor Today</h2>
            <p className="tutor-text fs-4 w-100 text-dark my-3">
              Join thousands of other instructors on Tlancer to teach millions
              across the globe. We provide the tools and skills to teach what
              you love.
            </p>
            <button className="tutor-btn mt-4 px-3 btn btn-primary">
              Start Teaching Today
            </button>
          </div>
          <img
            className="tutor-img mx-5 img-fluid"
            alt="man with beard"
            src={tutorImg}
          />
        </div>
      </div>
    </>
  );
};

export default Tutor;
