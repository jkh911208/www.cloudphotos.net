import React, { Fragment } from "react";

const jumbotronStyle = {
  backgroundSize: "cover",
  backgroundColor: "transparent",
  backgroundImage: "url(./images/jumbotron.jpg)"
};

const jumbotronTextStyle = {
  color: "white",
  textAlign: "center",
  fontSize: "6vw"
};

const Jumbotron = () => {
  return (
    <Fragment>
      <div className="jumbotron jumbotron-fluid" style={jumbotronStyle}>
        <div className="container">
          <h1 style={jumbotronTextStyle}>Backup your photos for FREE!</h1>
          <h1 style={jumbotronTextStyle}>Cloud Photos is always free</h1>
        </div>
      </div>
    </Fragment>
  );
};

export default Jumbotron;
