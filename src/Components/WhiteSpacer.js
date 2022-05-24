const WhiteSpacer = (props) => {
  return (
    <>
      <style type="text/css">{`.spacer {
      background: #fff;
      margin: 2rem 0;
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

export default WhiteSpacer;
