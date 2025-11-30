import React from "react";
import { Button } from "react-bootstrap";
import Footer from "./Footer";
import TopNavbar from "./TopNavbar";
import icon404 from "../assets/images/icon404.png";
import "./components.scss";
import { Link } from "react-router-dom";
const Page404 = () => {
  return (
    <>
      <div className="page404 booking-submitted">
        <div
          className="text-center  container d-flex flex-column justify-content-center py-5"
          style={{ minHeight: "calc(100vh - 330px)" }}
        >
          <div>
            <img src={icon404} />
          </div>
          <p className="headline mb-0">404</p>
          <p className="heading mb-0">Page not found</p>
          <p className="description py-4">
            The page you looking for does not exist or an other error occurred.
            <br />
            Select the button below to go back to the homepage
          </p>
          <dv>
            <Button className="btn-get-started" to="/" as={Link}>
              Back to home
            </Button>
          </dv>
        </div>
      </div>
      <div className="bg-img-sub"></div>
    </>
  );
};

export default Page404;
