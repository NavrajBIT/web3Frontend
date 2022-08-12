import React from "react";
import { useState, useEffect } from "react";
import { getClubs, getClubsNumber } from "../apiCalls";

export const ClubsScript = () => {
  const [status, setStatus] = useState("Loading Clubs...");
  const [clubData, setClubData] = useState([]);
  const [clubsNumberData, setClubsNumberData] = useState({});
  const [filter, setFilter] = useState("");

  useEffect(() => {
    poppulateClubs();
  }, []);

  const poppulateClubs = async () => {
    getClubs().then((res) => {
      if (res !== "Server error") {
        if (res.status === "Success") {
          setClubData(res.data);
          setStatus("");
        } else {
          setStatus("Something went wrong. Please refresh.");
        }
      } else {
        setStatus("Something went wrong. Please refresh.");
      }
    });
    getClubsNumber().then((res) => {
      if (res !== "Server error") {
        if (res.status === "Success") {
          setClubsNumberData(res.data);
        }
      }
    });
  };
  return { status, setStatus, clubData, clubsNumberData, filter, setFilter };
};

export default ClubsScript;
