import React from "react";
import "./work.scss";
import { useState } from "react";
export default function Work() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "WebAlacazar",
      desc: "WebAlcazar is a web application firewall. It's our final year project at NUCES. We are using Machine Learning to detect the attacks coming toward a web application.",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
      link: "https://github.com/Umar9787/WebAlcazar-WebApplicationFirewall",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Hamaray Bachchy",
      desc: "Hamaray Bachchy is a school and we made a full web application. It has a full front end and back end support with a database. PHP was used as backend language with sql.",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
      link: "https://github.com/Hamza22258/Hamaray-Bachchay",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Django Packet Sniffer",
      desc: "A classical packet sniffer, developed using Django and React. It inspects real-time packets coming to the target network and displays its HTTP traffic details.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      link: "https://github.com/Hamza22258/Django-Packet-Sniffer",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  const redirectToProject = () => {
    window.open('https://github.com/Hamza22258?tab=repositories"', "_blank");
  };

  return (
    <div className="work" id="work">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img loading="lazy" src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a className="project-anchor" href={d.link} target="blank">
                    <span>Project</span>
                  </a>
                </div>
              </div>
              <div className="right">
                <img
                  loading="lazy"
                  src={
                    process.env.PUBLIC_URL + "/images/project" + d.id + ".avif"
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />

      <button onClick={redirectToProject} className="button">
        More Projects
      </button>
    </div>
  );
}
