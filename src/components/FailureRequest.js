import React from "react";
import { Button } from "react-bootstrap";
import Footer from "./Footer";
import TopNavbar from "./TopNavbar";
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
            Submission failed&nbsp;&nbsp;
          </p>
          <p className="description py-4">
            Your information cannot be sent, due to a network error. <br />
            Please re-submit your contact form or send an email to us at
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
