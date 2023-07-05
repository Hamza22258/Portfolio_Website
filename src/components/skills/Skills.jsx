import React from "react";
import "./Skills.scss";

export default function Skills() {
  return (
    <div className="skill-container" id="skills">
      <h1>Full Stack Development</h1>
      <div className="section-1">
        <div className="section-tools">
          <h2>Tools and Technologies</h2>
          <div className="tools-img-container">
            <img src={process.env.PUBLIC_URL + "images/html.png"} alt="" />
            <img src={process.env.PUBLIC_URL + "images/css-3.png"} alt="" />
            <img src={process.env.PUBLIC_URL + "images/sass.png"} alt="" />
            <img src={process.env.PUBLIC_URL + "images/js.png"} alt="" />
            <img src={process.env.PUBLIC_URL + "images/c++.png"} alt="" />
            <img src={process.env.PUBLIC_URL + "images/c.png"} alt="" />
            <img src={process.env.PUBLIC_URL + "images/python.png"} alt="" />
            <img src={process.env.PUBLIC_URL + "images/ruby.png"} alt="" />
            <img
              src={process.env.PUBLIC_URL + "images/typescript.png"}
              alt=""
            />
            <img src={process.env.PUBLIC_URL + "images/react.png"} alt="" />
            <img src={process.env.PUBLIC_URL + "images/rails.png"} alt="" />
            <img src={process.env.PUBLIC_URL + "images/django.jpeg"} alt="" />
            <img src={process.env.PUBLIC_URL + "images/nodejs.png"} alt="" />
          </div>
          <ul className="tools-list">
            <li>
              <span>⚡</span> Proficient in both frontend and backend
              development, with expertise in designing and implementing
              end-to-end web applications.
            </li>
            <li>
              <span>⚡</span>Skilled in frontend technologies such as HTML, CSS,
              and JavaScript, and experienced in using modern frontend
              frameworks like React, Angular, or Vue.js to create dynamic and
              responsive user interfaces.
            </li>
            <li>
              <span>⚡</span>Strong understanding of server-side programming
              languages such as JavaScript (Node.js), Python, Ruby, Java, or
              PHP, and expertise in using related frameworks (e.g., Express.js,
              Django, Ruby on Rails) to build robust and scalable backend
              systems.
            </li>
            <li>
              <span>⚡</span> Experienced in working with databases, including
              designing schemas, writing queries, and performing data
              manipulation using both relational (e.g., MySQL, PostgreSQL) and
              NoSQL (e.g., MongoDB, Firebase) databases.
            </li>
            <li>
              <span>⚡</span>Proficient in RESTful API development, including
              designing API endpoints, implementing authentication and
              authorization mechanisms, and handling data transfer between the
              frontend and backend.
            </li>
            <li>
              <span>⚡</span> Familiarity with version control systems (e.g.,
              Git) and collaborative development workflows, enabling effective
              teamwork and codebase management.
            </li>
          </ul>
        </div>
        <div className="section-cloud">
          <h2>Devops</h2>
          <div className="cloud-image-container">
            <img src={process.env.PUBLIC_URL + "images/docker.png"} alt="" />
            <img
              src={process.env.PUBLIC_URL + "images/kubernetes.png"}
              alt=""
            />
            <img src={process.env.PUBLIC_URL + "images/jenkins.png"} alt="" />
            <img src={process.env.PUBLIC_URL + "images/aws.webp"} alt="" />
            <img src={process.env.PUBLIC_URL + "images/mysql.png"} alt="" />
            <img src={process.env.PUBLIC_URL + "images/postgres.png"} alt="" />
            <img src={process.env.PUBLIC_URL + "images/sqlite.png"} alt="" />
            <img
              className="mongo-db"
              src={process.env.PUBLIC_URL + "images/mongodb.png"}
              alt=""
            />
          </div>
          <div className="cloud-list">
            <ul>
              <li>
                <span>⚡</span> Proficient in utilizing GitHub for version
                control and collaborative software development.
              </li>
              <li>
                <span>⚡</span> Experience with Docker for containerization,
                allowing for consistent and portable application deployments.
              </li>
              <li>
                <span>⚡</span> Skilled in setting up and configuring Jenkins
                for building, testing, and deploying applications through
                continuous integration and delivery.
              </li>
              <li>
                <span>⚡</span> Familiarity with Kubernetes for orchestrating
                and managing containerized applications at scale.
              </li>
              <li>
                <span>⚡</span> Knowledge of AWS (Amazon Web Services) for cloud
                infrastructure provisioning, storage, networking, and
                deployment.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
