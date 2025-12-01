import React, { useEffect, useState } from "react";
import "./Pricing.scss";
import Select from "react-select";
import { Button, Card } from "react-bootstrap";
import { pricing } from "../../constants/AppConstants";
import { Link } from "react-router-dom";

const Pricing = () => {
  const [pricingType, setPricingType] = useState(0);
  const plan_options = [
    {
      label: "1 - 100 Users",
      value: 0,
    },
    {
      label: "101 - 1,000 Users",
      value: 1,
    },
    {
      label: "1,000+ Users",
      value: 2,
    },
  ];
  const typeColor = (i) => {
    if (i == 0) {
      return "#FFAB4A";
    } else if (i == 1) {
      return "#F64256";
    } else {
      return "#4B4465";
    }
  };
  const reactSelectCustomization = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: state.isFocused
        ? "#3F626C !important"
        : "#E2E8F0 !important",
      boxShadow: "none",
      svg: {
        color: "#3F626C",
      },
    }),
    menu: (base) => ({
      ...base,
    }),
    menuList: (provided, state) => ({
      ...provided,
      padding: "20px 0",
      overflow: "hidden",
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      transition: "all .2s ease",
      transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      console.log({ data, isDisabled, isFocused, isSelected });
      return {
        ...styles,
        backgroundColor: isSelected
          ? "#3F626C !important"
          : isFocused
          ? "#F7FAFC !important"
          : null,
        color: isSelected ? "#ffffff" : isFocused ? "#2D3748" : null,
        borderRadius: "6px",
        width: "90%",
        margin: "auto",
        marginBottom: "1px",
      };
    },
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <>
      <section className="our-pricing">
        <div className="section-1 container">
          <p className="headline text-center my-5 pt-5">
            Our Plans
          </p>
          <p className="text-center mb-5 line-text">
            choose below the plan that best fits your team size
          </p>
          <div className="d-md-flex align-items-center justify-content-center mb-4">
            <p className="heading">Choose your team size:</p>
            <Select
              className="select ms-md-3"
              styles={reactSelectCustomization}
              options={plan_options}
              isSearchable={false}
              components={{
                // DropdownIndicator,
                IndicatorSeparator: () => null,
              }}
              onChange={(e) => {
                setPricingType(e.value);
              }}
              value={plan_options.filter(function (option) {
                return option.value === pricingType;
              })}
              // menuIsOpen={true}
            />
          </div>
          <div className="pricing-card d-md-flex py-5">
            {pricing.map((item, ind) => {
              return (
                ind == pricingType &&
                item.map((item2, ind2) => {
                  return (
                    <Card className="p-lg-4 p-3 mb-2" key={ind2}>
                      <div className="d-flex type justify-content-between">
                        <p
                          className="heading"
                          style={{ color: typeColor(ind2) }}
                        >
                          {item2.type}
                        </p>
                        <div className={`${ind2 == 1 ? "btn-div" : "d-none"}`}>
                          Most popular
                        </div>
                      </div>
                      <div className="price-container text-center position-relative">
                        <p className="price-month">{item2.per_month}</p>
                        <p className="price-year mb-1">
                          Total {item2.per_year} / year
                        </p>
                        <p className="bottom-text">Billed annually</p>
                        <div className="position-absolute monthly">
                          User /<br /> month
                        </div>
                        <Button
                          className="btn-get-started w-100"
                          as={Link}
                          to="/contact-us"
                        >
                          Purchase
                        </Button>
                        <p className="paragraph my-5 pb-4">
                          For the small-size company looking to promote
                          long-term safety habit for employees and staffs
                        </p>
                        <hr />
                      </div>
                      {/* <div className="plan-container">
                        <p className="heading-text pt-4">The plan includes:</p>
                        {item2.plans.map((plan, ind) => {
                          return (
                            <p className="plan" key={ind}>
                              {plan}
                            </p>
                          );
                        })}
                      </div> */}
                    </Card>
                  );
                })
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
