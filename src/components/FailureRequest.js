import React from "react";
import { Button } from "react-bootstrap";
import Footer from "./Footer";
import TopNavbar from "./TopNavbar";
import purple_vertical from "../assets/images/purple-vertical-bottom.png";
import pink_vertical from "../assets/images/pink-vertical-line.png";
import { Link } from "react-router-dom";

const FailureRequest = () => {
  const bookaDemo = () => {
    window.location.reload();
  };
  return (
    <>
      <div className="booking-submitted pt-4">
        <div
          className="text-center container  d-flex flex-column justify-content-center py-5"
          style={{ minHeight: "calc(101vh - 394px)" }}
        >
          <p className="heading mb-0">
            <img
              className="d-md-inline d-none img-1 vertical-4k"
              src={purple_vertical}
              width={60}
              height={40}
            />
            Submission failed&nbsp;&nbsp;
            <img
              className="d-md-inline d-none img-2 vertical-4k"
              src={pink_vertical}
              width={60}
              height={40}
            />
          </p>
          <p className="description py-4">
            Your information cannot be sent, due to a network error. <br />
            Please re-submit your contact form or send an email to us at
            info@staysafe.digital
          </p>
          <div>
            <Button className="btn-get-started" as={Link} to="/contact-us">
              Book a demo
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-img-sub"></div>
    </>
  );
};

export default FailureRequest;
