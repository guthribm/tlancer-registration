import unsplash1 from "../images/unsplash-1.png";
import unsplash2 from "../images/unsplash-2.png";
import unsplash3 from "../images/unsplash-3.png";

const Blog = () => {
  return (
    <>
      <style type="text/css">{`@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap');
        ::root {
            --ubuntu: "Ubuntu", sans-serif
        }
        .blog-row {
            background: #f3f4f6;     
            margin-bottom: 8rem;       
        }
        .blog-container, .blog-row p {
            font-family: 'Ubuntu', sans-serif;
            color: #000;            
        }
        .blog-img {
            width: 500px;
            height: 333px;
        }
        @media (max-width: 992px){
            .blog-row {
                flex-direction: column;
                margin: 2rem auto;
            }
    `}</style>
      <div className="w-100 m-auto px-0 blog-container container-fluid">
        <h2 className="text-center p-5 fs-1 fw-bold">Blog & Updates</h2>
        <div className="blog-row w-100 pt-5 pe-5 ps-4 pb-0 mx-0 row">
          <div className="text-center fw-normal container-fluid">
            <h3>Read our community blog to stay updated</h3>
          </div>
          <div className="w-25 border-0 my-5 mx-auto px-0 bg-transparent card">
            <img
              className="mb-3 blog-img card-img-top"
              src={unsplash1}
              alt="coffee cup and magazine"
            />
            <div className="lh-lg w-75 card-text ">
              <p className="fw-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet.......
              </p>
            </div>
          </div>
          <div className="w-25 border-0 my-5 mx-auto px-0 bg-transparent card">
            <img
              className="mb-3 blog-img card-img-top"
              style={{ width: "541px" }}
              src={unsplash2}
              alt="coffee cup and laptop"
            />
            <div className="lh-lg w-100 card-text ">
              <p className="fw-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus aliquam,
                purus........
              </p>
            </div>
          </div>
          <div className="w-25 border-0 my-5 mx-auto px-0 bg-transparent">
            <img
              className="mb-3 blog-img"
              variant="top"
              src={unsplash3}
              alt="woman reading book"
            />
            <div className="lh-lg w-100 ">
              <p className="fw-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus aliquam,
                purus........
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
