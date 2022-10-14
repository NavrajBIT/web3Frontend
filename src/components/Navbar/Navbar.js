import React from "react";

import logo from "../../Images/BITlogo.png";

// import useNavigation from "use-navigation";
import { useNavigate } from "react-router";
import { useState, useContext } from "react";
import UserContext from "../../context/UserContext";

const Navbar = () => {
  const navigate = useNavigate();
  const user = useContext(UserContext);

  const [media , setMedia] = useState(true);

  const shortAccount = () => {
    let accountLength = user.userAccount.length;
    let firstPart = user.userAccount.slice(0, 5);
    let lastPart = user.userAccount.slice(accountLength - 5, accountLength - 1);
    return firstPart + "..." + lastPart;
  };


  var x = window.matchMedia("(max-width: 480px)")
  if(x){
    
  }


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

        <div className="nav_buttons">
{/* {
  media ? <> */}


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
        </div>

  {/* </> : <>
    <div>
        <button></button>
    </div>
  </>
        
      } */}

        </div>

      </div>
    </>
  );
};

export default Navbar;
