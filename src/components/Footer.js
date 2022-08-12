import React from "react";
import "./Login.css";
const Footer = () => {
  return (
    <div
      className="footer_bg"
      style={{
        background: "black",
        color: "white",
        paddingTop: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="copyright" style={{ padding: "80px" }}>
        Copyright © 2022 Beyond Imagination Technologies Pvt. Ltd. All right
        reserved.
      </div>
    </div>
  );
};

export default Footer;
