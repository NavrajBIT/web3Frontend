// "use strict";
import React, { useState } from "react";
import "./Login.css";

import { motion, useScroll } from "framer-motion";
import img1 from "../Images/56296.jpg";
import img3 from "../Images/4400847.jpg";

import img2 from "../Images/polygon.png"

import { AnimatePresence } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";


const Login = () => {
  const { scrollYProgress } = useScroll();
  //   const arrow = "\\0279E";
  const [clicked , setClicked] = useState(false);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  const text  = "Connect Wallet";
  return (

    <>
      <div className="outerbody">
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <div className="gradient"></div>
        {/* Navbar Section */}

        <Navbar connectText={text}  />

        {/* Navbar Section */}


        <div className="main_login_page">
          <div className="login_box">
            <motion.div
              className="mainheading"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h4>
                Collaborate with a group of like-minded people to create your
                own web3 club and start sharing the contents related to web3
                space and learn the latest happenings
              </h4>
            </motion.div>
          </div>
          <div className="built_on">
            <h3>Built On -  Polygon Network</h3>
            <img src={img2} alt="" />
          </div>
        </div>

        <motion.div className="image"
          initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
        >
          <div className="img">
            <img src={img1} alt="" />
          </div>
        </motion.div>

        <div className="instructions">
          <motion.div
            className="inst1 box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1.1 }}
            transition={{
              duration: 0.4,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}

            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
          >
            <button>Connect Wallet</button>
            {/* <motion.div className="arrow">
            </motion.div> */}
            {/* <div className="arrow">
            ⟹
            </div> */}
          </motion.div>

          <motion.div
            className="inst2 box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1.1 }}
            transition={{
              duration: 0.4,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            
          >
            <button>Create-Club/Join-Club</button>
            {/* <div className="arrow">
            ⟹
            </div> */}
          </motion.div>

          <motion.div
            className="inst3 box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1.1 }}
            transition={{
              duration: 0.4,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <button>Start Posting</button>
          </motion.div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default Login;
