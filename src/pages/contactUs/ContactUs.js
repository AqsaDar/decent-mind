import React, { useEffect, useState } from "react";
import ContactUsForm from "../../components/ContactUsForm";
import contact_us from "../../assets/images/contact-us.png";
import TopNavbar from "../../components/TopNavbar";
import Footer from "../../components/Footer";
import "./ContactUs.scss";
import SuccessRequest from "../../components/SuccessRequest";
import FailureRequest from "../../components/FailureRequest";
const ContactUs = () => {
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submissionFail, setSubmissionFail] = useState(false);
  useEffect(
    () => {
      if (submissionSuccess) {
        debugger;
      } else if (submissionFail) {
        debugger;
      }
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    },
    [submissionSuccess, submissionFail]
    // []
  );

  return (
    <>
      {submissionSuccess ? (
        <SuccessRequest />
      ) : submissionFail ? (
        <FailureRequest />
      ) : (
        <div className="contact-us py-5">
          <div className="container mt-5 pb-4">
            <div className="d-lg-flex">
              <div className="col-lg-6 section-1 d-flex flex-column justify-content-between">
                <div className="pe-md-5">
                  <p className="heading">
                    Get in touch&nbsp;
                  </p>
                  <p className="description">
                    Schedule a 30-minute product demo with our team and
                    <br /> get to know StaySafe
                  </p>
                </div>
                <div>
                  <img
                    src={contact_us}
                    className="pe-md-5"
                    style={{ width: "90%" }}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <ContactUsForm
                  setSubmissionSuccess={setSubmissionSuccess}
                  setSubmissionFail={setSubmissionFail}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactUs;
