import React from "react";
import "./Profile.css";
import profile_pic from "../../Images/profile.jpg";
import ProfileScript from "./ProfileScript";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const {
    status,
    userName,
    setUserName,
    userDescription,
    setUserDescription,
    userPic,
    setUserPic,
    userPicRaw,
    setUserPicraw,
    userPicPreview,
    setUserPicPreview,
    isEditting,
    setIsEditting,
    handleSaveButton,
    poppulateUserData,
    rawImageToURL,
    myposts,
    myClubs,
  } = ProfileScript();

  return (
    <>
    <div className="background">

      <div className="profile_box"></div>
      <div
        className="profile_picture"
        onClick={() => {
          if (isEditting) {
            document.getElementById("userProfilePic").click();
          }
        }}
      >
        {isEditting ? (
          <>
            <img src={userPicPreview} alt="profile_pic" />
            <input
              type="file"
              style={{ display: "none" }}
              id="userProfilePic"
              onChange={(e) => {
                setUserPicraw(e.target.files[0]);
                rawImageToURL(e.target.files[0]);
              }}
            />
          </>
        ) : (
          <img src={userPic} alt="profile_pic" />
        )}
      </div>
      <div className="details">
        <div className="name">
          {isEditting ? (
            <input type="text" placeholder={userName} id="userNameInput" />
          ) : (
            <p>{userName}</p>
          )}
        </div>
        <div className="wallet_address">
          {isEditting ? (
            <input
              type="text"
              placeholder={userDescription}
              id="userDescriptionInput"
            />
          ) : (
            <p>{userDescription}</p>
          )}
        </div>
        <div className="status">{status}</div>
        <div className="editButton">
          <button
            onClick={() => {
              if (isEditting) {
                let newUserName =
                  document.getElementById("userNameInput").value;
                let newUserDescription = document.getElementById(
                  "userDescriptionInput"
                ).value;
                handleSaveButton(newUserName, newUserDescription);
              } else {
                setIsEditting(true);
              }
            }}
          >
            {isEditting ? "Save" : "Edit Profile"}
          </button>
          {isEditting && (
            <button
              onClick={() => {
                setIsEditting(false);
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      <div className="more_info">
        <div className="options">
          <div className="myoptions">
            <button>My Posts</button>
            {myposts.map((post) => {
              return (
                <div className="option" key={post.content}>
                  {post.content}
                </div>
              );  
            })}
          </div>
          <div className="myoptions">
            <button>My Clubs</button>
            {myClubs.map((club) => {
              return (
                <div
                  className="option"
                  key={club.name}
                  onClick={() => {
                    navigate("/club/" + club.id);
                  }}
                >
                  {club.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default Profile;
