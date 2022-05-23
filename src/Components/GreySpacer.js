const GreySpacer = (props) => {
  return (
    <>
      <style type="text/css">{`.spacer {
      background: #F3F4F6;
      margin: 5rem 0 0;
  }`}</style>
      <div
        className="spacer w-100 container-fluid"
        style={{ height: props.height }}
      >
        {" "}
      </div>
    </>
  );
};

export default GreySpacer;
