const ComingSoon = (props) => {
  return (
    <>
      <div className="container-fluid bg-secondary text-center my-5 p-5">
        <div className="row soon">
          <div className="display-5 pt-5 mt-5">{props.section} Section</div>
          <div className="h3 mb-5 pb-5 pt-2">Coming Soon ⏰</div>
        </div>
      </div>
    </>
  );
};
export default ComingSoon;
