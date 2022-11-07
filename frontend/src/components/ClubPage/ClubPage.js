import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ClubPageUI from "./ClubPageUI";
import { getClubData, getClubPosts   , getPostComments} from "../apiCalls";

const ClubPage = () => {
  const { clubId    } = useParams();
  const [status, setStatus] = useState("");
  const [clubData, setClubData] = useState({
    clubId: clubId,
    clubName: "",
    clubDescription: "",
    clubPic: "",
    clubCategory: "",
    clubAdmin: "",
  });

// console.log("clubpage");
//  console.log(clubData);

  const [clubPosts, setClubPosts] = useState([]);

  const [clubPostLike, setClubPostLike] = useState([]);

  const [clubPostComment, setClubPostComments] = useState([]);

  const [postId , setPostId] = useState();

  



  useEffect(() => {
    poppulateClubData();
  }, []);

  const poppulateClubData = async () => {
    setStatus("Loading club...");
    getClubData(clubId).then((res) => {
      if (res !== "Server error") {
        if (res.status === "Success") {
          let myClubData = {
            clubId: clubId,
            clubName: res.data.name,
            clubDescription: res.data.description,
            clubPic: res.data.profilepic,
            clubCategory: res.data.category,
            clubAdmin: res.data.admin,
          };

          setClubData(myClubData);

          setStatus("");
          poppulateClubPosts();
          poppulatePostComments();
        } else {
          setStatus("Club not found.");
        }
      } else {
        setStatus("Something went wrong. Please refresh.");
      }
    });
  };

  const poppulateClubPosts = async () => {
    setStatus("Loading posts...");
    getClubPosts(clubId).then((res) => {
      console.log("poppulate");
      console.log(res);
      if (res !== "Server error") {
        if (res.status === "Success") {
          setClubPosts(res.data);
          // setPostId(clubPosts);
          setStatus("");
        } else {
          setStatus("Something went wrong loading posts. Please refresh.");
        }
      } else {
        setStatus("Something went wrong loading posts. Please refresh.");
      }
    });
  };



  // new code added here

  // const poppulatePostComment = async () => {
  //   setStatus("Loading Comments...");
  //   getPostComments(clubId).then((res) => {
  //     if (res !== "Server error") {
  //       if (res.status === "Success") {
  //         let postComments = {
  //           clubId: clubId,
  //           clubName: res.data.name,
  //           clubDescription: res.data.description,
  //           clubPic: res.data.profilepic,
  //           clubCategory: res.data.category,
  //           clubAdmin: res.data.admin,
  //         };
  //         setClubPostComments(postComments);
  //         setStatus("");
  //         poppulateClubPosts();
  //       } else {
  //         setStatus("Club not found.");
  //       }
  //     } else {
  //       setStatus("Something went wrong. Please refresh.");
  //     }
  //   });
  // };

  const poppulatePostComments = async () => {
    setStatus("Loading posts...");
    getPostComments(clubId , postId).then((res) => {

      console.log(res);

      if (res !== "Server error") {
        if (res.status === "Success") {
          setClubPostComments(res.data);
          setStatus("");
        } else {
          setStatus("Something went wrong loading posts. Please refresh.");
        }
      } else {
        setStatus("Something went wrong loading posts. Please refresh.");
      }
    });
  };

  //new code is added here

  return (
    <ClubPageUI clubData={clubData} clubPosts={clubPosts} status={status} clubId={clubId}   />
  );
};

export default ClubPage;
