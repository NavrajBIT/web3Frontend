import React from "react";
import "./ClubPage.css";
import { useState } from "react";
import { createPost } from "../apiCalls";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

const NewPost = (props) => {
  const [status, setStatus] = useState("");
  const user = useContext(UserContext);
  return (
    <div className="newPost">
      <div className="newPostContent">
        <textarea name="newpost" id="newpost" cols="30" rows="10"></textarea>
      </div>
      <div className="status">{status}</div>
      <div className="postButton">
        <button
          onClick={() => {
            setStatus("Posting...");
            let content = document.getElementById("newpost").value;
            if (content === "") {
              setStatus("Post is empty.");
              return;
            }
            let clubId = props.clubId;
            let postedBy = user.userAccount;
            createPost(content, clubId, postedBy).then((res) => {
              if (res !== "Server error") {
                if (res.status === "Success") {
                  setStatus("");
                  window.location.reload();
                } else {
                  setStatus("Something went wrong. Please try again.");
                }
              } else {
                setStatus("Something went wrong. Please try again.");
              }
            });
          }}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default NewPost;
