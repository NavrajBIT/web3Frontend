import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";

import { ethers } from "ethers";

const UserState = (props) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : null;
  const signer = provider != null ? provider.getSigner() : null;

  const [isConnected, setIsConnected] = useState(true);
  const [userAccount, setUserAccount] = useState(
    "0xE858f0370b101cD3F58E03F18BFA1240a591b5Fa"
  );

  // useEffect(() => {
  //   if (signer != null) {
  //     signer
  //       .getAddress()
  //       .then((res) => {
  //         setUserAccount(res);
  //         setIsConnected(true);
  //       })
  //       .catch((err) => {
  //         setIsConnected(false);
  //       });
  //   } else {
  //     setIsConnected(false);
  //   }
  // }, [provider, signer]);

  const iswalletAvailable = window.ethereum != null;

  const login = async () => {
    await provider
      .send("eth_requestAccounts", [])
      .then((res) => {
        setIsConnected(true);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("doing this now..");

    if (signer != null) {
      await signer
        .getAddress()
        .then((res) => {
          console.log(res);
          setUserAccount(res);
          setIsConnected(true);
        })
        .catch((err) => {
          setIsConnected(false);
        });
    }
  };

  return (
    <UserContext.Provider
      value={{
        signer,
        provider,
        login,
        iswalletAvailable,
        isConnected,
        userAccount,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
