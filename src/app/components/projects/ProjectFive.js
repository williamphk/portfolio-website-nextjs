import { useState, useEffect } from "react";
import { Tooltip } from "react-tooltip";

// import php from "../../assets/icons/php.svg";
// import laravel from "../../assets/icons/laravel.svg";
// import mysql from "../../assets/icons/mysql.svg";
// import aws from "../../assets/icons/aws.svg";
// import github from "../../assets/icons/github.svg";

export default function ProjectFive({ projectFive }) {
  const [projectName, setProjectName] = useState("");
  const [blurb, setBlurb] = useState("");
  const [liveURL, setLiveURL] = useState("");
  const [githubURL, setGithubURL] = useState("");

  useEffect(() => {
    const getProject = async () => {
      const response = await fetch("/project.json");
      const data = await response.json();

      setProjectName(data[4].projectName);
      setBlurb(data[4].blurb);
      setLiveURL(data[4].liveURL);
      setGithubURL(data[4].githubURL);
    };
    getProject();
  }, []);

  return (
    <article className="project-five">
      <div className="project-introduction hidden">
        <div>
          <h3 className="project-title">{projectName}</h3>
        </div>
        <div className="project-description-and-live-preview-button">
          <img
            className="project-image-tablet"
            src={projectFive}
            alt="A screenshot of my project 5"
          />
          <video controls className="video-tablet">
            <source type="video/mp4" className="video-tablet-source" />
          </video>
          <p className="project-description">{blurb}</p>
          <div className="intersecting-element" data-img="4"></div>
          <h4 className="project-description">Key Features:</h4>
          <div className="hover-wrapper">
            <button className="hover5 hover">Authentication system</button>
            <button className="hover5 hover">Image uploading</button>
            <button className="hover5 hover">JSON Endpoint</button>
          </div>
          {/* <div className="project-description">
            <img
              src={php}
              alt="php"
              data-tooltip-id="php-tooltip"
              data-tooltip-content="PHP"
            />
            <Tooltip id="php-tooltip" />
            <img
              src={laravel}
              alt="laravel"
              data-tooltip-id="laravel-tooltip"
              data-tooltip-content="Laravel"
            />
            <Tooltip id="laravel-tooltip" />
            <img
              src={mysql}
              alt="mysql"
              data-tooltip-id="mysql-tooltip"
              data-tooltip-content="MySQL"
            />
            <Tooltip id="mysql-tooltip" />
            <img
              src={aws}
              alt="aws"
              data-tooltip-id="aws-tooltip"
              data-tooltip-content="Amazon Web Services"
            />
            <Tooltip id="aws-tooltip" />
            <img
              src={github}
              alt="github"
              data-tooltip-id="github-tooltip"
              data-tooltip-content="Github"
            />
            <Tooltip id="github-tooltip" />
          </div> */}

          <div className="project-button-wrapper">
            <a href={githubURL} className="live-preview-button" target="_blank">
              Source Code
              <span className="material-symbols-outlined">open_in_new</span>
            </a>
            <a href={liveURL} className="live-preview-button" target="_blank">
              Live Preview
              <span className="material-symbols-outlined">open_in_new</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
