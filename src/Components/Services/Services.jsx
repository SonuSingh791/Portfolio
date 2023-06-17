import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
// import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span  style={{ color: darkMode ? "white" : "" }}>My Technical</span>
        <span>Skills</span>
        {/* <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </spane> */}
        {/* <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a> */}
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "16rem" }}
          whileInView={{ left: "16rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Problem Solving"}
            detail={"Data Structures and Algorithms"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ top: "12rem", left: "12rem" }}
          whileInView={{ top: "18rem", left: "-16rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Languages"}
            detail={"C/C++ | JavaScript | Java, SQL | Python"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "12rem", left: "12rem" }}
          whileInView={{ top: "18rem", left: "0rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Frontend"}
            detail={
              "HTML | CSS | JavaScript | React.js | Redux | Bootstrap"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        {/* 4th */}
        <motion.div
          initial={{ top: "12rem", left: "12rem" }}
          whileInView={{ top: "18rem", left: "16rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Backend"}
            detail={
              "NodeJs | ExpressJs | REST APIs"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        {/* 5th */}
        <motion.div
          initial={{ top: "12rem", left: "12rem" }}
          whileInView={{ top: "18rem", left: "32rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Databases"}
            detail={
              "MongoDB (NoSQL) | MySql (SQL)"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        {/* 6th */}
        <motion.div
          initial={{ top: "12rem", left: "12rem" }}
          whileInView={{ top: "18rem", left: "48rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"CS Fundamentals"}
            detail={
              "DBMS | OS | OPPS | Computer Network"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;