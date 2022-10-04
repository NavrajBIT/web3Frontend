import React from "react";
import "./ClubPage.css";
import NewPost from "./NewPost";
import Post from "./Post";

const ClubPageUI = (props) => {
  return (
    <>
    <div className="background">

      <div className="clubDetails">
        <div className="clubPic">
          <img src={props.clubData.clubPic} alt={props.clubData.clubName} />
        </div>
        <div className="clubData">
          <h1>{props.clubData.clubName}</h1>
          <h3>{props.clubData.clubDescription}</h3>
          <h5>{props.clubData.clubCategory}</h5>
        </div>
      </div>
      <div className="status" style={{color:"white" , marginLeft:"50px"}}>{props.status}</div>
      <div className="clubPostContainer">
        <NewPost clubId={props.clubData.clubId} />

        {props.clubPosts.map((post) => {
          return <Post content={post.content} postedBy={post.posted_by} />;
        })}
      </div>
    </div>

    </>
  );
};

export default ClubPageUI;
