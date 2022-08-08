import React from "react";
import "./Clubs.css"
import logo from "../../Images/BITlogo.png"
const Infocards = (props) => {
  return (
    <>
      <div className="information_box">
        <div className="image_container">
            <img src={logo} alt="" />
        </div>
        <div className="content_information">
            <div className="heading">
                <h5>{props.heading}</h5>
            </div>
            <div className="about">
                <p>{props.about[0]}</p>
                <p>{props.about[1]}</p>
            </div>
            <div className="members">
                Members : {props.members}
            </div>
        </div>

      </div>
    </>
  );
};

export default Infocards;
