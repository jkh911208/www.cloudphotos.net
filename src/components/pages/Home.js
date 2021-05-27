import React, { Fragment } from "react";
import Jumbotron from "../subcomponents/Jumbotron";

const Home = () => {
  return (
    <Fragment>
      <Jumbotron />
      <div className="container mb-4">
        <div className="mb-4 pl-2 pr-2">
          <h1 className="pt-1 pb-2">
            <strong>Backup your photos to Cloud Photos for free</strong>
          </h1>
          <p className="pt-2">
            Cloud Photos back up your photos for free and store in our server.
            You can view your photos from any iOS and Android devices that is
            compatible with our app
          </p>
          <p className="pt-2">
            We are working very hard to expand and improve your experience. You
            will be able to access your photos from your favorite web browser in
            the near future.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
