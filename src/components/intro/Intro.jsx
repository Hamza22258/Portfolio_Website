import React from "react";
import { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Software Engineer",
        "Full Stack developer",
        "Cyber Security",
        "Gamer",
      ],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Hamza Malik</h1>
          <h3>
            -> <span ref={textRef}> </span>
          </h3>
          <div className="icons">
            <a href="https://pk.linkedin.com/in/iamhamzamalik" target="blank">
              <LinkedInIcon className="icon" />
            </a>
            <a href="https://www.facebook.com/u.sardar" target="blank">
              <FacebookRoundedIcon className="icon" />
            </a>
            <a href="https://www.instagram.com/i.am.hamzamalik/" target="blank">
              <InstagramIcon className="icon" />
            </a>
            <a href="https://github.com/Hamza22258" target="blank">
              <GitHubIcon className="icon" />
            </a>
          </div>
        </div>
        <a href="#portfolio" className="intro-arrow">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
