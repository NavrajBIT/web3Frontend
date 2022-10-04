import React from "react";
import "./Login.css";
const Footer = () => {
  return (
    <div
      className="footer_bg"
      style={{
        background: "black",
        color: "white",
        // paddingTop: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // height:"70px",
        // position:"fixed",
        // bottom:"10px"


      }}
    >
      <div className="copyright" style={{ padding: "30px" }}>
        Copyright © 2022 Beyond Imagination Technologies Pvt. Ltd. All right
        reserved.
      </div>
    </div>
  );
};

export default Footer;
