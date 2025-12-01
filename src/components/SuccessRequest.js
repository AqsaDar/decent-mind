import React from "react";
import { Button } from "react-bootstrap";
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
            Booking submitted&nbsp;&nbsp;
          </p>
          <p className="description py-4">
            Thank you for booking a demo with ModestMind.
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
