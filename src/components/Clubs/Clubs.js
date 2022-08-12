import React from "react";
import "./Clubs.css";
import Navbar from "../Navbar/Navbar";
import Infocards from "./Infocards";

import dummydata from "./dummydata";
import ClubsScript from "./ClubsScript";

const Clubs = () => {
  const { status, setStatus, clubData, clubsNumberData, filter, setFilter } =
    ClubsScript();
  return (
    <>
      <div className="club_box">
        <div className="club_info">
          <div className="categories_heading">
            <div className="heading">
              <h2>CATEGORIES</h2>
            </div>
            <div className="category_list">
              <ul>
                <li
                  onClick={() => {
                    setFilter("");
                  }}
                >
                  All
                </li>
                <li
                  onClick={() => {
                    setFilter("🌐 Web3");
                  }}
                >
                  🌐 Web3
                  {Object.keys(clubsNumberData).length > 0 &&
                    "(" + clubsNumberData["🌐 Web3"] + ")"}
                </li>
                <li
                  onClick={() => {
                    setFilter("🪐 Metaverse");
                  }}
                >
                  🪐 Metaverse
                  {Object.keys(clubsNumberData).length > 0 &&
                    "(" + clubsNumberData["🪐 Metaverse"] + ")"}
                </li>
                <li
                  onClick={() => {
                    setFilter("🏦 DeFi");
                  }}
                >
                  🏦 DeFi
                  {Object.keys(clubsNumberData).length > 0 &&
                    "(" + clubsNumberData["🏦 DeFi"] + ")"}
                </li>
                <li
                  onClick={() => {
                    setFilter("🎮 GameFi");
                  }}
                >
                  🎮 GameFi
                  {Object.keys(clubsNumberData).length > 0 &&
                    "(" + clubsNumberData["🎮 GameFi"] + ")"}
                </li>
                <li
                  onClick={() => {
                    setFilter("💖 SocialFi");
                  }}
                >
                  💖 SocialFi
                  {Object.keys(clubsNumberData).length > 0 &&
                    "(" + clubsNumberData["💖 SocialFi"] + ")"}
                </li>
                <li
                  onClick={() => {
                    setFilter("🖼 NFT");
                  }}
                >
                  🖼 NFT
                  {Object.keys(clubsNumberData).length > 0 &&
                    "(" + clubsNumberData["🖼 NFT"] + ")"}
                </li>
                <li
                  onClick={() => {
                    setFilter("🗳️ DAO");
                  }}
                >
                  🗳️ DAO
                  {Object.keys(clubsNumberData).length > 0 &&
                    "(" + clubsNumberData["🗳️ DAO"] + ")"}
                </li>
                <li
                  onClick={() => {
                    setFilter("⚡ Layer2");
                  }}
                >
                  ⚡ Layer2
                  {Object.keys(clubsNumberData).length > 0 &&
                    "(" + clubsNumberData["⚡ Layer2"] + ")"}
                </li>
                <li
                  onClick={() => {
                    setFilter("🔐 Crypto");
                  }}
                >
                  🔐 Crypto
                  {Object.keys(clubsNumberData).length > 0 &&
                    "(" + clubsNumberData["🔐 Crypto"] + ")"}
                </li>
                <li
                  onClick={() => {
                    setFilter("💩 Meme");
                  }}
                >
                  💩 Meme
                  {Object.keys(clubsNumberData).length > 0 &&
                    "(" + clubsNumberData["💩 Meme"] + ")"}
                </li>
                <li
                  onClick={() => {
                    setFilter("🏷️ Others");
                  }}
                >
                  🏷️ Others
                  {Object.keys(clubsNumberData).length > 0 &&
                    "(" + clubsNumberData["🏷️ Others"] + ")"}
                </li>
              </ul>
            </div>
          </div>

          <div className="categories_information">
            {clubData.length > 0 &&
              clubData.map((club, index) => {
                if (filter === club.category || filter === "") {
                  return (
                    <Infocards
                      key={club.name}
                      heading={club.name}
                      about={club.description}
                      members={club.members}
                      category={club.category}
                      profilepic={club.profilepic}
                      id={club.id}
                    />
                  );
                }
              })}
          </div>
          <div className="status">{status}</div>
        </div>
      </div>
    </>
  );
};

export default Clubs;
