import React, { useEffect } from "react";
import "./DataPolicy.scss";
import TopNavbar from "../../components/TopNavbar";
import Footer from "../../components/Footer";
const DataPolicy = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <>
      <div className="bg-img-sub" style={{ height: "72px" }}></div>
    </>
  );
};

export default DataPolicy;
