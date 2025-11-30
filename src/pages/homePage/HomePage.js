import React, { useEffect, useState } from "react";
import home_getstarted from "../../assets/images/home-getstarted.jpeg";
import person from "../../assets/images/person.jpeg";
import grid from "../../assets/images/grid.png";
import content from "../../assets/images/content.png";
// import vector_green from "../../assets/images/vector-green.png";
import benefit_company from "../../assets/images/benefit-company.jpeg";
import benefit_team from "../../assets/images/benefit-team.jpeg";
import benefit_preview_app from "../../assets/images/benefit-preview-app.jpeg";
import content_overview from "../../assets/images/content-overview.png";
import more_industries from "../../assets/images/more-industries.png";
import staysafe_app from "../../assets/images/staysafe-app.jpeg";
import all_time from "../../assets/images/all-time.png";
import time from "../../assets/images/time.png";
import exclusive_content from "../../assets/images/exclusive-content.png";
import { Link } from "react-router-dom";
import "./HomePage.scss";
import { Button, Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  industries,
  ourClients,
  progress_steps,
} from "../../constants/AppConstants";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HomePage = () => {
  const [pricing, setPricing] = useState("false");
  const [companyBenifits, setCompanyBenefits] = useState(false);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 800 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
    },
  };
  const responsive_steps = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
    },
  };
  useEffect(() => {
    setPricing(true);
    setCompanyBenefits(true);
  }, []);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
  const dockToBenefits = () => {
    document.getElementById("company_benefits").scrollIntoView(true);
  };
  return (
    <>
      <div className="home">
        <section className="get-started py-5">
          <div className="container">
            <div className="row align-items-center">
              
              {/* Text Left */}
              <div className="col-lg-6 mb-4 mb-lg-0">
                <p className="headline text-uppercase fw-semibold mb-2">
                  Nurturing Positive Minds — One Step at a Time
                </p>

                <h1 className="heading fw-bold mb-4">
                  Modest Minds
                </h1>

                <p className="paragraph mb-4">
                  Modest Minds helps individuals and teams strengthen emotional well-being, 
                  mindset, and self-awareness. Through guided tools, mindful challenges, 
                  and positive reinforcement strategies; growth becomes not just possible, 
                  but enjoyable and sustainable.
                </p>

                <Button
                  className="btn-get-started"
                  as={Link}
                  to="/contact-us"
                >
                  Get Started
                </Button>
              </div>

              {/* Circle Image Right */}
              <div className="col-lg-6 d-flex justify-content-center">
                <div className="rounded-circle overflow-hidden" style={{ width: "380px", height: "380px" }}>
                  <img
                    src={home_getstarted}
                    alt="growth journey"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section Two */}
          <div className="container mt-5 pt-4">
            <div className="row align-items-center">

              {/* Image Left */}
              <div className="col-lg-6 mb-4 mb-lg-0">
                <img
                  src={person}
                  alt="well-being coaching"
                  className="img-fluid rounded"
                />
              </div>

              {/* Text Right */}
              <div className="col-lg-6">
                <p className="headline fw-semibold text-uppercase mb-2">
                  Built With Mindfulness Experts
                </p>

                <h2 className="heading fw-bold mb-4">
                  A Better Way to Learn and Grow
                </h2>

                <p className="paragraph">
                  Growth is more than knowledge! it’s routine, reflection, 
                  and meaningful action. Our content is crafted by certified 
                  mindset and well-being coaches to help you build confidence, 
                  emotional clarity, and positive daily habits; one experience 
                  at a time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="tailor-made-solution">
          {/* Section 1 — Content Types */}
          <div className="section-3">
            <div className="container">
              <h1 className="heading pb-4">🌱 Meaningful content built to inspire growth</h1>

              <div className="d-md-flex gap-md-4">

                {/* In-house Content */}
                <div className="col-md-6 d-flex">
                  <img className="icon" src={grid} height={70} width={70} alt="" />
                  <div className="py-4 ps-3">
                    <p className="headline">In-house content</p>
                    <p className="paragraph">
                      Discover a library of guided sessions, positivity challenges, and 
                      reflective exercises; all developed with emotional wellness coaches to 
                      support mindset growth and long-term habit building.
                    </p>
                  </div>
                </div>

                {/* Outsourced Content */}
                <div className="col-md-6 d-flex">
                  <img className="icon" src={content} height={70} width={70} alt="" />
                  <div className="py-4 ps-3">
                    <p className="headline">Custom-built programs</p>
                    <p className="paragraph">
                      Work with our content team to design mindfulness pathways uniquely tailored 
                      to your organization's values, culture, and well-being objectives.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="section-6">
            <div className="container d-md-flex">

              <div className="col-lg-6 pe-md-5">
                <div className="p-md-4">
                  <p className="headline">Give your people tools for a brighter mindset 🌞</p>
                  <p className="heading">Accessible anywhere</p>
                </div>

                <div className="icon-grid ps-md-4">
                  <p className="headline">🌿 Learning that fits your schedule</p>
                  <p className="paragraph">
                    Bite-sized uplifting content perfect for work breaks, morning routines, 
                    or commute learning.
                  </p>
                </div>

                <div className="icon-grid ps-md-4 mt-3">
                  <p className="headline">🌿 Reflection-based growth</p>
                  <p className="paragraph">
                    Every module includes guided reflection or a meaningful check-in to reinforce learning.
                  </p>
                </div>
              </div>

              <div className="col-md-6 d-flex px-md-4 justify-content-end">
                <img src={benefit_team} className="w-100 h-100" alt="" />
              </div>

            </div>
          </div>
          {/* Section 5 — App Preview */}
        </section>


        <section className="industries-from-staysafe">
          {/* <div className="section-8">
            <div className="container">
              <Card className="industries p-md-5">
                <div className="position-absolute bg-img-top"></div>
                <div className="m-4">
                  <p className="headline text-center text-md-start mb-md-4">
Modest Minds works beautifully across industries
                  </p>
                  <div className="d-md-flex justify-content-between align-items-stretch ms-lg-5">
                    {[{name: 'Education'},
                      {name: 'Corporate'},
                      {name: 'Healthcare'}
                    ].map((item, ind) => {
                      return (
                        <div
                          key={ind}
                          className="d-flex flex-column justify-content-between align-items-center"
                        >
                          <img src={item?.image} height={100} width={100} />
                          <p className="industry-name">{item.name}</p>
                        </div>
                      );
                    })}
                    <div className="d-flex flex-column justify-content-between align-items-center">
                      <img
                        src={more_industries}
                        height={16}
                        width={50}
                        className="mt-4 more-img"
                      />
                      <p className="industry-name">What our community says 💬
</p>
                    </div>
                  </div>
                </div>
                <div className="position-absolute bg-img-bottom"></div>
              </Card>
            </div>
          </div> */}
          <div className="section-9">
            <div className="container our-clients text-center py-5">
              <h2 className="headline mb-5 pt-2">What our clients say</h2>
              {/* <Carousel itemClass="my-item" responsive={responsive}>
                {ourClients.map((item, index) => {
                  return (
                    <div
                      className="client-card d-flex flex-column justify-content-evenly m-lg-3 m-sm-4 m-4"
                      key={index}
                    >
                      <p className="paragraph">{item.description}</p>
                      <div className="d-md-flex">
                        <img src={item.avater} heigth={100} width={100} />
                        <div className="d-md-flex flex-column align-items-start justify-content-center">
                          <p className="name mb-0">{item.name}</p>
                          <p className="designation mb-0">{item.designation}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Carousel> */}
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                // slidesPerView={3}
                breakpoints={{
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 1,
                  },
                  // when window width is >= 768px
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                {ourClients.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="client-card m-4 d-flex flex-column justify-content-between">
                        <div className="d-md-flex align-items-center justify-content-center gap-3">
                          <div className="d-md-flex flex-column align-items-start justify-content-center">
                            <p className="name mb-0">{item.name}</p>
                            <p className="designation mb-0">
                              {item.designation}
                            </p>
                          </div>
                          <img
                            className="avater"
                            src={item?.avater}
                            heigth={100}
                            width={100}
                          />
                        </div>
                        <p className="paragraph mb-5">{item.description}</p>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          {/* <div className="section-10 py-4" id="pricing">
            <div className="container ">
              <div className="d-md-flex flex-row align-items-start">
                <div className="col-md-6 pe-lg-4 py-lg-5">
                  <p className="headline">Start your positive journey today</p>
                  <h1 className="heading">
                    Get started <br />
                  </h1>
                  <p className="paragraph mb-4">
                    Turn small mindful actions into meaningful transformation.
 Modest Minds makes personal growth simple, enjoyable, and sustainable.
                  </p>
                  <Button className="btn-get-started" as={Link} to="/pricing">
                    See prices
                  </Button>
                </div>
                <div className="col-md-6 p-md-4 text-end">
                  <img
                    className="image"
                    src={staysafe_app}
                    style={{ height: "100%", width: "90%" }}
                  />
                </div>
              </div>
            </div>
          </div> */}

          <div className="section-10 py-5" id="pricing">
  <div className="container">

    <div className="row align-items-center">

      {/* Text */}
      <div className="col-md-6 pe-lg-4 mb-4 mb-md-0">

        <p className="headline mb-2">
          Start Your Positive Journey
        </p>

        <h1 className="heading mb-3">
          Join Modest Minds
        </h1>

        <p className="paragraph mb-4">
          Growth doesn’t have to feel overwhelming. With Modest Minds, reflection,
          calm routines, and mindful actions gently integrate into your daily rhythm
          helping you build clarity, confidence, and emotional balance one step at a time.
        </p>

        <Button className="btn-get-started" as={Link} to="/pricing">
          View Plans
        </Button>
      </div>

      {/* Image */}
      <div className="col-md-6 text-center text-md-end">
        <img 
          src={staysafe_app}
          alt="Using Modest Minds Platform"
          className="image"
          style={{
            width: "100%",
            maxWidth: "480px",
            borderRadius: "12px",
            objectFit: "cover"
          }} 
        />
      </div>

    </div>
  </div>
</div>

          <div className="section-11">
            <div className="carousel-progress-steps container">
              {/* <Carousel itemClass="my-item" responsive={responsive_steps}>
                {progress_steps.map((item, index) => {
                  return (
                    <div
                      className="d-md-flex justify-content-center"
                      key={index}
                    >
                      <div className="d-flex flex-column align-items-stretch justify-content-center">
                        <p
                          style={{
                            opacity:
                              index == 2 || index == 3 || index == 4
                                ? "1"
                                : "0",
                          }}
                          className="upper-text text-center"
                        >
                          {item.headline}
                        </p>
                        <div className="d-flex align-items-center justify-content-center">
                          <img src={item.icon} height={90} width={126} />
                          <hr
                            style={{
                              opacity:
                                index < progress_steps.length - 1 ? "1" : "0",
                            }}
                          />
                        </div>
                        <p
                          style={{
                            opacity:
                              index == 2 || index == 3 || index == 4
                                ? "0"
                                : "1",
                            fontWeight:
                              index == progress_steps.length - 1
                                ? "500"
                                : "400",
                          }}
                          className="lower-text text-center"
                        >
                          {item.headline}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </Carousel> */}

              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                // slidesPerView={3}
                breakpoints={{
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 1,
                  },
                  // when window width is >= 768px
                  768: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 7,
                  },
                }}
                navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                {progress_steps.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="d-md-flex justify-content-center">
                        <div className="d-flex flex-column align-items-stretch justify-content-center">
                          <p
                            style={{
                              opacity:
                                index == 2 || index == 3 || index == 4
                                  ? "1"
                                  : "0",
                            }}
                            className="upper-text text-center"
                          >
                            {item.headline}
                          </p>
                          <div className="d-flex align-items-center justify-content-center">
                            <img
                              src={item.icon}
                              height={90}
                              width={126}
                              className="step-icon"
                            />
                            <hr
                              style={{
                                opacity:
                                  index < progress_steps.length - 1 ? "1" : "0",
                              }}
                            />
                          </div>
                          <p
                            style={{
                              opacity:
                                index == 2 || index == 3 || index == 4
                                  ? "0"
                                  : "1",
                              fontWeight:
                                index == progress_steps.length - 1
                                  ? "500"
                                  : "400",
                            }}
                            className="lower-text text-center"
                          >
                            {item.headline}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
