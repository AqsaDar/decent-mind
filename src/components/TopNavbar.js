import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./components.scss";
import header_logo from "../assets/images/header-logo.jpg";
import chev_down from "../assets/images/chev-down.png";
import chev_up from "../assets/images/chev-up.png";
import globe from "../assets/images/globe.png";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { translationData } from "./services/TranslationService";
import ClickAwayListener from "@mui/material/ClickAwayListener";

const TopNavbar = ({ callingBenifits }) => {
  const [selectedTranslation, setSelectedTranslation] = useState("EN");
  const [pricing2, setPricing2] = useState(false);
  const [companyBenifits2, setCompanyBenifits2] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);
  const [smallScreen, setSmallScreen] = useState(false);
  const [largerDevice, setLargerDevice] = useState(false);
  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClickAway = () => {
    setShowDropdown(false);
  };
  // scroll direction hook
  function useScrollDirection() {
    useEffect(() => {
      let lastScrollY = window.pageYOffset;

      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (
          direction !== scrollDirection &&
          (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
        ) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      if (window.innerWidth > 992) {
        window.addEventListener("scroll", updateScrollDirection); // add event listener
        return () => {
          window.removeEventListener("scroll", updateScrollDirection); // clean up
          setSmallScreen(false);
          setLargerDevice(false);
        };
      } else {
        window.removeEventListener("scroll", updateScrollDirection);
        if (window.innerWidth < 768) {
          setSmallScreen(true);
          setLargerDevice(false);
        } else {
          setSmallScreen(false);
          setLargerDevice(true);
        }
      }
    }, [scrollDirection]);

    return scrollDirection;
  }

  const navigate = useNavigate();
  const scroll_top = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };
  const OurSolutionDoc = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("company_benifits").scrollIntoView(true);
    }, 1000);
  };
  useEffect(() => {
    setCompanyBenifits2(callingBenifits);
  }, [callingBenifits]);

  useEffect(() => {
    if (selectedTranslation !== "KO") {
      let trans = async () => {
        await translationData(selectedTranslation.toLocaleLowerCase());
      };
      trans();
    }
  }, [selectedTranslation]);
  const styleDesktop = {
    opacity: `${useScrollDirection() === "down" ? "0" : "1"}`,
    visibility: `${useScrollDirection() === "down" ? "hidden" : "visible"}`,
    transitionDuration: "0.5s",
    transitionProperty: "opacity visibility",
  };
  const styleLaptop = {
    opacity: "1",
    visibility: "visible",
    transitionDuration: "0.5s",
    transitionProperty: "opacity visibility",
  };
  const stylelargerDevice = {
    opacity: "1",
    visibility: "visible",
    transitionDuration: "0.5s",
    transitionProperty: "opacity visibility",
  };
  return (
    <Navbar
      expand="lg"
      className="top-nav"
      id="navbar"
      style={
        smallScreen
          ? styleLaptop
          : largerDevice
          ? stylelargerDevice
          : styleDesktop
      }
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={header_logo}
            height={40}
            width={55}
            onClick={() => scroll_top()}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 ms-lg-4 justify-content-center">
            {/* <LinkContainer to="/about-us"> */}

            <Nav.Link as={Link} to="/about-us" onClick={() => scroll_top()}>
              About us
            </Nav.Link>

            <Nav.Link onClick={OurSolutionDoc} as={Link} to="/">
              Our solutions
            </Nav.Link>

            <Nav.Link as={Link} to={"/pricing"} onClick={() => scroll_top()}>
              Pricing
            </Nav.Link>
            {/* <div className="custom-dropdown-container">
              <ClickAwayListener onClickAway={handleClickAway}>
                <Dropdown
                  align={"end"}
                  onSelect={(e) => {
                    setSelectedTranslation(e);
                  }}
                  show={showDropdown}
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <img src={globe} height={24} width={24} />
                    &nbsp;&nbsp; {selectedTranslation} &nbsp;&nbsp;
                    <img
                      src={!showDropdown ? chev_down : chev_up}
                      height={30}
                      width={30}
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      active={selectedTranslation == "EN" ? true : false}
                      eventKey={"EN"}
                      value={"english"}
                    >
                      <b>EN</b> - English
                    </Dropdown.Item>
                    <Dropdown.Item
                      disabled
                      active={selectedTranslation == "DE" ? true : false}
                      eventKey={"DE"}
                    >
                      <b>DE</b> - Deutsch
                    </Dropdown.Item>
                    <Dropdown.Item
                      disabled
                      active={selectedTranslation == "KO" ? true : false}
                      eventKey={"KO"}
                    >
                      <b>KO</b> - Korean
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ClickAwayListener>
            </div> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  // );
};

export default TopNavbar;
