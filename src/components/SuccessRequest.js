import React from "react";
import { Button } from "react-bootstrap";
import purple_vertical from "../assets/images/purple-vertical-bottom.png";
import pink_vertical from "../assets/images/pink-vertical-line.png";
import { Link } from "react-router-dom";

const SuccessRequest = () => {
  return (
    <>
      <div className="booking-submitted pt-4">
        <div
          className="text-center  container d-flex flex-column justify-content-center py-5"
          style={{ minHeight: "calc(101vh - 394px)" }}
        >
          <p className="heading mb-0">
            <img
              className="d-md-inline d-none img-1 vertical-4k"
              src={purple_vertical}
              width={60}
              height={40}
            />
            Booking submitted&nbsp;&nbsp;
            <img
              className="d-md-inline d-none img-2 vertical-4k"
              src={pink_vertical}
              width={60}
              height={40}
            />
          </p>
          <p className="description py-4">
            Thank you for booking a demo with StaySafe.
            <br /> Let us check the details, and we will get back to you to
            confirm the session.
          </p>
          <div>
            <Button className="btn-get-started" as={Link} to="/">
              Back to home
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-img-sub"></div>
    </>
  );
};

export default SuccessRequest;
