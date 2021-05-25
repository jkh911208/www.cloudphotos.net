import React, { Fragment } from "react";

const imgStyle = {
  objectFit: "cover",
  maxWidth: "100%",
  height: "auto",
};

const linkStyle = {
  textDecoration: "none",
  color: "black",
  transform: "scale(1.2)",
  transition: "1s",
};

const Privacy = () => {
  return (
    <Fragment>
      <div className="pt-4 pb-4 bg-light">
        <div className="container pr-2 pl-2">
          <h1 className="pt-2 pb-4">
            <strong>Your Privacy Matter to Us</strong>
          </h1>
        </div>
      </div>
      <div className="pt-4 pb-4 bg-light">
        <div className="container pr-2 pl-2">
          <h5 className="pb-2">
            We will not sell your data include photos to anyone
          </h5>
        </div>
      </div>
      <div className="pt-4 pb-4">
        <div className="container pr-2 pl-2">
          <h5 className="pb-2">
            You are the one only able to see your photos and no one else have
            access to it.
          </h5>
        </div>
      </div>
      <div className="pt-4 pb-4 bg-light">
        <div className="container pr-2 pl-2">
          <h5 className="pb-2">
            You will be able to delete entire data from our server in future
            update
          </h5>
        </div>
      </div>
      <div className="pt-4 pb-4 ">
        <div className="container pr-2 pl-2">
          <h5 className="pb-2">
            You will be able to download entire data from our server in future
            update
          </h5>
        </div>
      </div>
    </Fragment>
  );
};

export default Privacy;
