import studentImg from "../images/student-img.png";

const Student = () => {
  function studentHandler() {
    document.getElementById("student-signup-btn").style.display = "none";
    document.getElementById("student-form").style.display = "flex";
  }
  return (
    <>
      <style type="text/css">{`
      
      @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;600;700&display=swap');

            ::placeholder {
              color: black;
            }
            
            #student-form {
              position: relative;                     
              display: none;
              transition: .3s;
            }
            .student-img {
                max-width: 681px;
                max-height: 454px;
            }
            .tutor-text {
                line-height: 2.0 !important;
                font-weight: 500;
            }
            #student {
                background: #F3F4F6;
                width: 100%;
            }
            #student-signup-btn {
                letter-spacing: .8px;
                border: none;
                outline: none;
            }
            #submit {
              width: 100%!important;
            }
                       
            .tutor-btn {
                background: var(--main-green);
                width: 100%!important;
            }
            form input {
              border: 2px solid var(--main-green);              
            }
           
            `}</style>
      <section id="student">
        <div className="p-5 my-5 container-fluid">
          <div className="py-5 d-flex flex-column flex-lg-row m-5 justify-content-center align-items-start">
            <img
              className="mx-5 img-fluid pe-5 pt-5"
              alt="student on computer"
              src={studentImg}
            />

            <div className="px-0 mx-5 col">
              <h2 className="fw-bold h1">Register and join other students</h2>
              <p className="tutor-text fs-4 text-dark my-3">
                Join thousands of other students on Tlancer to teach millions
                across the globe. We provide the tools and skills to teach what
                you love.
              </p>
              <button
                onClick={studentHandler}
                id="student-signup-btn"
                className="btn btn-lg"
              >
                Sign Up Today
              </button>
              <form
                id="student-form"
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
                  className="tutor-btn mt-3 px-2 btn btn-lg text-nowrap"
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Student;
