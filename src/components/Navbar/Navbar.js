import React from "react";

import logo from "../../Images/BITlogo.png";

// import useNavigation from "use-navigation";
import { useNavigate } from "react-router";
import { useState, useContext } from "react";
import UserContext from "../../context/UserContext";

const Navbar = () => {
  const navigate = useNavigate();
  const user = useContext(UserContext);

  const shortAccount = () => {
    let accountLength = user.userAccount.length;
    let firstPart = user.userAccount.slice(0, 5);
    let lastPart = user.userAccount.slice(accountLength - 5, accountLength - 1);
    return firstPart + "..." + lastPart;
  };

  return (
    <>
      <div className="login_nav">
        <div className="logo">
          <img
            onClick={() => {
              navigate("/");
            }}
            src={logo}
            alt="Beyong Imagination Technologies"
          />
        </div>

        {user.isConnected && (
          <>
            <div className="createButton">
              <button
                onClick={() => {
                  if (user.isConnected) {
                    navigate("/create");
                  }
                }}
              >
                Create
              </button>
            </div>
            <div className="clubButton">
              <button
                onClick={() => {
                  if (user.isConnected) {
                    navigate("/clubs");
                  }
                }}
              >
                Clubs
              </button>
            </div>
          </>
        )}

        <div className="connect_button">
          <button
            onClick={() => {
              if (user.isConnected) {
                navigate("/profile");
              } else {
                user.login();
              }
            }}
          >
            {user.isConnected ? shortAccount() : "Connect"}
          </button>          

          {/* <button
            onClick={() => {
              if (user.isConnected) {
                navigate("/profile");
              } else {
                user.logout();
              }
            }}
          >
            {user.isConnected ? "Disconnect" : ""}
          </button>   */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
