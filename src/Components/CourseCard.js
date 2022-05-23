import titleDecoration from "../images/Logomark.png";

const CourseCard = (props) => {
  return (
    <>
      <style type="text/css">{`@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;600;700&display=swap');
        .custom-card {
          font-family: "Ubuntu", sans-serif;
          max-width: 380px;
          border: none;
          box-shadow: 0px 0px 30px rgba(14, 205, 136, .6);
          border-radius: 20px;
          transition: .2s;
        }
        .custom-card:hover {
          box-shadow: 0px 0px 80px 1px rgba(14, 205, 136, .4);
          transform: scale(1.03)
        }
        * {
          {/* border: 1px solid red; */}
        }
        .accent {
          width: 82px;
          height: 75px;
          margin-left: -1rem;
     }
        .course-img {
            width: 135px;
            height: 135px;
        }
      `}</style>
      <div align="center" className="py-5 px-0 m-5 me-auto custom-card">
        <div className="d-flex bg-white align-items-center justify-content-start mb-3 border-bottom-0 card-header position-relative w-75">
          <img className="accent" src={titleDecoration} alt="green diamonds" />
          <div className="fw-bold fs-3 position-absolute top-50 start-50 translate-middle m-3 card-title text-nowrap">
            {props.title}
          </div>
        </div>
        <img
          className="course-img mt-4"
          src={props.courseImage}
          alt="course icon"
        />
        <div className="mt-5 w-75 mx-auto pb-3 card-text text-start">
          {props.courseText}
        </div>
      </div>
    </>
  );
};

export default CourseCard;
