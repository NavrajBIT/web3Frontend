import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Create.css";
const Create = () => {
  return (
    <>
      <div className="navbar_box" >
        <Navbar connectText="Connected" />
      </div>
      <div className="outerCreate">
        
      </div>
      <div className="createbox">
        <div className="heading">
          <h2>Create a Club</h2>
        </div>
        <div className="create_form">
          <form action="">
            <div className="photo">
              <div class="file-input">
                <input type="file" id="file" class="file" />
                <label for="file">Select file</label>
              </div>
            </div>
            <div className="clubName">
              <input type="text" placeholder="Club Name" />
            </div>
            <div className="clubDescription">
              {/* <textarea  /> */}
              <textarea type="text" placeholder="Club Description" name="" id="" cols="93" rows="10"></textarea>
            </div>
            {/* <div className="clubAddress">
              <input type="text" placeholder="Contract Address" />
            </div> */}
            <div className="category">
              <p>Category</p>
              <select name="" id="">
                <option  value="">🌐 Web3</option>
                <option  value="">🪐 Metaverse</option>
                <option  value="">🏦 DeFi</option>
                <option  value="">🎮 GameFi</option>
                <option  value="">💖 SocialFi</option>
                <option  value="">🖼 NFT</option>
                <option  value="">🗳️ DAO</option>
                <option  value="">⚡ Layer2</option>
                <option  value="">🔐 Crypto</option>
                <option  value="">💩 Meme</option>
                <option  value="">🏷️ Others</option>
              </select>
            </div>
            <div className="create_button">
                <button>Create</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
