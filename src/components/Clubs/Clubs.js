import React from "react";
import "./Clubs.css";
import Navbar from "../Navbar/Navbar";
import Infocards from "./Infocards";

import dummydata from "./dummydata";

const Clubs = () => {
  return (
    <>
      <div className="navbar_box">
        <Navbar connectText="Connected" />
      </div>
      <div className="club_box">
        <div className="club_info">
            <div className="categories_heading">
                <div className="heading">
                    <h2>CATEGORIES</h2>
                </div>
                <div className="category_list">
                    <ul>
                        <li>All</li>
                        <li>Web3</li>
                        <li>Metaverse</li>
                        <li>DeFi</li>
                        <li>GameFi</li>
                    </ul>
                </div>

            </div>

            <div className="categories_information">
                {/* <Infocards/> */}
                {dummydata.map((item , index) => (
                    <Infocards heading={item.heading} about={item.about} members={item.members} />
                ))}
            </div>
        </div>
      </div>
    </>
  );
};

export default Clubs;
