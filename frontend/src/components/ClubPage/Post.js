import "./ClubPage.css";

import React, { useState } from "react";
import "./ClubPage.css";
import { AiOutlineLike } from "react-icons/ai";

import { PostLike } from "../apiCalls";


const Post = (props) => {

  const [data , setData ] = useState("");
  const [comments , setComments] = useState([data]);

  return (
    <div className="post">
      <div className="postedBy">
        Posted By :- <span> {props.postedBy} </span>
      </div>
      <div className="postContent">
        Post Content :- <span> {props.content} </span>
      </div>
      <div className="comment_and_like">
        <div className="comment">
          <input type="text"  placeholder="Comment... " value={data}
             onChange={(e) => setData(e.target.value) }
          />
          <button
            onClick={() =>  setComments([...comments , data ])}
          >Send</button>
        </div>
         <div className="like"><button  onClick={() => {
               let clubId = props.clubId;
         }}> 
            <AiOutlineLike size={30}/>
         </button> 
         </div>

      </div>

      <div className="comment_box">
        <h4>Comments</h4>
        {comments.map( (c) => {
          return(
            <>
              <li > {c} </li>
            </>
          )
        } )}
      </div>
    </div>
  );
};

export default Post;
