import React from "react";

import logo from "../../Images/BITlogo.png";

// import useNavigation from "use-navigation";
import { useNavigate } from "react-router";

const Navbar = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="login_nav">
        <div className="logo">
          <img onClick={() => {
            navigate("/")
          }}  src={logo} alt="" />
        </div>

        {props.connectText === "Connected" && (
          <>
            <div className="createButton">
              <button
                onClick={() => {
                  if (props.connectText === "Connected") {
                    navigate("/create");
                  }
                }}
              >
                Create
              </button>
            </div>
          </>
        )}

        {props.connectText === "Connected" && (
          <>
            <div className="clubButton">
              <button
                onClick={() => {
                  if (props.connectText === "Connected") {
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
              if (props.connectText === "Connect Wallet") {
                navigate("/clubs");
              }
            }}
          >
            {props.connectText}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
