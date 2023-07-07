import React from "react";
import { useState, useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Intro() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate data loading or other asynchronous tasks
    setIsLoaded(true);
  }, []);
  const textRef = useRef();
  const downloadLinkRef = useRef(null);

  const handleDownload = () => {
    downloadLinkRef.current.href =
      process.env.PUBLIC_URL + "/docs/HAMZA_MALIK_RESUME.pdf";
    downloadLinkRef.current.setAttribute("download", "HAMZA_MALIK_RESUME.pdf"); // Specify the desired filename
    downloadLinkRef.current.click();
  };
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
    <div className={`intro ${isLoaded ? "intro-active" : ""}`} id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/man-min.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Hamza Malik</h1>
          <h3>
            ->{" "}
            <span style={{ fontFamily: "Courier New" }} ref={textRef}>
              {" "}
            </span>
          </h3>
          <div className="icons">
            <a href="https://pk.linkedin.com/in/iamhamzamalik" target="blank">
              <LinkedInIcon className="icon" style={{ color: "#0C63BC" }} />
            </a>
            <a href="https://www.facebook.com/u.sardar" target="blank">
              <FacebookRoundedIcon
                className="icon"
                style={{ color: "#3b5998" }}
              />
            </a>
            <a href="https://www.instagram.com/i.am.hamzamalik/" target="blank">
              <InstagramIcon className="icon" style={{ color: "#E4405F" }} />
            </a>
            <a href="https://github.com/Hamza22258" target="blank">
              <GitHubIcon className="icon" />
            </a>
          </div>
          <div>
            <a ref={downloadLinkRef} style={{ display: "none" }}></a>
            <button className="button" onClick={handleDownload}>
              Resume
            </button>
          </div>
        </div>
        <a href="#skills" className="intro-arrow">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
