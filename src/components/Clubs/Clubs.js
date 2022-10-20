import React from "react";
import "./Clubs.css";
import Navbar from "../Navbar/Navbar";
import Infocards from "./Infocards";

import dummydata from "./dummydata";
import ClubsScript from "./ClubsScript";
import { useState } from "react";

import ReactPaginate from "react-paginate";

const Clubs = () => {
  const { status, setStatus, clubData, clubsNumberData, filter, setFilter } =
    ClubsScript();
  const [more, setMore] = useState("More");

  const showMoreCategories = () => {
    const showMore = document.getElementById("more");
    showMore.classList.toggle("increase_height");
    setMore("Less");
  };


  const [users , setUsers] = useState(clubData.slice(0,10));
  const [page, setPageNumber] = useState(0);
  const usersPerPage = 3;
  const pagesVisited = page * usersPerPage;

  const changePage = ({selected}) => {
    setPageNumber(selected);
  }

  const displayUsers = users.slice(pagesVisited , pagesVisited + usersPerPage).map((club, index) => {
    if (filter === club.category2.toLowerCase() || filter === "") {
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
  })

  const pageCount  = Math.ceil(users.length / usersPerPage);
  
  const MobileViewFilter = () => {
    const [searchValue , setSearchValue ] = useState("");
    return (
      <>
        <div className="category_search">
          <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Search" />
          <button
           onClick={() => { setFilter(searchValue.toLowerCase()) }}
          >Search</button>
        </div>
      </>
    )
  }


  return (
    <>
      <div className="club_box">
        <div className="club_info">
          <div className="categories_heading">
            <div className="heading">
              <h2>CATEGORIES</h2>
            </div>
            <MobileViewFilter/>
            <div className="category_list" id="more">

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
            <button
              onClick={() => {
                showMoreCategories();
              }}
              className="more_categories"
            >
              {more}
            </button>
          </div>
          <div className="pagination_button">
          

            <div className="categories_information">
              {/* {clubData.length > 0 &&
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
                })} */}
                {clubData.length > 0 && displayUsers} 
                <ReactPaginate
                  previousLabel="Previous"
                  nextLabel="Next"
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName="paginationBttns"
                  previousLinkClassName="previousBttn"
                  nextLinkClassName="nextBttn"
                  activeClassName="paginationActive"
                 />
            </div>
          </div>

          <div className="status">{status}</div>
        </div>
      </div>
    </>
  );
};

export default Clubs;
