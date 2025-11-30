import React, { useEffect } from "react";
import "./AboutUs.scss";
import { our_team } from "../../constants/AppConstants";
import { Card } from "react-bootstrap";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <>
      <div className="about">
        <section className="about-us">
          <div className="section-1 container">
            <div className="d-md-flex align-items-center justify-content-center mt-5">
              <div className="col-md-6 about-us-img-content d-flex flex-column justify-content-between align-items-center">
                <div className="d-flex justify-content-between linkedin-section mt-2 mt-md-0">
                  <p className="heading mb-0">Modest Minds</p>
                </div>
                <p className="paragraph mt-4 mb-0">
                  Modest Minds is a creative agency that specializes in video
                  production, content creation, and digital marketing. We are
                  passionate about storytelling and helping brands connect with
                  their audiences through compelling visual content.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="our-team container pt-4 mt-4">
          <p className="headline my-md-5 text-center">Our Team</p>
          <div className=" team-card-container mb-2 align-items-stretch">
            {our_team.map((item, index) => {
              return (
                <div key={index} className="h-100">
                  <Card
                    style={{
                      background: index % 2 == 0 ? "#F7FAFA" : "#FCF7EB",
                    }}
                    className="mb-2 h-100"
                  >
                    <div className="position-absolute bg-img"></div>
                    <div className="d-flex p-md-4 p-2 align-items-center ">
                      <div className="avater rounded-circle">
                        {/* <Avatar src={item.avater} height={80} width={80} /> */}
                      </div>
                      <div className="content ps-3 w-75">
                        <p className="name mb-0">{item.name}</p>
                        <p className="designation mb-0 w-75">
                          {item.designation}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
          {/* <p className="bottom-text mb-5 pb-4 mt-4">
            and a huge team of production crews...
          </p> */}
        </section>
      </div>
    </>
  );
};

export default AboutUs;
