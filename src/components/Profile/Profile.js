import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Profile.css"
import profile_pic from "../../Images/profile.jpg"
const Profile = () => {
    const text  = "Connected";
  return (
    <>
        <div className="navbar">
            <Navbar connectText={text} />
        </div>

        <div className="profile_box">

        </div>
        <div className="profile_picture">
            <img src={profile_pic} alt="profile_pic" />
        </div>
        <div className="details">
            <div className="name">
                <p>Unnamed</p>
            </div>
            <div className="wallet_address">
                <p>0xc4ff18c697d8f8cd8283949ssdf09sdf880xc4ff18c</p>
            </div>
            <div className="editButton">
                <button>Edit Profile</button>
            </div>
        </div>

        <div className="more_info">
            <div className="options">   
                <div className="myposts">
                    <h3>My Posts</h3>
                </div>
                <div className="myclubs">
                    <h3>My Clubs</h3>
                </div>
            </div>
        </div>

    </>
  )
}

export default Profile