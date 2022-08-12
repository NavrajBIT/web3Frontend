import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ClubPageUI from "./ClubPageUI";
import { getClubData, getClubPosts } from "../apiCalls";

const ClubPage = () => {
  const { clubId } = useParams();
  const [status, setStatus] = useState("");
  const [clubData, setClubData] = useState({
    clubId: clubId,
    clubName: "",
    clubDescription: "",
    clubPic: "",
    clubCategory: "",
    clubAdmin: "",
  });

  const [clubPosts, setClubPosts] = useState([]);

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
      console.log(res);
      if (res !== "Server error") {
        if (res.status === "Success") {
          setClubPosts(res.data);
          setStatus("");
        } else {
          setStatus("Something went wrong loading posts. Please refresh.");
        }
      } else {
        setStatus("Something went wrong loading posts. Please refresh.");
      }
    });
  };

  return (
    <ClubPageUI clubData={clubData} clubPosts={clubPosts} status={status} />
  );
};

export default ClubPage;
