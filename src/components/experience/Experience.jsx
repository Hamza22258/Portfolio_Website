import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Experience.scss";

export default function Experience() {
  return (
    <div className="experience-container">
      <h1 className="experience-heading-1">Work Experience</h1>
      <div className="cards">
        <div className="row">
          <div className="card">
            <div className="card-header">
              <div className="card-logo">
                <img
                  src={process.env.PUBLIC_URL + "/images/devsinc.jpeg"}
                  alt=""
                />
                <div>
                  <h3 className="experience-card-1-heading-1">
                    Software Engineer
                  </h3>
                  <p>Islamabad, Pakistan</p>
                </div>
              </div>
              <p>Feb, 2022 - Present</p>
            </div>
            <h2>Responsibilities</h2>
            <ul>
              <li>
                <span>✤ </span> Worked on wide variety of technologies and
                practices such CI/CD pipelines, containerization and cloud
                computing.
              </li>
              <li>
                <span>✤ </span> Successfully delivered complex software projects
                within designated timeframes, demonstrating strong project
                management and technical skills.
              </li>

              <li>
                <span>✤ </span> Provided my skills in Full Stack development
                with recent focus on performance and SEO.
              </li>

              <li>
                <span>✤ </span> Implemented innovative solutions that improved
                efficiency, scalability, or user experience, resulting in
                positive feedback from clients or end-users.
              </li>

              <li>
                <span>✤ </span> Led a cross-functional team in the development
                of a high- profile software product, showcasing leadership
                abilities and effective collaboration with diverse stakeholders.
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card">
            <div className="card-header-1">
              <div className="card-logo">
                <img
                  src={process.env.PUBLIC_URL + "/images/Fiverr-logo.png"}
                  alt=""
                />
                <div>
                  <h3 className="experience-card-1-heading-1">
                    Software Engineer
                  </h3>
                  <p>Remote</p>
                </div>
              </div>
              <p>2018 - 2022</p>
            </div>
            <h2>Responsibilities</h2>
            <ul>
              <li>
                <span>✤ </span> Provided multi-language support to the clients
              </li>
              <li>
                <span>✤ </span> Provided my programming skills to solve complex
                problem
              </li>
              <li>
                <span>✤ </span> Provided my skills in web development
              </li>
              <li>
                <span>✤ </span> Advised and managed major stack changes
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
