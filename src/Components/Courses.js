import CourseCard from "./CourseCard";
import xd from "../images/xd.png";
import python from "../images/python.png";
import figma from "../images/figma.png";
import dataScience from "../images/data_science.png";

const Courses = () => {
  return (
    <>
      <style type="text/css">
        {`.my-container {
        margin-bottom: 6rem;
      }`}
      </style>
      <div
        fluid
        className="my-container py-5 px-5 mt-5 position-relative container-fluid"
      >
        <h2 className="fs-1 fw-bold mb-5">Popular Courses</h2>
        <div className="row">
          <CourseCard
            title={"Adobe Xd"}
            courseImage={xd}
            courseText="Lorem ipsum dolor sit amet, consectetur adipiscing elit
adipiscing elit consectetur "
          />
          <CourseCard
            title={"Python"}
            courseImage={python}
            courseText="Lorem ipsum dolor sit amet, consectetur adipiscing elit
adipiscing elit consectetur "
          />
          <CourseCard
            title={"Figma"}
            courseImage={figma}
            courseText="Lorem ipsum dolor sit amet, consectetur adipiscing elit
adipiscing elit consectetur "
          />
          <CourseCard
            title={"Data Science"}
            courseImage={dataScience}
            courseText="Lorem ipsum dolor sit amet, consectetur adipiscing elit
adipiscing elit consectetur "
          />
        </div>
        <h3 className="fw-bold position-absolute end-0 translate-middle-x">
          View more
        </h3>
      </div>
    </>
  );
};

export default Courses;
