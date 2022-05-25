import tutorImg from "../images/instructor.png";

const Tutor = () => {
  function tutorHandler() {
    document.getElementById("tutor-signup-btn").style.display = "none";
    document.getElementById("tutor-form").style.display = "flex";
  }
  return (
    <>
      <style type="text/css">{`@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;600;700&display=swap');
              {/* .tutor-img {
                max-width: 541px;
                max-height: 501px;
            } */}
            #tutor-form {
              position: relative;                     
              display: none;
              transition: .3s;
            }
            #tutor-signup-btn {
                letter-spacing: .8px;
                border: none;
                outline: none;
            }
            .tutor-text {
                line-height: 2.0 !important;
                font-weight: 500;
            }
            #tutor {
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
      <section id="tutor">
        <div className="p-5 my-5 container-fluid">
          <div className="py-5 m-5 d-flex mx-auto justify-content-center align-items-center flex-lg-row">
            <div className="left align-self-start px-5 mx-5 mt-5 col">
              <h2 className="fw-bold h1 w-100">Become a Tutor Today</h2>
              <p className="tutor-text fs-4 text-dark my-3">
                Join thousands of other instructors on Tlancer to teach millions
                across the globe. We provide the tools and skills to teach what
                you love.
              </p>
              <button
                onClick={tutorHandler}
                id="tutor-signup-btn"
                className="mt-4 px-3 btn btn-lg"
              >
                Start Teaching Today
              </button>
              <form
                id="tutor-form"
                className="flex-column w-50"
                action="mailto:guthribm@gmail.com"
                method="post"
                encType="text/plain"
              >
                <input
                  className="my-3 fs-4 p-1 ps-2 rounded"
                  type={"text"}
                  placeholder="First Name"
                />
                <input
                  className="my-3 fs-4 p-1 ps-2 rounded"
                  type={"text"}
                  placeholder="Surname"
                />
                <input
                  className="my-3 fs-4 p-1 ps-2 rounded"
                  type={"email"}
                  placeholder="Email Address"
                />
                <input
                  className="my-3 fs-4 p-1 ps-2 rounded"
                  type={"phone"}
                  placeholder="Phone Number"
                />
                <button
                  type="submit"
                  className="tutor-btn mt-3 px-2 btn btn-lg text-nowrap w-100"
                >
                  Submit
                </button>
                {/* <button
                  type="reset"
                  className="tutor-btn mt-2 px-3 btn btn-primary"
                >
                  Reset
                </button> */}
              </form>
            </div>

            <img
              className="tutor-img pe-5 me-5 img-fluid mt-5"
              alt="man with beard"
              src={tutorImg}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Tutor;
