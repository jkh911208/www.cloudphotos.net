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

const Support = () => {
  return (
    <Fragment>
      <div className="pt-4 pb-4 bg-light">
        <div className="container pr-2 pl-2">
          <h1 className="pt-2 pb-4">
            <strong>Cloud Photos Support Page</strong>
          </h1>
        </div>
      </div>

      <div className="pt-4 pb-4">
        <div className="container pr-2 pl-2">
          <h5 className="pb-2">
            Is Cloud Photos free of charge?
          </h5>
          <p className="pb-4">YES!, Cloud Photos is 100% free and no limitation on how many photos you can save</p>
        </div>
      </div>

      <div className="pt-4 pb-4 bg-light">
        <div className="container pr-2 pl-2">
          <h5 className="pb-2">
            Does Cloud Photos support original quality backup?
          </h5>
          <p className="pb-4">We are planning to introduce original quality backup</p>
        </div>
      </div>

      <div className="pt-4 pb-4">
        <div className="container pr-2 pl-2">
          <h5 className="pb-2">
            Can I download saved media to my computer?
          </h5>
          <p className="pb-4">Currenly we only support mobile app, but we are working on website to view and downoad your media</p>
        </div>
      </div>

      <div className="pt-4 pb-4 bg-light">
        <div className="container pr-2 pl-2">
          <h5 className="pb-2">
            Does Cloud Photos backup video as well?
          </h5>
          <p className="pb-4">We are working so hard to provide free video backup as well.</p>
        </div>
      </div>

      <div className="pt-4 pb-4">
        <div className="container pr-2 pl-2">
          <h5 className="pb-2">
            What format of photo does Cloud Photo support?
          </h5>
          <p className="pb-4">Curent we only support JPEG/JPG, but we are working hard to support HEIC and many more popular format in near future</p>
        </div>
      </div>

      <div className="pt-4 pb-4 bg-light">
        <div className="container pr-2 pl-2">
          <h5 className="pb-2">
            Why not all of my photos are backed up?
          </h5>
          <p className="pb-4">Due to the resource constraint, we currently only upload medias that is no more than 7 days old.</p>
        </div>
      </div>

      <div className="pt-4 pb-4">
        <div className="container pr-2 pl-2">
          <h5 className="pb-2">
            How can I contact Cloud Photos?
          </h5>
          <p className="pb-4">Please feel free to email us at gyuhyong.jeon@gmail.com. I know we are working on getting our own support email</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Support;
