import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import TopNavbar from "../../components/TopNavbar";
import "./Imprints.scss";
import pink_vertical from "../../assets/images/pink-vertical-line.png";
const Imprints = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <>
      <div className="imprint">
        <div className=" container py-5">
          <p className="headline mb-4">
            Imprint &nbsp;
            <img
              src={pink_vertical}
              className="mt-4 vertical-4k"
              height={40}
              width={55}
            />
          </p>
          {/* start  */}
          <p>StaySafe is a brand of stayX GmbH</p>
          <br />
          <p className="heading">stayX GmbH</p>
          <p>Ludwig-Erhard-Allee 20</p>
          <p>76131 Karlsruhe</p>
          <p>+49 721 6190970</p>
          <p>welcome@stayX.digital</p>
          <br />
          <br />
          <p>Responsible for content according to § 55 Abs. 2 RStV:</p>
          <p className="heading">stayX GmbH</p>
          <p>Ludwig-Erhard-Allee 20</p>
          <p>76131 Karlsruhe</p>
          <br />
          <p>HRB 722615, Mannheim District Court</p>
          <p>Corporate Headquarters: Karlsruhe</p>
          <p>VAT ID: DE346217368</p>
          <p>
            © Copyright 2023 <b>stayX GmbH</b> – All rights reserved.
          </p>
          <p>
            The content of this website is protected by copyright. All content,
            including extracts, may only be used with the prior written consent
            of ILI.DIGITAL AG
          </p>
        </div>
      </div>
      <div className="bg-img-sub"></div>
    </>
  );
};

export default Imprints;
