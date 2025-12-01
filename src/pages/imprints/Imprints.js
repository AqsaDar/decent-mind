import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import TopNavbar from "../../components/TopNavbar";
import "./Imprints.scss";
const Imprints = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <></>
  );
};

export default Imprints;
