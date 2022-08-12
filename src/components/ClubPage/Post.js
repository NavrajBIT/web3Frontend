import "./ClubPage.css";

import React from "react";

const Post = (props) => {
  return (
    <div className="post">
      <div className="postedBy">{props.postedBy}</div>
      <div className="postContent">{props.content}</div>
    </div>
  );
};

export default Post;
