import { useState, useEffect } from "react";
import { Tooltip } from "react-tooltip";

// import aspnet from "../../assets/icons/aspnet.svg";
// import csharp from "../../assets/icons/csharp.svg";
// import mssql from "../../assets/icons/mssql.svg";
// import github from "../../assets/icons/github.svg";
// import bootstrap from "../../assets/icons/bootstrap.svg";
// import azureDataStudio from "../../assets/icons/azure-data-studio.svg";
// import docker from "../../assets/icons/docker.svg";

export default function ProjectTwo({ projectTwo }) {
  const [projectName, setProjectName] = useState("");
  const [blurb1, setBlurb1] = useState("");
  const [blurb2, setBlurb2] = useState("");
  const [liveURL, setLiveURL] = useState("");
  const [githubURL, setGithubURL] = useState("");

  useEffect(() => {
    const getProject = async () => {
      const response = await fetch("/project.json");
      const data = await response.json();

      setProjectName(data[1].projectName);
      setBlurb1(data[1].blurb[0]);
      setBlurb2(data[1].blurb[1]);
      setLiveURL(data[1].liveURL);
      setGithubURL(data[1].githubURL);
    };
    getProject();
  }, []);

  return (
    <article className="project-two">
      <div className="project-introduction hidden">
        <div>
          <h3 className="project-title">{projectName}</h3>
        </div>
        <div className="project-description-and-live-preview-button">
          <img
            className="project-image-tablet"
            src={projectTwo}
            alt="A screenshot of my project 2"
          />
          <video controls className="video-tablet">
            <source type="video/mp4" className="video-tablet-source" />
          </video>
          <p className="project-description">{blurb1}</p>
          <div className="intersecting-element" data-img="1"></div>
          <h4 className="project-description">Key Features:</h4>
          <div className="hover-wrapper">
            <button className="hover2 hover">User authentication system</button>
            <button className="hover2 hover">Image uploading</button>
            <button className="hover2 hover">
              Role-based conditional rendering
            </button>
            <button className="hover2 hover">API Help page</button>
            <button className="hover2 hover">
              Library integration: TinyMCE and Lightbox
            </button>
          </div>
          {/* <div className="project-description">
            <img
              src={aspnet}
              alt="aspnet"
              data-tooltip-id="aspnet-tooltip"
              data-tooltip-content="ASP.NET MVC"
            />
            <Tooltip id="aspnet-tooltip" />
            <img
              src={csharp}
              alt="csharp"
              data-tooltip-id="csharp-tooltip"
              data-tooltip-content="C#"
            />
            <Tooltip id="csharp-tooltip" />
            <img
              src={mssql}
              alt="mssql"
              data-tooltip-id="mssql-tooltip"
              data-tooltip-content="Microsoft SQL Server"
            />
            <Tooltip id="mssql-tooltip" />
            <img
              src={azureDataStudio}
              alt="Azure Data Studio"
              data-tooltip-id="azureDataStudio-tooltip"
              data-tooltip-content="Azure Data Studio"
            />
            <Tooltip id="azureDataStudio-tooltip" />
            <img
              src={docker}
              alt="docker"
              data-tooltip-id="docker-tooltip"
              data-tooltip-content="Docker"
            />
            <Tooltip id="docker-tooltip" />
            <img
              src={bootstrap}
              alt="bootstrap"
              data-tooltip-id="bootstrap-tooltip"
              data-tooltip-content="Bootstrap"
            />
            <Tooltip id="bootstrap-tooltip" />
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
              Demonstration
              <span className="material-symbols-outlined">open_in_new</span>
            </a>
            <a
              href="http://ec2-3-134-95-190.us-east-2.compute.amazonaws.com/"
              className="live-preview-button"
              target="_blank"
            >
              Live Preview
              <span className="material-symbols-outlined">open_in_new</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
